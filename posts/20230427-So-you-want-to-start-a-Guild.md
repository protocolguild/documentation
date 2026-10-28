---
title: 'So - you want to start a Guild?'
excerpt: 'Recently, more people have reached out expressing interest in creating a version of Protocol Guild for their particular domain. This post is for anyone also considering a similar “commons infra guild.” It explores the primitives and characteristics central to the mechanism as well as their tradeoffs in other contexts.'
coverImage: '/startguildcover.png'
date: '2023-04-27'
---

*Reposted with permission by Trent Van Epps, original [here](https://trent.mirror.xyz/DLYnuoCN-Hwuu0s4G_XZVdI-c2OD2KP3UAg_UFB9MpY)*

Recently, more people have reached out expressing interest in creating a version of [Protocol Guild](https://protocol-guild.readthedocs.io/en/latest/) for their particular domain. This post is for anyone also considering a similar “commons infra guild.” It explores the primitives and characteristics central to the mechanism as well as their tradeoffs in other contexts.

# Funding allocation primitives

While it’s still a project in development, the Guild was structured to facilitate funding with the lowest bureaucratic overhead possible imposed on members. At its core are two very basic primitives, which are present in all funding allocation mechanisms.

1. a curation process which produces a list of eligible recipients

* Protocol Guild uses “[self-curation](https://protocol-guild.readthedocs.io/en/latest/01-membership.html#self-curation)” by individual peers working on core development. This is somewhat contingent on a high-trust community of peer stewards, where the assumption is that high quality work will still be produced absent invasive oversight. This is also enabled through the perspective of a collective protocol emerging from the collaborative stewardship by many constituent parts, instead of something like a competitive RFP process.

* Communities using [Coordinape](https://coordinape.com/) also use self-curation

* Members of the Gitcoin DAO curate the requirements and categories for Grants Rounds, which ultimately results in a list of grantees available for quadratic funding." [Source](https://gov.gitcoin.co/t/discussion-feedback-request-gitcoin-program-beta-round-eligibility/13306)

* The Optimism Foundation [sets the scope for RPGF rounds](https://oplabs.notion.site/Optimism-RetroPGF-2-Project-Manual-0a2e741133cd49b0b), and then filters applications accordingly

2. a weighting mechanism applied to that list

* Protocol Guild uses time-weighting instead of subjective peer ranking. While it’s true this prevents more granular measures of individual impact, using time-weighting sidesteps the contention that might come out of peer ranking, doesn’t require time to apply, and is objective and transparent to members.

* Coordinape uses peer ranking where the particulars are decided by each community using the tool

* Gitcoin places a max cap (IIRC 15%) to prevent any one project from being allocated too much of any single matching pool. Additionally, the preferences of the public are interpreted via Quadratic Funding (QF) to allocate $ weights

* OP RPGF rounds delegate the weighting responsibility to Badge Holders, instructing them to use the rough heuristic of “impact = profit.”

# The shape of the Guild

While Protocol Guild strives for simplicity, the institutional form is pretty opinionated:

1. in response to a unique set of framing conditions related to funding Ethereum core protocol development

2. To intentionally constrain the decision space imposed on members

These may not map exactly to your situation, but are perhaps still useful for informing your decisions. Below are some of the Guild’s characteristics, reasons why they are so central to the mechanism, and a few things to consider in your exploration.

1. **Member curation**

* The Guild expects that the membership curates itself, not an external council/funder. Is the domain to evaluate easily observable? Is it roughly clear to see who is doing what work consistently? The Guild is concerned with a very narrow domain: core Ethereum protocol stewardship defined by this [eligibility framework](https://protocol-guild.readthedocs.io/en/latest/01-membership.html#eligibility-requirements).

* How easily could you make a list which covers the a sufficient number of contributors? Inarticulate eligibility frameworks may produce many edge cases, and potentially overwhelm your membership’s curation efforts.

* It’s important to find the right balance between overly permissive and overly restrictive curation. Having too many narrowly defined mechanisms (eg. one grant per individual) introduces excessive overhead to sponsors and members. Overly broad eligibility makes it hard to convincingly advocate the necessity of funding to potential sponsors eg. something like “Open Source Guild” would have 10s of thousands of potential members and is effectively impossible to curate or fundraise for.

2. **Broad based funding**

* The Guild responded to a void in the commons funding space: a holistic core protocol that allows contributors to cooperate instead of compete for funding

* Are there funders who have expressed interest and are looking for a Guild-like mechanism in your space? Having the distribution mechanism is only one part of the equation. You will still have to do the non-trivial work of outreach to funders, demonstrating the value of past work, and making this case into the future. Starting with interested sponsors makes your work much less taxing.

3. **Onchain**

* The Guild has ~150 members from 20+ teams. An onchain mechanism was necessary to facilitate funding from onchain orgs, with the lowest possible overhead, while also transparently & trustlessly distributing the funding.

* If your project is a one-off grant to a small number of people, it may not make sense to be onchain

4. **Concerned with funding holistic stewardship**

* The Ethereum protocol will still be evolving over the next 5-10 years. The Guild exists to fund and incentivize a stable pool of contributors over that period.

* Just as the Ethereum distributed system takes inputs from many actors to produce a unified global state, the production of the underlying software combines efforts from many contributors. There is no single entity which maintains and evolves the protocol in isolation. Protocol Guild reproduces the qualities inherent to the production of a software commons as a funding stream. With this tool, the ecosystem can now share the collective responsibility of funding core protocol stewardship.

* If you’re going to go through the trouble of bootstrapping a new institution and norms to fund it, it may be best to only do it for long term projects centered on the same domain, eg. ongoing workstreams with high trust between the collaborators.

* The Guild makes iterated social commitments (eg. quarterly membership updates) to continue curating, which builds trust with sponsors.

5. **Autonomous weighting & disbursement**

* The Guild has no treasury allocation process, at least in the traditional sense. Instead, it cedes that to an objective time-weighting and trustless vesting mechanism. The intentional tradeoff to foreclose this decision space from ourselves gives us lower governance overhead/ possible contention, at the cost of lower weighting granularity and less flexibility in funding disbursement.

* If you intend to distribute grants to specific grants/applicants, following the autonomous strategy may not make sense.

* Do you want to take feature requests in exchange for funding? The Guild does not do this and may not be the right mechanism for your project. If you’re interested in funders having a say in disbursements, then check out simple Moloch DAOs where membership proposals must come with funding attached, and grant governance rights over the treasury.

6. **Independent of external governance outcomes**

* The Guild is concerned with a very narrow scope: producing a list of contributors, and building norms around funding it as a mechanism. Inasmuch as there is one, the entity and its collective membership claims no ownership over Ethereum governance. Setting development goals is the purview of the community through existing venues like the All Core Dev calls, the R&D Discord, client teams, and forums (eg. [ethresear.ch](https://ethresear.ch/), [ETH Magicians](https://ethereum-magicians.org/))

* For potential other Guild projects: Is funding coupled with long-term governance of the software the contributors produce? Approaching this is a much larger design space than the Guild attempts to address - any attempts should keep this in mind.

---

Hopefully this was helpful to any prospective Guild summoners! Please do reach out on [Twitter](https://x.com/trent_vanepps) if you have questions or to be added to the Guild discord, or follow the [Guild account](https://x.com/ProtocolGuild). ⛓️🛡️

*Thanks to [Tim Beiko](https://x.com/TimBeiko), [cheeky-gorilla](https://x.com/cheekygorilla0x) and [Justin Florentine](https://x.com/robocopsgonemad) for review and feedback.*
