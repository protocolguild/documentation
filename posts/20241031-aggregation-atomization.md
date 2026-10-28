---
title: 'Aggregation & atomization: dependency funding round dynamics'
excerpt: 'The term "public goods" has been diluted - "dependency" might be better. Round-based funding mechanisms incentivize atomization - how can we avoid this?'
coverImage: '/atomcover.png'
date: '2024-10-31'
---
*Reposted with permission by Trent Van Epps, original [here](https://trent.mirror.xyz/ia1sSXWw6Q_0gseWhPDpt0WbsOadCfQ-23yAxNn4sXA)*

The term "public goods" has been diluted - "dependency" might be better. Round-based funding mechanisms incentivize atomization - how can we avoid this?

Thanks to Carl, Cheeky, Jonas, and Tim for review and comments. Cover image from the [NOAA page](https://oceanservice.noaa.gov/education/tutorial_corals/welcome.html) on corals - "most corals are made up of hundreds to hundreds of thousands of individual coral polyps."

1.  "Public Goods" vs "Dependencies"

2.  Funding Round Tradeoffs

3.  Reflecting on OP Retro Round 5

4.  Possible modifications for rounds

"Public Goods" vs "Dependencies"
--------------------------------

In the Ethereum ecosystem, the term "public goods" has been applied to objects of widely varying themes, scales, and impact: niche media, podcasts, free software, local events, national regulatory reform, global climate advocacy, user safety, products & applications, even fun side projects. We have failed to develop standards of rigor for the use of the term. When it applies to everything, it describes nothing. True public goods are actually quite uncommon. Let's re-anchor to the actual definition: "a commodity or service that is provided without profit to all members of a society". We have neglected the "all members" provision of the definition, which implies scale:

-   Is this resource available to and depended on by a broad public outside of its originating niche? simply being open source or having a feature limited free tier is not sufficient to qualify

-   If this resource stopped existing, how many people would be negatively impacted?

We can sidestep ambiguities about the meaning of "public goods" by reframing the discussion around "dependencies" instead. "Dependency" is better suited for the Ethereum software ecosystem: crucial bits of infrastructure (eg. networks, software, libraries) not directly maintained by an actor. Consider this dependency ordering:

1.  Applications: User-facing, built with libraries and smart contract languages, which consume blockspace provisioned by;

2.  L2s: which rely on the;

3.  Ethereum L1 network for settlement/censorship resistance guarantees, which emerges from many actors running instances of;

4.  L1 client software, which is maintained and improved by hundreds of peers.

Protocol Guild was created to provide funding for the peers mentioned in #4, who are of existential importance to Ethereum's entire ecosystem, enabling all applications and activities that operate on top of it. And yet, funding for this work falls far short of matching its scale and impact. When we do encounter large-scale shared resources, we are not good at recognizing their scale/impact and funding it proportionally.

Funding Round Tradeoffs
=======================

Round-based funding mechanisms are a mainstay in the Ethereum ecosystem: Gitcoin, Optimism, Octant, CLRFund, DAODrops, Giveth, etc. Recurring rounds are good for building consistency norms, and allowing breaks where the operating team can iterate.

But they come with tradeoffs, which I first wrote about [in 2021](https://protocol-guild.readthedocs.io/en/latest/07-resources.html#tradeoffs-of-existing-mechanisms) around the initial Protocol Guild Pilot:

1.  attention games

2.  eligibility scoping

3.  high expectations of evaluators

4.  atomization incentive

Recurring rounds demand attention from allocators/evaluators/funders and beneficiaries alike. Participating projects are forced to compete against each other, dedicating time and energy campaigning or sprinting to fill out applications - scarce resources which should ideally be put towards the work that they are seeking funding for. "Popularity contests" in Vitalik's [recent words](https://x.com/VitalikButerin/status/1848885974996291800).

Eligibility needs to be broad enough to attract applicants, but acceptably narrow enough to satisfy funders (large projects funding Gitcoin, OP Foundation giving OP), allocators (badgeholders, QF matchers, GLM lockers), round operators. Round operators have some incentive to build and maintain mindshare - not necessarily to develop or enforce a strong definition. If you can't get projects to show up, it's harder to claim legitimacy for the program. Perhaps in response to community recognition of the section above, round-based funding mechanisms have experimented with the permissiveness of their eligibility:

1.  Gitcoin started using narrower thematic rounds, where projects can be evaluated against those with similar profiles. However, they maintain a broad-based, "big tent" approach to eligibility and the definition of Public Goods.

2.  Optimism added categories in [Round 3](https://optimism.mirror.xyz/Bbu5M1mTNV2Z637QxOiF7Qt7R9hy6nxghbZiFbtZOBA) to reduce the evaluative bandwidth expected of badgeholders, but in practice projects could select multiple categories so it was less useful. In this round there was community pushback about the presence of large VC-funded projects. In response, operators reminded the community that eligibility made no consideration for the origin of funding. More subtly, people switched from using "RetroPGF (Retroactive Public Goods Funding)" to "Retro Funding". [Round 4](https://retrofunding.optimism.io/round/results/4) saw the shift to standalone rounds for specific categories, the first being "Onchain Builders".

3.  Octant caps the number of projects per round (currently 30), which forces GLM allocators to narrow in on what's important and not spread funding over a long-tail of varying applicants. This choice is unique among these three programs. However, the program definition of public goods is still only loosely enforced by the Octant team.

Unreasonably high expectations are placed on the evaluative capabilities / context familiarity of allocators (eg. QF matching funders, badgeholders, GLM lockers). This "wisdom of the crowd" becomes a proxy for "public goodness" / "value to the commons" / "value created". Allocators usually commit to this on top of their existing full-time engagements, and are asked to evaluate the niche technical projects under consideration. When the pool of allocators is relatively small or known, this opens up the possibility for public/private lobbying. Vitalik's "[popularity contest](https://x.com/VitalikButerin/status/1848885974996291800)" comment also applies here.

Finally, by capping rewards per project, or by failing to make allocators aware of the size of the beneficiary set (i.e. number of recipients), these programs can incentivize atomization - the artificial separation of commons-scale resources into more and more granular forms. Companies, teams, projects, or individuals seek to represent themselves separately, outside of their collaborative contexts, because it is the rational strategy to maximize their funding. This increases the bandwidth expected of round operators (who have to conduct the initial eligibility filter), allocators (they have to review more projects), and potential beneficiaries (more time spent filling out applications for multiple projects or individuals).

Reflecting on OP Retro Round 5
------------------------------

The idea of "incentivizing atomization" was especially apparent in the most recent [OP Retro Round 5](https://retrofunding.optimism.io/round/results/5). For a data driven overview, please check out Carl's excellent piece: [Opening up the ballot box (RF5 edition)](https://docs.opensource.observer/blog/rf5-ballot-box). As he states "The reward function is a game, and players will optimize for it." The outcomes suggest a number of possible causes, which are outlined below.

Initial eligibility & atomization

The optimal approach was to claim max impact for the smallest number of beneficiaries, or split large projects into smaller ones. This graph illustrates the benefit clearly:

![](https://images.mirror-media.xyz/publication-images/E4LOiNJPX5Jy0PbWMzQqy.png)

To further emphasize what the above graphs are showing us, let's rank the annotated projects by how much OP was received per person:

1.  Ethereum POS Testnet

    1.  1 beneficiary

    2.  1 project

    3.  52k OP / person

2.  Independent Ethereum Client Contributor

    1.  1 beneficiary

    2.  Contributing to 5 projects

    3.  37k OP / person

3.  Geth*

    1.  ~10 beneficiaries

    2.  1 project

    3.  23k OP / person

4.  Protocol Guild

    1.  ~185 beneficiaries

    2.  29 teams/projects

    3.  1k OP / person (vested over 4 years)

There is a clear funding discrepancy when considering the number of beneficiaries per project and the resulting OP per person.

* While it's true that the OP-stack has a strong dependency on Geth software, the broader L1 context should be considered. There, stability and resilience is achieved only through [client diversity](https://clientdiversity.org/) - how strongly should this be surfaced in the allocation?

Legibility is not impact

Badgeholders were asked to evaluate the 9 months of work since the end of Round 3. In March 2024, the Dencun upgrade was shipped to Ethereum mainnet. Network upgrades require extensive coordination between hundreds of core contributors: building rough consensus on EIP feature sets, implementing and testing, releasing software, fuzzing and testing, testnet upgrades and more. The Dencun upgrade included a new feature called [EIP-4844](https://www.eip4844.com/) (in development since March 2022), which passed on incredible 10-100x cost reductions to users of L2s that adopted it.

If we use Protocol Guild as a proxy representative for many of these contributors, the impact provided to Optimism is massive. But the work benefits differently depending on the level of legibility or context it is presented through. The same work was valued 37x (Independent contributor) and 52x (POS Testnet) more impactful when shown from a higher level representation: the commons guild.

Stewardship is less legible - for good reason

It's also possible that badgeholders define impact as something distinct. However, the ultimate impact only emerges from the consistent, cumulative, quiet grind to maintain software over long periods - not any brilliant breakthroughs by a genius team in isolation. Protocol Guild bundles together individuals for funding in the same way the shared infrastructure is produced. (Read more [here](https://trent.mirror.xyz/Lehny46ZMdxMEow0XE_RgowV2ntkp30chJRWPCEYbGQ) - "Protocol Guild: a funding framework for the Ethereum commons".)

An illustrative case study can be found in the beneficiary backlash to the [EIP-4844 contributors collection](https://gov.optimism.io/t/feedback-on-eip4844-contributors-collection/5566) from March 2023. Here, OP Round Operators tried to celebrate a shortlist of contributors to an anticipated Ethereum protocol feature with additional funding (admirable!). However, the operators were rebuffed by the same people. The list reflected individuals who had worked directly on the feature, but not any of their colleagues which had done other necessary but less visible work: fixing bugs, improving node performance and accessibility, optimizing sync code, creating the spec, running devops infrastructure, testing the implementations, etc. For that reason, many beneficiaries asked that any allocation be forwarded to a mechanism better suited to recognize collective work: Protocol Guild. The design of the round plays a big part in whether this strategy is optimal or not.

Misconceptions about levels of PG funding

There is a lot of work yet to be done to bring a scalable, usable, and secure Ethereum to the world. The likelihood of the protocol achieving escape velocity is most possible when it has a broad, competent, and stable set of maintainers. This scalability, usability, and security expertise has ripple effects out into the broader Ethereum Mainnet and EVM ecosystems, Layer 2s, and DeFi projects. Core contributor stability is most likely to happen when the positions can offer incentives which are:

-   Competitive: Ethereum L1 maintainers are undercompensated relative to the industry. Protocol Guild's actionable, driving motivation is to set a compensation floor for this work.

-   Consistent: Through the industry's boom and bust cycles, stability is cherished where it can be found. All donations to Protocol Guild are vested by default over 4 years though immutable smart contracts which cannot be turned off or clawed back.

![](https://images.mirror-media.xyz/publication-images/S6wo2cOs-l75kuZEOKh7t.png)

Over the next 12 months, Protocol Guild will only provide $51k to the median member (as of Oct 30 2024 - [Dune Dashboard](https://dune.com/protocolguild/protocol-guild)). We do not believe this is sufficient relative to the existential importance of the work, and so continue our fundraising and advocacy efforts to increase the agency of core maintainers.

Possible modifications for rounds
---------------------------------

We assume that dependency funding rounds are interested in efficiently and accurately rewarding impact within a set of beneficiaries. Incentivising "aggregation" (that is, applicants not being incentivised to represent themselves separately outside of their collaborative contexts) would;

-   Significantly lower the overhead/bandwidth required of operators/allocators/evaluators and participating beneficiaries;

-   Avoid the emerging equilibrium where beneficiaries try to game the eligibility framework with multiple projects or where individuals atomize their work;

-   Reduce the technical domain expertise required of operators and allocators (which they may lack), because aggregation forces a level of self-curation by applicants, serving as an initial eligibility filter.

Here are a few thoughts on how to internalize the benefits of aggregation to proportionally fund large-scale common resources:

Remove caps on allocations

-   A well-meaning guardrail intended to limit the domination of a particular project, but which artificially suppresses the average project size. Bigger is better for reducing overhead.

-   Tradeoff: a misallocation by badgeholders could be compounded, but we already expect too much of them, so not much of a departure.

Give special consideration to projects with a large number of beneficiaries

-   Add a new category of beneficiary outside of the Retro format which has guaranteed access to a stream of resources, e.g. 1% of new emissions or Superchain inflows (in the spirit of [PG's 1% pledge](https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng)).

-   Tradeoff: This assumes the method for counting the number of beneficiaries/project contributors is trustworthy, alongside significant penalties for misreporting.

-   Tradeoff: recipients from this tier need to be explicitly added or removed by badgeholders via governance.

Cap projects per round

-   True shared goods are quite uncommon. This forces allocators to choose "what really matters" and incentivizes baskets of applicants.

-   Eg. Octant rounds are limited to 30 and require GLM lockers to choose any additions to each round.

-   Tradeoff: some marginally positive projects may find themselves on the other side of the cutoff. Places more expectation/pressure on the capability of allocative/curative mechanisms.

Explicitly weight the number of beneficiaries in the allocation formula

-   Built into allocation: have badgeholders allocate "OP per contributor" (instead of a total OP amount for a project). This amount per contributor is then multiplied by the self-reported number of contributors to produce the amount per team/project.

-   Lighter-touch: only surface the number of beneficiaries on each profile. Badgeholders have this available to inform their decisions, but are not obligated to use it in the final allocation (whether "OP per person" or "total OP per project"). This approach could also be surfaced in ranking tools like Pairwise.

-   Tradeoff: This assumes the method for counting project contributors is trustworthy, alongside significant penalties for misreporting.

I acknowledge that these suggestions come with their own challenges. While they are deeply influenced by my experiences building and soliciting funding for [Protocol Guild](https://protocol-guild.readthedocs.io/), the ideas could simplify round operations for all participants. My observations of Optimism, Gitcoin, Octant are surfaced here only because they are in the arena, funding the good fight.Looking forward to feedback, thanks for reading 🙏
