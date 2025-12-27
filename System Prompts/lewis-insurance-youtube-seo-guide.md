# YouTube Video Analysis: "How Claude Code Ranked Me FIRST on Google"

**Source**: Greg Isenberg Podcast featuring James "The Boring Marketer"
**Video ID**: gWNFna6fgS8
**URL**: https://www.youtube.com/watch?v=gWNFna6fgS8

---

## Executive Summary

James used Claude Code to build and optimize a local service business website (Diesel Dudes - mobile diesel mechanic) that ranked #1-3 on Google within 24 hours, generating thousands of dollars in revenue. The entire process took approximately 4 hours.

**Key Result**: Top 3 organic rankings + Google Maps placement for "mobile diesel mechanic Charlotte" and related keywords within 24 hours of pushing the site live.

---

## Core Strategy from the Video

### The Arbitrage Opportunity

Local/boring businesses have:
- Competitors with outdated websites (10-15 years old)
- Low technical sophistication
- No SEO optimization
- Slow, poorly structured sites

This creates massive opportunity for AI-assisted optimization to dominate quickly.

---

## Step-by-Step Process Used

### Step 1: Keyword Research (Simple Approach)

**What James did**:
```
Prompt to Claude/ChatGPT:
"Here's my website, here's what I'm trying to do. Give me a list of 25-50 keywords I can optimize my website around."
```

**Keyword Categories Identified**:
1. Emergency keywords (high intent)
2. Service keywords
3. Problem keywords  
4. Local keywords (city + service)

**Key Insight**: Don't overcomplicate with volume metrics and competition analysis for local markets. Just ask AI for keywords and move forward.

### Step 2: Analyze Search Intent

Categorize keywords by buyer readiness:
- **Ready to buy**: "emergency diesel repair near me"
- **Service-seeking**: "mobile diesel mechanic Charlotte"
- **Problem-aware**: "truck won't start diesel"
- **Information-seeking**: Lower priority initially

Focus on high-intent keywords first for immediate revenue.

### Step 3: Build Dedicated Landing Pages

**The Supply/Demand Framework**:
- Demand = What people search for
- Supply = Landing pages on your website

**Create dedicated pages for**:
- Each service offered
- Each location/city served
- Service + location combinations

**Content Depth on Location Pages**:
- Local landmarks
- Unique information about each location
- Common issues specific to that area
- Frequently asked questions
- Local context (e.g., NASCAR industry in Charlotte)

### Step 4: Technical SEO Audit

**Prompt used**:
```
"Go through this website in extreme detail. Ultra think about this. Find all the technical and on-page SEO issues and opportunities that we can fix together so that I can dominate the local market."
```

**Issues Claude Found & Fixed**:
- Missing robots.txt
- Missing XML sitemap
- Page speed issues
- Missing schema markup
- Missing meta descriptions
- Slow loading images
- URL structure problems

**After identification**: Simply say "fix them" and Claude implements the fixes.

### Step 5: Use Sub-Agents for Parallel Work

**Prompt example**:
```
"Launch three agents:
1. Find missing alt text across the site
2. Identify pages under [X] word count
3. Audit for meta descriptions"
```

Or:
```
"Launch three sub-agents:
1. Find content opportunities
2. Analyze my competitors
3. Identify all other fixes I should make"
```

This allows parallel optimization while you work on other tasks.

### Step 6: Mobile & Speed Optimization

**Actions taken**:
- Compressed all images
- Converted images to WebP format
- Optimized for mobile speed

**Validation tool**: Google PageSpeed Insights (free)

**Hack**: Copy any errors from PageSpeed Insights directly into Claude Code - it knows exactly what to fix.

### Step 7: Internal Linking

Claude automatically:
- Linked relevant location pages together
- Connected related services
- Created logical site structure

No manual instruction needed - Claude discovered this as best practice.

### Step 8: Google Business Profile Setup

- Created/optimized Google Business Profile
- Had Claude verify consistency between website and GBP
- Ensured NAP (Name, Address, Phone) matches exactly

### Step 9: Deploy & Monitor

**Tech stack used**:
- GitHub for version control
- Vercel for hosting/deployment

Every push to GitHub auto-deploys to live site.

---

## Design Approach

**Key insight**: Design matters. AI-coded sites often look the same.

