---
title: 'Ethereum Guilds: opportunities + challenges'
excerpt: 'Rough outline for an experimental new funding tool which provides recruitment, retention, and reward mechanisms of core protocol contributors'
coverImage: '/ethguildcover.png'
date: '2024-06-06'
---
*Reposted with permission by Trent Van Epps, original [here](https://trent.mirror.xyz/MsXtV_TGZHp05FN_qmzeT8bBc1lRghR3Y0TPvAd-WrA)*

*Protocol Guild's design and traction emerged from a unique context - attempts to replicate should keep this in mind: e.g. Dev Tooling Guild, Basic Infra Guild*

*Thanks to Tim beiko and Josh Davis for review*

Over the last 2.5 years, I helped to launch the initial version of Protocol Guild and steward it toward its current state. On seeing its success, many people have suggested that the model should be reproduced for other Ethereum software stacks. While I agree this should be explored, I hope that people undertake the efforts with the right context and caution.

Whether you're already familiar with Protocol Guild or not, please read these two links first. The rest of the post will not be as useful without their information.

-   [the docs](https://protocol-guild.readthedocs.io/en/latest/01-eligibility.html)

-   [So - you want to start a Guild?](https://trent.mirror.xyz/DLYnuoCN-Hwuu0s4G_XZVdI-c2OD2KP3UAg_UFB9MpY) (April 2023)

This post covers:

-   Soil for the seed

-   Recommendations for other potential Guilds

    -   Case study: Dev Tooling Guild

    -   Case study: Basic Infrastructure Guild

Soil for the seed
-----------------

These are my personal reflections on some of the unique preconditions which were important in shaping the Protocol Guild's initial eligibility, ongoing governance, and eventual funding. I want to stress that these may not all be present in other contexts, and therefore, any other experiments will require different approaches.

To start, there are existing shared community values/understanding:

-   the Ethereum L1 is still evolving

    -   the maintainers already work together daily in a high-trust environment, which makes self-curation possible

    -   the Ethereum L1 requires full-time engagement, which makes it much easier to determine who is contributing

    -   the community understands the importance of funding this work, which is upstream of a lot of the user/protocol applications (eg. scaling, censorship resistance) all projects built on Ethereum have a dependency on the network, and an incentive to ensure it is well maintained.

    -   L1 political/social credible-neutrality of software production is important. client software infrastructure can't/shouldn't be monetized in the same way a dev tooling or app-level project could be

-   the L1 security/robustness assurance requires there to be many differentiated clients: helps to avoid extreme contention around adding new eligible projects. (ofc discussion around members/eligible projects does occur and needs to be facilitated, and eventually may hit a limit)

-   L1 stewardship is highly specialized

    -   community understands this institutional knowledge is important to retain/fund long-term. protocol devs are in very high demand, should be compensated on the risk/reward/"value to the commons" curve

    -   very high threshold for producing relevant work narrows the curation scope in terms of eligible projects, makes it easier to determine per-member eligibility

Other attributes which helped the mechanism:

-   L1 protocol can be outlined in specifications

    -   [Execution spec (EELS)](https://github.com/ethereum/execution-specs),[ consensus spec](https://github.com/ethereum/consensus-specs),[ Execution API](https://github.com/ethereum/execution-apis)
-   this is a very helpful reference for scoping eligibility: what bits of software implement the spec, what projects interface with the spec? see diagram below:

![](https://images.mirror-media.xyz/publication-images/3epolYOy0JDRZjrT7xJxo.png)

-   L1 protocol is logically centralized (single state machine)

    -   helps define eligiblity: what helps the chain come to consensus?

    -   clear infra dependency for funders e.g. L2s

Recommendations for other potential Guilds
------------------------------------------

Here are some tips for anyone considering whether a Guild-like funding mechanism might be useful for their particular domain.

-   eligibility drives the mechanism

    -   eligibility is the mechanism's purpose codified into a set of rules: "what are we incentivizing" - it is easier to form this around an existing group of people, rather than pursuing software projects that don't exist yet and trying to bootstrap them

    -   it might take a long time (3-6 months) to build initial consensus on boundaries. be laser focused on making eligibility as explicit as possible early on, well before raising any funding. not taking appropriate time to do this early may produce issues later

    -   membership should be broad enough to bootstrap legitimacy, but not overly broad so that consensus is impossible or there is too much overhead to operate it

-   talk it out

    -   the membership must develop the ability to talk clearly about the eligibility framework - it may need to be expanded or adjusted as part of the learning process. dependence on a facilitator/bootstrapping party for too long will be unhealthy
-   coordination is crucial

    -   there need to be high-context individuals driving the effort, moving towards milestones, advocating on the group's behalf - at least for the bootstrapping process
-   keep it simple

    -   try to design the simplest (but still internally consistent) eligibility framework possible. accommodating too many edge cases early on make it harder to adjust if needed
-   scale slowly

    -   run a time/funding bound pilot (1 yr/ $Xmm). if operators pump a mechanism full of funding it's not suited to handle, it's liable to implode

    -   consistency over time >> legitimacy >> funding - dont rush/switch the order

-   new levels, new devils

    -   as financial incentives available through the mechanism increase, new and unexpected dynamics may emerge. e.g. between commercial entities and the software projects which they host

    -   member orgs may still fundraise in the same rounds that the overarching Guild mechanism participates in

    -   if the effort seems to have legs beyond an initial Pilot, will likely need a legal entity

Of course, Guilds could probably be bootstrapped even with one or more several of these not being met - much of it comes from my experience with Protocol Guild.

### Case study: Dev Tooling Guild

I believe this would be the next best adjacent space to consider creating a Guild-like funding mechanism for. There's an existing group of maintainers working on dev tooling that requires relatively high context to contribute to. Here's a rough pass at a possible high level eligibility:

-   libraries

    -   web3.py, web3.js, ethers.js, web3j, viem, alloy, nethereum
-   dev frameworks

    -   hardhat, foundry, remix, ape
-   languages + compilers

    -   solidity, vyper, fe, yul, yul+
-   Other

    -   Sourcify

Please do not reference this list as gospel if you are involved in efforts to start this guild, it is simply an informed guess.Once you have a high level framework set, you have to decide individual eligibility.

-   How would a maintainer role be defined for the individuals working on the projects above? Full-time effort equivalent? Or more abstractly to accommodate the range of projects?

Open Questions

-   what would be the guiding rationale for why this org and the specific eligibility is needed?

-   naming matters in memetics/communicating scope quickly. DTG might not be the best to do this

-   there is no spec to help define the edges of eligibility

    -   when has a language/dev interface reached broad enough adoption to be considered? Protocol Guild requires new clients to meet specific requirements before being considered for eligibility

    -   and the inverse, how to decide when old tooling gets surpassed by new tech? this is also an open question for Protocol Guild.

-   As with Protocol Guild, some software is coupled with a commercial/capital entity that leverages the free product for its own ends. How should this be considered, at all, in the scoping of the high-level/maintainer eligibility?

-   This list is centered on the EVM - how does this fit in the multi-VM L2 world? (both in terms of deciding scope and potential funders

### Case study: Basic Infrastructure Guild

see VBs recent idea and my response [here](https://x.com/trent_vanepps/status/1792993284115063043):

![](https://images.mirror-media.xyz/publication-images/DM6hrL0YIqT7VS-xQ9qMz.png)

Open Questions

-   no "infra" spec to help define the edges

-   trying to wrap too many software categories into the same mechanism

    -   bridging infra is very different from contract languages
-   overly broad mandate

    -   incentivizing tokenless products is a very different goal than providing ongoing funding to existing projects
-   how many light-clients? which zkEVMs?

I don't mean to pick apart a tweet length idea, but these are the sorts of questions that come up for me when thinking about the idea.

* * * * *

Hopefully this was helpful to any prospective Guild summoners! Reach out if you have questions, or follow the [Guild account](https://twitter.com/ProtocolGuild). ⛓️🛡️
