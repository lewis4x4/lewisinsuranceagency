# Canopy Connect API — Complete Integration Guide (Corrected)

> **Source of truth:** https://docs.usecanopy.com/  
> **Last aligned to docs:** 2025-12-26  
>
> This guide is optimized for **team-based (server-to-server)** integrations using **SDK + Webhooks + Pulls API**. It also includes optional sections for **Components**, **Monitoring**, **Enrichment**, **Servicing**, and **PolicyCheck**.

---

## 0) What Canopy Connect does (in plain English)

Canopy Connect lets a consumer **permission** you to access their insurance account information so you can pull **structured policy data** and (optionally) **documents**.

Common agency wins:

- Prefill quote intake with verified policy details (VINs, drivers, dwellings, limits, deductibles)
- Reduce “unknowns” during lead capture and improve bind rate
- Detect cross-sell opportunities from coverage gaps
- Enable **Monitoring** for renewals / premium / coverage changes
- Trigger **Servicing** flows (carrier support varies)

---

## 1) Choose your implementation style (SDK vs Components vs App)

Canopy supports three “implementation styles”:

1) **SDK (recommended for most agency sites/apps)**  
   Use Canopy’s hosted connect UI. Fastest to production.

2) **Components (more customization)**  
   Build your own connect UI; Components tokenize inputs so you aren’t handling raw credentials directly.

3) **App (multi-tenant / act on behalf of other Canopy customers)**  
   OAuth-based access for “platform” scenarios.

This document focuses on **SDK**, with “Components/App” notes where relevant.

---

## 2) Credentials & environments

### 2.1 Team API keys (most common)

Used for your backend to call team-scoped endpoints.

- **Client ID** → header: `x-canopy-client-id`
- **Client Secret** → header: `x-canopy-client-secret`
- **Team ID** → used in URL paths for team endpoints
- **Webhook signing secret** → used to verify webhook signatures (per webhook)

✅ Keep `client_secret` and webhook secrets **server-side only**.  
🚫 Do not call Canopy APIs from the browser with these secrets.

### 2.2 Where to create keys (dashboard)

In Canopy’s dashboard (sandbox or production environment):

1. Open settings
2. Find **API Keys**
3. Create a new API key
4. Copy the **Client Secret** immediately (it may be shown only once)

> Exact UI labels can shift over time—use the official “How to create an API Key” doc as the source of truth.

### 2.3 Apps (OAuth) credentials (only if you’re building an App)

- App `client_id` / `client_secret`
- `access_token` (Bearer)
- `refresh_token`

> Important: if you include `x-canopy-client-id` and `x-canopy-client-secret` in a request, the API will ignore the `Authorization: Bearer …` header. Don’t mix the two auth schemes in one request.

### 2.4 Sandbox vs production

Treat **sandbox** and **production** as separate environments in config + database:

- Separate keys
- Often separate widgets/public aliases
- Separate webhooks and signing secrets

---

## 3) Base URLs (important correction)

Not every endpoint is under `/teams/{teamId}`.

### 3.1 Global API base
```
https://app.usecanopy.com/api/v1.0.0
```

Examples:
- `GET /carriers`
- `GET /tos`
- `GET /health`
- Widget/Components endpoints under `/widget/pull/*`

### 3.2 Team-scoped API base
```
https://app.usecanopy.com/api/v1.0.0/teams/{teamId}
```

Examples:
- `GET /pulls`
- `GET /pulls/{pullId}`
- `POST /monitorings`
- `GET/POST/PATCH/DELETE /webhooks`
- `GET /enrich/propertyData`
- `POST /servicings`

---

## 4) The “happy path” flow (SDK → Webhook → Pull fetch)

### Step A — Load the SDK script (front-end)

Add this to your site/app:

```html
<script src="https://cdn.usecanopy.com/sdk/v1.0.0/connect.js"></script>
```

Notes:
- Load the script from Canopy’s CDN as documented.
- Don’t use Subresource Integrity (SRI) for this script.

### Step B — Open the Connect experience (front-end)

You’ll open the Canopy flow using your widget’s **public alias** (from your widget link/dashboard).  
Optionally attach your own metadata:

- `pullMetaData` (SDK option) — JSON-serializable (e.g., `{ lead_id, user_id, source }`)
- `ccmeta_*` query params — attach metadata via widget link URL

> Use metadata to correlate pull/webhooks to a user/lead without guessing.

### Step C — Receive webhook events (backend)