**James's approach**:
1. Hired designer to create Figma mockups
2. Used **Anima** plugin to convert Figma → React components
3. Claude Code assembled components into full website
4. Result: 95% design accuracy, minimal manual fixes needed

---

## Results Achieved

| Metric | Outcome |
|--------|---------|
| Time to build | ~4 hours |
| Time to rank | <24 hours |
| Rankings achieved | Top 3 organic + Maps |
| Revenue | Thousands of dollars in first days |
| Lead generation | Phone "blowing up" |

---

## Key Quotes from James

> "An SEO agency would charge you an arm and a leg to build out a website, create 50+ pages, optimize the entire thing. Using Claude Code, I was able to do all of this in a matter of hours."

> "The biggest gap I see with AI is people don't know the questions to ask. That's where the vertical expertise comes in."

> "If I didn't know to ask Claude Code about SEO, I wouldn't have gotten those jobs yesterday and made thousands of dollars."

> "How do you show up in ChatGPT? The way you show up in ChatGPT is by doing good SEO. There's really not one unique strategy different from just doing good foundational SEO."

---

## LLM/GEO Optimization Note

James addressed the "SEO is dead" argument:

**Reality**: Good SEO = Good LLM visibility

What matters for both Google AND LLMs:
- Clean technical foundation
- Proper meta tags and descriptions
- Natural keyword integration
- Topical authority
- Quality backlinks
- Reviews and trust signals
- LLMs.txt file (allow list for AI crawlers)

---

## Tools Mentioned

| Tool | Purpose |
|------|---------|
| Claude Code | Website building, SEO fixes, content generation |
| Figma | Design mockups |
| Anima | Convert Figma → React components |
| GitHub | Version control |
| Vercel | Hosting/deployment |
| Google PageSpeed Insights | Performance testing |
| SEMrush | Extended SEO audits (optional) |
| Google Business Profile | Local SEO |

---

## Full Video Transcript

### [00:00 - 01:08]
Everyone wants to build GPT wrappers, micro SaaS. I get it. It's super super sexy. But there's a huge opportunity right now to be using AI for boring businesses. I brought on the boring marketer and he shares the story of how in less than 24 hours, he ranked one of his boring businesses on Google in the top three spots for multiple target keywords and made thousands of dollars. And Claude Code did 100% of the work. And this is an exact tutorial with how to make money for boring businesses with AI. And he shares why he thinks that's where the money is.

We got the boring marketer on the pod, James. By the end of this podcast, what are people going to learn?

So, I kind of had a revelation that, you know, everyone's building like agents and workflows and wrappers and SaaS tools, but I feel like everyone's ignoring like businesses in their backyard. So, I want to talk about what I think is like a multi-billion dollar arbitrage opportunity to build a local service business.

### [01:08 - 02:27]
Okay. So, boring businesses in the AGI. That's right.

Okay. And then tactically what are people going to learn here?

Yeah. So, we were having a couple discussions on X and some people chimed in with some replies. One of the things that I'm astounded by is people still want to learn how to set up like their development environment with Claude Code. So, we're going to briefly go through that. Just some questions and some things to do in terms of prompting to make sure you're set up the right way. Then we're going to talk about how I was able to build this website in just a couple hours and perfectly match up my Figma design files. A lot of people struggle with, you know, getting nice designs with their AI tools that don't feel like AI made it. So, we're going to go through that process. And then most importantly, we're going to talk about how I optimized this website for local search and actually started generating revenue within 24 hours of making updates to the site itself.

Within 24 hours, making thousands of dollars of revenue, which is insane.

Yeah. So, I can't wait to just see how you did it. Let's get into it.

### [02:27 - 04:07]
Cool. So, the story here, I have a lot of friends that have boring businesses, you know, things that are outside of tech and startups and AI and stuff like that. And one of my friends has a small trucking company. So, he just ships goods from like, you know, Charleston to Charlotte and back and forth and all that. And his truck is used. It was breaking down and he kept running into these like mechanical problems. So, he found a local mechanic, started kind of building a relationship with him, and he thought, "Hey, maybe we should start a service that, you know, helps trucks get back on the road." And, he came to me and he was like, "Hey, like, you know, I'm really good at operating and I've got, you know, the mechanic and I know this business, but I don't really know how to like get a website going, get the marketing going for it. Would you like to partner up on this?" And I was like, you know, that sounds pretty interesting.