Your backend receives webhook POSTs (JSON). Subscribe at minimum to:

- `POLICIES_AVAILABLE` (policy data is ready; documents not included)
- `COMPLETE` (policy data + documents are ready)
- `ERROR`

Also strongly recommended:
- `AUTH_STATUS` (auth state machine)
- `MONITORING_RECONNECT` (if monitoring enabled)
- `DATA_UPDATED` (supported post-pull updates)
- `SERVICING_WAITING_FOR_CONSUMER_CONFIRMATION` (if using servicing)
- `MONITORING_EVENTS` (if using monitoring)

> `POLICY_AVAILABLE` is deprecated in favor of `POLICIES_AVAILABLE`.

### Step D — Fetch structured data via Pulls API (backend)

When you receive `POLICIES_AVAILABLE` (and/or `COMPLETE`), fetch the pull:

```
GET https://app.usecanopy.com/api/v1.0.0/teams/{teamId}/pulls/{pullId}
```

Optional query param:
- `withPropertyData=true` — includes extra property data where available.

### Step E — Download documents (only after COMPLETE)

Once `COMPLETE` fires, download PDFs by document ID:

```
GET https://app.usecanopy.com/api/v1.0.0/teams/{teamId}/pulls/{pullId}/documents/{documentId}/pdf
```

---

## 5) Webhooks: events, payloads, and production hardening

### 5.1 Event types you should know

| Event | What it means | When you should act |
|------|---------------|---------------------|
| `AUTH_STATUS` | Pull changed auth state; includes `sequence` | Update UI / state machine |
| `POLICIES_AVAILABLE` | All policies ready; **documents not included** | Fetch pull data now |
| `COMPLETE` | Pull fully complete, including documents | Fetch pull data + download docs |
| `ERROR` | Pull failed (provider/internal) | Notify user / retry strategy |
| `MONITORING_RECONNECT` | Monitoring refresh needs user input | Send reconnect link or prompt in-app |
| `MONITORING_EVENTS` | Monitoring detected a change | Process change + optionally fetch latest pull |
| `DATA_UPDATED` | Supported update occurred (currently driver added/updated) | Update your stored snapshot |
| `SERVICING_WAITING_FOR_CONSUMER_CONFIRMATION` | Servicing action awaiting consumer confirmation | Fetch servicing action + show confirmation |

### 5.2 Retry behavior (design for idempotency)

If your webhook endpoint returns a **non-200** response or doesn’t respond within **30 seconds**, Canopy retries up to **10 times** with exponential backoff.

Implication: your webhook handler **must** be idempotent.

**Recommended pattern**
1. Verify signature (recommended).
2. Persist the raw webhook payload (or at least `(pull_id, event_type, received_at)`).
3. Immediately return **200 OK**.
4. Do heavy work async (queue/job).

### 5.3 Signature verification (recommended)

Canopy sends a `canopy-signature` header like:
```
t=1234567890,s=abcdef...
```

Verification flow:
1. Parse timestamp (`t`) and signature (`s`)
2. Build `{timestamp}.{rawBody}`
3. Compute HMAC-SHA256 over that string using your webhook signing secret
4. Constant-time compare signatures
5. Reject if timestamp outside your allowed window (e.g., 5 minutes)

> Canopy’s docs say signature verification is optional but recommended.

### 5.4 AUTH_STATUS ordering gotcha

`AUTH_STATUS` includes an incrementing `sequence` so you can safely ignore out-of-order events.

Only “go backwards” in UX for statuses that require user input:
- `NOT_AUTHENTICATED`
- `IDENTITY_VERIFICATION_OPTIONS`
- `IDENTITY_VERIFICATION`

Also note: `login_error_message` may contain HTML (links). Sanitize before rendering.

### 5.5 Webhook registration via API (optional)

You can manage webhooks through the Webhooks API:

| Method | Endpoint | Notes |
|---|---|---|
| GET | `/teams/{teamId}/webhooks` | List webhooks (includes signing secret) |
| POST | `/teams/{teamId}/webhooks` | Create webhook (`hookUrl`, `eventTypes`) |
| PATCH | `/teams/{teamId}/webhooks/{webhookId}` | Update webhook (`isActive`, `eventTypes`) |
| DELETE | `/teams/{teamId}/webhooks/{webhookId}` | Delete webhook |

---

## 6) Pulls API (server-side)

### 6.1 Required headers

```http
Accept: application/json
Content-Type: application/json
x-canopy-client-id: YOUR_CLIENT_ID
x-canopy-client-secret: YOUR_CLIENT_SECRET
```

### 6.2 Core endpoints

| Method | Path | Notes |
|---|---|---|
| GET | `/teams/{teamId}/pulls` | List pulls |
| GET | `/teams/{teamId}/pulls/{pullId}` | Get full structured pull data |
| PATCH | `/teams/{teamId}/pulls/{pullId}` | Update pull fields (per docs) |
| GET | `/teams/{teamId}/pulls/{pullId}/documents/{documentId}/pdf` | Download a document PDF |
| POST | `/teams/{teamId}/pulls/{pullId}/policyCheck` | Evaluate policy check on a pull (optional feature) |

### 6.3 Pull data model notes (important corrections)

The older guide included “custom” schemas (vehicle/driver/dwelling/claims) that do **not** match Canopy’s canonical schemas.

Instead:
- Use Canopy’s official schemas (Pull, Policy, Vehicle, Driver, Dwelling, Claim, Document, etc.)
- Expect **money values in cents** in many places (`premium_cents`, `deductible_cents`, etc.)
- Expect a mix of `date-time` fields and string date fields (e.g., `date_of_birth_str`)
- Expect enum values to be uppercase (e.g., `MALE`, `SINGLE`, etc.)

**Best practice:**  
Store the raw Canopy Pull JSON (versioned), then map to your internal canonical models for quoting.

---

## 7) Metadata (best practice)

Two supported ways to attach metadata:

1) **SDK option**: `pullMetaData` (JSON-serializable)  
2) **Widget link**: `ccmeta_*` query params (e.g., `?ccmeta_lead_id=...`)

Notes:
- Don’t put sensitive info in metadata.
- Webhook examples show `meta_data` as an object, but the Pull schema may return `meta_data` as a string—parse safely.

---

## 8) Carriers API (capabilities discovery)

Carriers endpoints are **global** (no teamId path):

- `GET /carriers`
- `GET /carriers/{carrierId}`

Use these to:
- Populate carrier pickers (Components/custom flows)
- Inspect carrier requirements (login fields, MFA patterns)
- Identify whether specific features (e.g., servicing actions) are supported

---

## 9) Enrichment API (server-side)

> Enrichment endpoints live under your team, but use `/enrich/*` (not `/enrichment/*`).

| Method | Path | Purpose |
|---|---|---|
| GET | `/teams/{teamId}/enrich/propertyData` | Property/building data |
| GET | `/teams/{teamId}/enrich/driverLicense` | Driver license lookup |
| GET | `/teams/{teamId}/enrich/drivingRecordIq` | Driving record intelligence |
| GET | `/teams/{teamId}/enrich/household` | Household enrichment |

Some enrichment may be plan-based / billable.

---

## 10) Monitoring (ongoing refresh)

Monitoring lets you keep a consumer’s insurance account connected and receive refreshed data over time.

### 10.1 Two flavors
1. **Automatic refresh for all Pulls** — coordinate with Canopy (interval must be ≥ 30 days)
2. **Per-pull monitoring via API** — enable monitoring for specific pulls

### 10.2 Creating monitoring via API

```
POST /teams/{teamId}/monitorings
```

Typical fields:
- `pull_id`
- `interval` (docs show `P30D`)

### 10.3 When user input is required

If Canopy can’t automatically refresh a monitored account, you’ll receive `MONITORING_RECONNECT`. The payload includes:
- `auth_status`
- `reconnect_url` (send to consumer)
- `reconnect_token` (used for whitelabel/custom flows)

Reconnect tokens can expire; call the documented endpoint to get a fresh token before using SDK-based reconnect.

---

## 11) Servicing (two-way changes)

Servicing is a special pull type used to **apply changes** to a policy (carrier support varies).

High-level flow:
1. Create a servicing pull via Servicings API
2. Handle servicing events (including confirmation)
3. When `SERVICING_WAITING_FOR_CONSUMER_CONFIRMATION` fires:
   - Call `GET /teams/{teamId}/servicings/{servicingActionId}` to fetch confirmation details
   - Present confirmation to user and continue

If a pull has multiple servicing actions, you may receive multiple WAITING_FOR_CONSUMER_CONFIRMATION webhooks.

---

## 12) Components + custom auth flows (optional)

If you build a custom flow (instead of hosted SDK UI), you’ll use the Auth API / Widget Pull endpoints, such as:

- `POST /widget/pull/consentAndConnect`
- `POST /widget/pull/connect`
- `POST /widget/pull/idvoptions`
- `POST /widget/pull/idv`