And it rang a couple like bells in my mind for a few reasons. One reason being all right like this might sound a little bit crazy, but what if like we have like an AGI takeoff by 2030 or something like that, you know, and digital services and SaaS and all this stuff is like super super disrupted, you know. That that is a real possibility. So I was like, okay, there might be a barbell strategy here to where you can kind of like hedge against that as like a multipreneur as as you kind of coined the term, right? So maybe on one side of the barbell, I've got, you know, my service businesses online, I've got my SaaS tools, I've got my community, and on the other side, I'm a partner in some like boring businesses that have a high degree of defensibility against being completely disrupted by AI. So, I don't think in the next 5 years there's going to be robots going down major highways coming to fix like, you know, heavy duty tractor trailers and stuff like that. So, I think that has some staying power and that's going to be a continued need for some time.

### [04:38 - 06:16]
Cool. Yeah. Let's see what you did.

All right. Cool. So, I'll do a quick tour around the website real quick and just kind of show you the structure and what I was able to do. So, you know, you have kind of like your basic homepage. We've got some nice little like illustrations and things like that. We've got like, you know, a bunch of clickable items that take you into like individual services and all of that stuff. We've got all these different location pages and you know, we have some other like SEO optimizations on the website like all these handy internal links and stuff like that.

So, if you look at some of these pages, I have like a huge amount of detail on all of these about each individual location. I've got like landmarks and you know, unique information about these locations that we can service and things along those lines. Now an SEO agency or a digital marketing agency would charge you an arm and a leg to go and like build out a website, create 50 plus pages, optimize the entire thing so that it'll rank for the keywords that are relevant to your company. Using Claude Code, I was able to do all of this in a matter of hours. So, actually, I did it over the weekend. It took me around four hours or so to get the site live, to do months worth of SEO work and push it live. And as you mentioned at the beginning, you know, this actually started generating thousands of dollars of revenue yesterday. This phone started blowing up and now the mechanic's basically fully booked up for the next few days. So that's like real vibe marketing ROI. Just using Claude Code, which I think is kind of mind-blowing.

### [07:23 - 08:10]
The devil's advocate to that is James, just cuz I've known you for 15 years, you are one of the best search marketers I know. You know, you've been there and done that. Someone who knows that there's value in SEO but doesn't know how to do that. How can they actually implement this and see similar results?

Yeah, let's dig in. So I've got like a whole process here that we can talk about. So, I'm going to walk you through sort of the exact process that I did, for getting your website like discovered and then we're going to cut back and talk about like the design stuff and the development environment stuff and all of that afterwards.

### [08:10 - 09:45]
All right. So, why another reason why I think like local is so interesting is because the competition is not very sophisticated. You know, like if you find kind of a boring niche in a local market, you're going up against people who haven't updated their website in 10 or 15 years, perhaps. They're still operating off, you know, notepads and spreadsheets and stuff like that. So, there's a real opportunity for somebody that's AI savvy to use this playbook to partner with other businesses or other operators and, you know, develop something that makes real money pretty quickly.

So the first thing that I did was I took the diesel dude's website and I gave it to AI and I was like, "Hey, find me some keywords." And keywords are just like what people are searching for. I think everyone knows that despite what you know X might have you believe SEO is not dead by any means on a local level. Actually, it's a huge opportunity right now.

You know, if a trucker is broken down on the side of the highway, he's not opening up ChatGPT and saying, "Hey, like, you know, how do I fix my truck and like what local mechanics should I call up?" And sitting there and letting it do research. He's opening up Google. He's finding a review. He's clicking on the call button and he's trying to get somebody there right away so he can get back on the road.

### [10:01 - 11:24]
James, so he's not in Cursor, you know, tapping into the Perplexity MCP. No, he doesn't have he's not popping open his development environment with Cursor calling Perplexity MCP and then using Claude Code to build a plan to find the optimal mechanic for his make and model.

Okay, understood. Yeah, just to clarify.

So, but think about it like you know if you need your air conditioner repaired or like you know you have a broken window or something like that like you're opening up Google you're finding someone with good reviews and you're giving them a call like that's how like 99.9% of this stuff works right.

So I wanted to find like what are those search terms that these folks are looking for. So you know keyword research people can over complicate it they're like do I need this tool and that tool and like you know what variations and volume and all this stuff do I need to discover and oftentimes get like analysis paralysis you know.

So here's a way that you can like bypass all of that and this is the vibe marketing way. So open up ChatGPT o3 or Claude or whatever and just say hey here's my website here's what I'm trying to do give me a list of like 25 to 50 keywords that I can optimize my website around. That's all you need to do really like you know for a local market especially, you don't need to worry about like all this different like volume and keyword metrics and competition level and stuff like that. I think a lot of people get hung up on it. So just want to clarify that all you have to do is ask AI what keywords you should focus on for your website.

### [11:24 - 13:03]
All right. So I had to kind of analyze the keywords for search intent and buying stage. And what I mean by that is are these folks like looking for repairs and service like right now? You know, I wanted to find out what keywords are that type where somebody's willing to like pick up their phone and give this company a call and which ones are just kind of like looking for information and stuff like that. So, when you get started, especially for like a boring business, you want to tap into those search terms where people are ready to like pull out their credit card or ready to have you come out to their site or wherever the work is happening. So, that's what I kind of dialed in on.

Okay. So, you can see that here like we have a few different categories of search terms that AI gave us. We have emergency keywords, service keywords, problem keywords, and local keywords. So I found that all of these were pretty high intent and they seem to be good ones to focus on.

So the other thing that you need to think about is SEO is all about really demand and supply. I mean that's really one simple way to think about it. So demand is what people are searching for and you can think of supply as like landing pages on your website. All right. So for each one of these search terms that related to a specific service that the company can do and any of the location-oriented terms, I ended up building out dedicated pages for each and every one of those. We'll talk about that in a bit when we get into the vibe coding aspect of this.

So find your keywords, map them to the intent, and make sure that you know they just kind of make sense and don't overthink it.

### [13:03 - 14:40]
All right. So the next step is, you know, I already had this website built out. We'll talk about how I built that. But then, I went into a SEO audit. So, I asked Claude Code, where I built the site, "Hey, go through this website in extreme detail. Ultra think about this. You can use the ultra think command. So, it'll spend extra time. Use Opus, really go deep and do sort of some deep research and find all the technical and on-page SEO issues and opportunities that we can fix together so that I can dominate the local market."

So, it went through it found out, hey, you don't have these files that help Google understand what the site is all about. It's slow to load. You can optimize the speed, you can make it snappier, you need to include schema markup and some of these other technical things so that Google knows exactly what your website does and then once you find them you can just say fix them.

So like you know when you work with like an agency or something like that that can take a long time. They have to get access to your codebase or whatever. And now there's this beautiful sort of like power that someone has who can build the website and go and fix all this stuff on their own really quickly and make sure it's optimized. So we identified those technical issues, we fixed them. So we did like, you know, robots.txt, XML sitemap, URL fixes. You don't even have to know what all of it is to be honest with you. Just that Claude will find it and Claude will do it. So you just have to have that initial prompt.

### [14:40 - 16:21]
Okay. So we did that and then we started to dig into content. So like I said for each of the locations and each of the services I asked it to go super super deep into mapping out how we can outrank all the competition on these individual search terms. So I don't have a location page that's like diesel services in Charlotte. I have a page that goes into local landmarks, things around Charlotte, common issues that might affect your truck, frequently asked questions about, you know, the industry or whatever. Like, it was able to reference like, ooh, there's probably a lot of like NASCAR type stuff happening in Charlotte, with trucks and shipping because that's where it's based or whatever. And it included that in this individual location page.

So, I guess I would say like, you know, typically if you're in a boring market, the competitors are not going super deep and getting all this information integrated into their site. It's your opportunity to use AI to do additional research and, you know, build out more information that, you know, search engines or even LLMs will prefer to crawl and to serve you up versus the other boring local ones.

All right. So here's a little thing like a lot of people you actually posted about this yesterday Greg about sub-agents in Claude Code. So here's a good use case for spinning up additional agents. So you know let's say that I wanted to keep working on the website. I wanted to you know start working on a blog or something like that but there was still you know some SEO or whatever stuff to fix in the background.