These flows involve `pull_jwt` tokens and the `AUTH_STATUS` state machine.

---

## 13) Error handling checklist

### Webhook ERROR event
- Treat as “pull did not complete successfully”
- Still respond `200 OK` to the webhook
- Log the error and show a retry path to user/support

### HTTP errors (API calls)
Common ones:
- `401` invalid credentials
- `403` forbidden
- `404` not found
- `429` rate limited (backoff + retry)
- `5xx` transient errors (retry with exponential backoff)

---

## 14) Security checklist (production)

- ✅ Keep `x-canopy-client-secret` server-side only.
- ✅ Verify webhook signatures (recommended).
- ✅ Idempotent webhook handling (expect retries).
- ✅ Sanitize any HTML from `login_error_message`.
- ✅ Ensure webhook endpoints are HTTPS.
- ✅ (Optional) encrypt stored pull JSON at rest.

---

## 15) Implementation checklist (practical)

### Phase 1 — Basic “get data in”
- [ ] Create API keys (sandbox + production)
- [ ] Create/configure Widget (public alias)
- [ ] Embed SDK and open Connect flow
- [ ] Implement webhook endpoint (`POLICIES_AVAILABLE`, `COMPLETE`, `ERROR`)
- [ ] Fetch pull on webhook and store raw JSON (versioned)

### Phase 2 — Operationalize
- [ ] Add signature verification
- [ ] Add idempotency keys + durable queue processing
- [ ] Implement document download (on `COMPLETE`)
- [ ] Map Pull → internal models (auto/home/commercial/life)

### Phase 3 — Optional value-add
- [ ] Enrichment endpoints
- [ ] Monitoring subscriptions + `MONITORING_RECONNECT` handling
- [ ] `DATA_UPDATED` handling (driver changes)

### Phase 4 — Advanced
- [ ] Servicing flows + confirmation UX
- [ ] PolicyCheck (if you use it)
- [ ] Policy forms download (if relevant)

---

## 16) Environment variables (example)

```env
# Team-based auth (server-side)
CANOPY_CLIENT_ID=...
CANOPY_CLIENT_SECRET=...
CANOPY_TEAM_ID=...

# Webhooks
CANOPY_WEBHOOK_SIGNING_SECRET=...

# Optional
CANOPY_API_BASE_URL=https://app.usecanopy.com/api/v1.0.0
```

---

## 17) Official reference links (quick jump)

### Core
- Docs home: https://docs.usecanopy.com/
- Getting Started: https://docs.usecanopy.com/reference/getting-started

### SDK
- Using the SDK: https://docs.usecanopy.com/reference/using-the-sdk

### Webhooks
- Using Webhooks: https://docs.usecanopy.com/reference/using-webhooks
- `POLICIES_AVAILABLE`: https://docs.usecanopy.com/reference/webhook-event-policies-available
- `COMPLETE`: https://docs.usecanopy.com/reference/webhook-event-complete
- `AUTH_STATUS`: https://docs.usecanopy.com/reference/webhook-event-auth-status
- `ERROR`: https://docs.usecanopy.com/reference/webhook-event-error
- Webhook retries: https://docs.usecanopy.com/reference/webhook-retries
- Verify webhook signatures: https://docs.usecanopy.com/reference/verifying-webhook-signatures

### Pulls & documents
- Pulls API (get pull): https://docs.usecanopy.com/reference/get-pull-by-id
- Document PDF download: https://docs.usecanopy.com/reference/get-document-by-id

### Schemas (recommended reading)
- Pull: https://docs.usecanopy.com/reference/schemas-pull
- Policy: https://docs.usecanopy.com/reference/schemas-policy
- Vehicle: https://docs.usecanopy.com/reference/schemas-vehicle
- Driver: https://docs.usecanopy.com/reference/schemas-driver
- Dwelling: https://docs.usecanopy.com/reference/schemas-dwelling
- Claim: https://docs.usecanopy.com/reference/schemas-claim
- Document: https://docs.usecanopy.com/reference/schemas-document

### Enrichment / Monitoring / Servicing
- Enrichment: https://docs.usecanopy.com/reference/get-property-data
- Monitoring: https://docs.usecanopy.com/reference/how-to-use-monitoring-1
- Servicing: https://docs.usecanopy.com/reference/how-to-use-servicing-1

### Apps
- Canopy Connect Apps: https://docs.usecanopy.com/reference/canopy-connect-apps