So I can just tell Claude Code, "Hey, launch three agents, find, you know, missing alt text or identify pages under certain amount or audit for meta descriptions." Or you can just say, "Hey Claude, launch three different sub-agents. One to, you know, find content opportunities, one to analyze my competitors, and one to identify all the other fixes I should be doing on my website." So it's as easy as that. And as you are, you know, working in that main chat window, Claude will have these multiple other agents kind of working on the background to identify the other opportunities and things that you should update and fix.

### [17:10 - 18:31]
I'm with you.

I'm with you. I don't get shocked easily but like I'm not I'm kind of shocked at how simple you're making this seem.

Yes. Yes.

Yeah. I mean, you know, like what I've realized lately is like it is actually very simple. Like you can just literally type a question, spin up a few agents.

I think the biggest gap that I see with AI is people don't know the question to ask. You know that's where the vertical expertise comes in. So that's really the gap and it's also the opportunity you know. So finding out what questions you should ask is really key and people don't really spend enough time on that I think you know. They want to get into the sexy stuff and start vibe coding and building stuff but like there is so much alpha in just knowing the questions to ask. If I didn't know to ask Claude Code about SEO or whatever I wouldn't have gotten those jobs yesterday and made thousands of dollars you know. So simply knowing the questions is so clutch.

So yeah once you know that it becomes pretty simple.

### [18:31 - 20:08]
So another thing that it found it was like hey your mobile website's slow. I was like okay fix that. So it went in it compressed all these images. It made it super snappy.

And right now when you like you know search for the site and you pull it up I mean it's it's super fast. So it shrunk a bunch of files. It converted all the images to a WebP format. It did all these technical optimizations that you know for the most part I don't even know what it is. I have no idea how I would personally do it manually. And you know I've got Claude Code just you know building a world-class machine for me on autopilot essentially.

So, it did that and you know after I started to make some of these changes, I went over to Google PageSpeed Insights and this is a free tool anyone can use and if you go to it you can type in your URL and it will give you performance issues with your website.

All right, so I just put in Diesel Dudes right here. Mobile still has some things I'm working on fixing, but the desktop site has an incredible performance score in terms of speed, accessibility, SEO. Basically, this just means it's super fast. Google knows exactly what this website does. There's minimal technical errors, and it loads in a snap.

So here's a little hack for you. Like, everyone's done a little bit of vibe debugging at this point. You know, they've like built something, they found some errors in the code, they copy and paste it back over to their agent to go fix it. You can do the same thing for this. You take your URL, you plug it in, you find an error, you go down, you find the details, you copy and paste this stuff into Claude Code. It knows exactly what to go fix. Work on getting those scores up on PageSpeed and that's some low-hanging fruit to get some additional traffic to your website and outrank your competition.

### [20:25 - 21:46]
You can take it a step further. You can get SEMRush or whatever. You can do an audit there. It'll give you a bunch of other like technical optimizations and you don't even need to know what it means. You can just copy and paste it to Claude. It'll prioritize them. It'll go into the codebase. It'll fix them.

Is it worth doing that?

I think it is here on this. So, like especially for like local rankings, like a lot of the websites that I kind of looked at that I was competing against were like old and and slow and things. And I think that's one of the reasons why I was able to rank so quickly. Like this is a pretty like targeted niche. Not a lot of like, you know, fast and informative websites. And just with like technical optimizations, I was able to climb the rankings pretty quick.

So, it depends on the market you're in. It depends on the competition and the search terms that you're going after. Like, I think again like in a not very competitive market, these types of things can make a big difference. If you're in a very crowded market with, you know, very sophisticated websites, like you're in a hypercompetitive SaaS market, just optimizing your page speed insights probably isn't going to, you know, shoot you to the top.

### [21:46 - 23:07]
Cool.

Yeah. All right. So that was a nice little hack that I that I worked on and that I found.

And you know, the other thing that I did you know, I set up a Google Business Profile. I had Claude Code kind of go back and forth between that and between the website to make sure it was like consistent and there weren't any like you know kind of information that didn't match up and things of that nature.

Claude Code went in and it made a bunch of like internal links on the website. So it linked up like relevant location pages. Linked up you know relevant services with related services and stuff like that. And these internal links are good for your SEO as well. Claude Code knew what to do. It discovered it on its own. I didn't need to tell it to go and you know create internal linking on the website.

So what was the result of all this? I mean, like I said, like if you now if you go to Google and you say "mobile diesel mechanic Charlotte" and you look here, like we're showing up in the maps like right away and you know, we're in the top three organic results and these some of these competitive websites and businesses have been around for you know, 20 years or something like that.

### [23:07 - 24:30]
This is crazy, dude.

Yeah.

Like you know how crazy this is.

This is nuts. I mean, that typically takes people months and months to go and climb up the rankings and start showing up for these like high intent keywords.

Yeah.

And this is basically like real estate on the internet owning that space, right? Cuz you know, while you're sleeping at night or on autopilot, you're getting leads.

Yeah. Exactly. Like as I said, like my business partner's phone has been, you know, blowing up. Let's see. Let's just look at I don't know. I'm just kind of seeing. Yeah, here we are. I77 mobile diesel repair. So, new website just getting started already ranking for a bunch of terms and getting phone calls from real companies who, you know, want their trucks fixed and back on the road. Incredible.

And I know people are going to you, you know, they're going to comment and be like, "Yes, you know, SEO isn't dead now, but in like a few years, we're going to be on our AI powered browsers and we're just, you know, just going to be asking Perplexity and ChatGPT questions." And the reality is, and let me know if you disagree with me, James, but the reality is if you do good SEO, the LLMs are going to just take some of the top SEO results and just plug it as answers.

### [24:30 - 26:22]
Yeah. Like, LLM or GEO or whatever the name of the week is.

I think it is a big opportunity. Like I think that we trust the recommendations that you know these LLMs are giving us and I think the traffic that people are getting from those recommendations is very high intent and very primed to take an action or whatever.

But yeah like how do you show up in ChatGPT or whatever? The way you show up in ChatGPT is by doing good SEO. There's really like I have not seen really one unique strategy that is different from just doing good foundational SEO to go and show up in LLMs.

You know like you have to think in terms of all right something needs to understand what my website's all about you know so you have to have a clean technical foundation. You have to have the right like meta tags and descriptions and you have to have your keywords kind of naturally integrated into your pages. You have to develop you know topical authority which is like you know having relevant information and signals around the topic that someone's looking for.

Links are important. So you know that's still relevant. Google still likes links. LLMs like links. They trust websites that other websites look at and link to.

Reviews also like getting good Google reviews if you're a local business like that is you can't really replace that. There's not a hack to go and do that's going to replace that kind of trust signal, you know.

So there are small things like that you can do and have Claude Code do your website like add LLMs.txt or something which is just kind of like essentially like an allow list that's saying let ChatGPT come and crawl this website and stuff like that. But there's not a huge differentiated you know strategy out there that some people know or whatever that's hiding from everyone else.

### [26:39 - 27:43]
It's like the Midwit meme, right? At the top of the curve is like do you know all the things, right? All the GEO things like LLMs.txt, but like the do just do good SEO, like foundational SEO is the trick to being found in LLMs.

That's the trick. And I think that, you know, again, some people sort of like, you know, chase a shiny object and then they forget about what actually matters for their own business.

Like for this company here like ranking high on Google is way more valuable than going and showing up in ChatGPT you know like it depends on who the customer is what they're doing how they find things and stuff like that. So are browsers going to change are they going to have AI yeah for sure but again this is such an arbitrage opportunity right now that I think people could you know generate tons of revenue by going and using Claude Code and the latest AI tools to outrank competitors in like boring industries and boring markets.

### [27:58 - 29:06]
Anything else you wanted to cover?

Yeah, real quick. Two hacks that I just wanted to share. One is, hey, how were you able to get this site to look good with Claude Code or whatever. So, I had a few people ask me that on X.

So, I had the Figma design files and I had a designer make it look good in there. So, I think that's like an important distinction. Like design and a good brand is very valuable. Like it's worth, you say this all the time, like it's worth getting a designer to like make it look good and then going and doing a lot of the vibe coding work. You'll stand out. A lot of sites look the same now that are vibe coded. People can kind of tell.

So, I had a designer whip something up in Figma for me. And then I got this plugin called Anima. Anima allows you to convert Figma designs into React components that Claude Code can use to assemble and build your website and essentially get, you know, 95% of the way there with the design. So, it got me there. I vibed a little bit, made a few updates and fixes. Anima is how I did that.

### [29:06 - 30:44]
The quick second thing is like, you know, people still seem to wonder like how do you set up Claude Code? How do you set up your development environment? Stuff like that. Maybe there's some like boring local businesses that don't have a lot of experience in this thing that you know watch this episode or whatever.

So, on your Mac, if you have a Mac, you have a terminal. Okay? Like you can search for terminal and then you can Google or ChatGPT like you know "Claude Code install command" or "how do I install Claude Code?" You'll end up getting like Claude Desktop. You can get a subscription. It's like 20 bucks a month or something like that. And take that command once you're authenticated on Claude Desktop throw it into your terminal. All the packages and the files will install for Claude Code and then you'll just like log in. It'll open up like you know Claude or Claude Desktop and you'll authorize or authenticate it and you're good to go.

Once you're there's a few things that you should do foundationally. One is you should set up GitHub. So, you want to be able to have, you know, control over each of the versions of code that you're pushing and have like a way to like roll back if you need to or share those code files or whatever. Create a repository on GitHub and ask Claude Code how you can push the site there and it'll help you with the steps.

And then I use Vercel to deploy and to host the website. So you can go to Vercel, you can create an account, you can link up Vercel with your GitHub repository and every time you push code updates to GitHub, it'll automatically update your website on Vercel for everyone to see. So that's the process that I used to get my environment set up as like a non-technical person.

### [30:44 - 32:36]
Appreciate the sauce.

You got it, man. Anytime. Hopefully people find it valuable. Just don't sleep on boring businesses I guess is the lesson here.

You know. Well, one thing is you have a YouTube channel, you have an X account. We'll include that in the show notes.

Yep.

Definitely subscribe and follow. You're just sharing things in real time.

Yeah, I'm at Boring Marketer on X. You can find me on YouTube, the Boring Marketer.

Number two is we've got this community called the Vibemarketer community and the URL is right here thevibemarketer.com and I wanted to show something. We have this new members hub that we launched and in here we have over 2500 different n8n workflows that you can literally plug and play if you want to automate something in your business. So, we give you the code, you can take it and throw it into n8n.

You know, we've got these broken out for different use cases. It's fully searchable. If you want to find something for, you know, marketing seed keywords, here's a good example. We talked about seed keywords. There's SEO ones, there's social media ones, whatever, like ready to go.

You can come join the community, get access to this. We've also started building out this partner resources for our members where we've got some awesome like deals and discounts for people who want to use some of the latest like you know AI workflow tools and stuff like that. So really starting to expand the community working on some cool classroom updates right now and I really do believe it's the best place to be for AI and marketing the intersection of those two things.

Cool. Yeah, I'll include I'll include the links to all those places. So people can get deeper and it's really just like I always say getting your hands dirty you know and testing trying iterating and dude I love having you on. You're the best. Thanks for sharing the sauce and I'll see you next time.

Thanks for having me, Greg. Talk to you soon. Later.

---

## Implementation Checklist for Lewis Insurance

Based on this video, here's your action plan:

### Immediate Actions (Week 1)

- [ ] Generate 25-50 keywords for Florida insurance services
- [ ] Categorize by intent (emergency, service, problem, local)
- [ ] Run full technical SEO audit with Claude Code
- [ ] Fix all technical issues (robots.txt, sitemap, schema, speed)
- [ ] Convert all images to WebP format
- [ ] Run Google PageSpeed Insights and fix all issues

### Content Build-Out (Week 2-3)

- [ ] Create dedicated page for each service (12 pages)
- [ ] Create dedicated page for each city (8 pages)
- [ ] Create city+service combination pages (96 total)
- [ ] Add unique local content to each city page:
  - Local landmarks
  - Area-specific risks
  - County requirements
  - Neighborhood mentions
  - Local statistics

### Technical Optimization (Week 2)

- [ ] Internal linking between related services
- [ ] Internal linking between city pages
- [ ] Schema markup on all pages
- [ ] Meta descriptions unique per page
- [ ] Alt text on all images
- [ ] Mobile optimization

### Local SEO (Week 3)

- [ ] Google Business Profile setup/optimization
- [ ] NAP consistency verification
- [ ] Review generation strategy
- [ ] Local directory submissions

### Ongoing

- [ ] Monitor Google Search Console
- [ ] Track keyword rankings
- [ ] Generate reviews from clients
- [ ] Build backlinks from local sources
- [ ] Add LLMs.txt file for AI crawler access
