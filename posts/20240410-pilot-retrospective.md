---
title: 'Protocol Guild Pilot Retrospective'
excerpt: 'Protocol Guild was started as a 1 year pilot, and this retro shares our consolidated learnings from that time, reflecting not just on that year but also on how that experience will shape the future of Protocol Guild.'
coverImage: '/20240410-pilot-retrospective/PilotRetro.png'
date: '2024-04-10'
---

The Protocol Guild was initially launched as a 1-year pilot which ran from May 2022 until May 2023. The mechanism tied together new components and ideas like self-curation, time-weighting and eligibility frameworks, to create a novel collective funding mechanism for Ethereum's core protocol maintainers.

At the time, the decision to establish a new funding mechanism might have appeared counterintuitive, considering Ethereum's ecosystem had already given birth to a suite of innovative funding programs. Some of these programs focused on distributing grants via DAO / token-holder voting (e.g. [ENS](https://research.lido.fi/), [Uniswap](https://gov.uniswap.org)), others leveraged [quadratic funding](https://wtfisqf.com/) (e.g. [Gitcoin](https://www.gitcoin.co/)), while others sought to recognize impact via [retroactive public goods funding](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c) (e.g. [Optimism RPGF](https://app.optimism.io/retropgf)).

Yet, while these funding programs have many positive qualities (such as accessibility to diverse grantees, consistent funding schedules and taking on operational overhead), they were not optimized for allocating funding to a diverse set of individuals contributing to Ethereum's decentralized and "[bazaar](http://www.catb.org/~esr/writings/cathedral-bazaar/cathedral-bazaar/)" style core protocol development.

Protocol Guild’s opinionated approach was to have Ethereum’s core protocol maintainers themselves curate and maintain a list of their peers, i.e. individuals actively working on building and maintaining Ethereum’s core protocol. This list could then be embedded into onchain contracts which would vest donations directly to members.

A simple time-weighting formula was implemented to allocate funds to contributors. This recognized longevity and consistent contributions with a higher share of donated funds. This mechanism could then be seamlessly integrated into existing funding programs as a beneficiary, harnessing established funding channels to create robust incentives for attracting and retaining Ethereum's core protocol maintainers over time.

Of course everything above was - at the time - based on assumptions that needed to be validated in practice. This is why the decision was made to start with a relatively small-scale pilot, to evaluate the practicality, efficiency, and usefulness of the mechanism - before scaling it further. This phased approach allowed for the collection of internal and external feedback, identify areas needing improvement, and use all that to make informed, iterative adjustments..

Now - almost one year after the conclusion of the pilot! - we are happy to share our consolidated learnings. Since the pilot ended, we’ve had time to survey the membership and be introspective about not just the results of the pilot, but also where the Protocol Guild should go from here.

## Results To-Date

The below stats include the period starting May 7th 2022 (when the pilot’s vesting contract was [deployed](https://etherscan.io/tx/0x0fe4b8b7ff4e1301e9cbf6613b805dc76cffb4a633f36244e7544e9dfd8612b7)), until the time of writing (April 10th 2024). All data can be seen in our Dune Dashboard [here](https://dune.com/protocolguild/protocol-guild), while a dashboard specifically for the 1-year pilot period can be seen [here](https://dune.com/protocolguild/protocol-guild-pilot).

### Fundraising Stats

- To date Protocol Guild has received 7.6k donations from 488 unique addresses, totalling $14mm in value at the time of donation
- The average donation totalled $1.8k, but this was skewed by a small number of very large donations, as indicated by the median donation being $3
- The first significant donation (and 6th overall) came from Lido DAO, with [2mm LDO tokens](https://twitter.com/StatefulWorks/status/1527675087847051265) worth $2.8mm at the time, which made Lido the largest individual donor during the pilot
- However, the largest donor for the last year has been Arbitrum, with a donation of 3mm ARB tokens, worth $3.5mm when donated
- There were also two very generous individuals who managed to round out the top 10 donor leaderboard: [Tetranode](https://twitter.com/Tetranode) and [Anthony Sassano](https://twitter.com/sassal0x)
- Two artistic projects also made the top 15 list of donors: [Stateful Works](https://stateful.mirror.xyz/) and [When Merge](https://opensea.io/collection/when-merge)
- Optimism is missing from the donor leaderboard because, although the Guild was the [top recipient in RPGF2](https://twitter.com/Optimism/status/1641462704358686723) (and [RPGF3](https://twitter.com/Optimism/status/1745490889294688593)!), we haven't actually claimed those funds yet
- All donated funds vested linearly for 12 months from the time they were donated, and today [93% of the donated funds have finished vesting](https://dune.com/queries/2478220/4077018)

Overall, we are exceptionally grateful to every single individual and project who has supported the Protocol Guild to date. These donations validated the Protocol Guild as a funding mechanism for Ethereum’s core protocol development, and was another clear demonstration of the great values that permeate the ecosystem.

![1](https://github.com/cheeky-gorilla/documentation/assets/76262359/f3974c68-3fbe-4904-96ca-f762e34a4027)
![2](https://github.com/cheeky-gorilla/documentation/assets/76262359/7622997f-4ec8-42f2-83cb-15fa5c6ba01c)
![3](https://github.com/cheeky-gorilla/documentation/assets/76262359/a90a0366-4dde-4678-96d1-347b10f76edd)
![4](https://github.com/cheeky-gorilla/documentation/assets/76262359/c1f0552b-d679-48fb-bc34-96aa727dc5a2)

### Membership

Protocol Guild’s membership of core protocol maintainers is updated quarterly, and each member’s share of donated funds is determined via a simple time-weighting formula, with longer contributions resulting in a higher weight.

- Today Protocol Guild has [167 members](https://dune.com/queries/2665887/4430653), up from 90 members at the start
- On average each member has received [$137k](https://dune.com/queries/2670052/4438421) since Protocol Guild launched, with the [median receiving $130k](https://dune.com/queries/2670052/4438431) (valued at time of writing)
- Currently the member with the largest weight gets [1.1030% ](https://dune.com/queries/2670052/6083484)of all vested funds, while the newest member with the smallest weight gets [0.2553%](https://dune.com/queries/2670052/6083485)
- The largest individual allocation totalled almost [$410k](https://dune.com/queries/2670052/4438430)!

![5](https://github.com/cheeky-gorilla/documentation/assets/76262359/2e1378ab-1488-4e6d-b3c9-ef96ef134657)
![6](https://github.com/cheeky-gorilla/documentation/assets/76262359/6254514a-4053-42f3-ad54-5829003cca05)
![7](https://github.com/cheeky-gorilla/documentation/assets/76262359/2fe27ff8-b33c-4ccd-b31c-4a5088203ed2)

### Gas Fees

Operating Protocol Guild’s smart contract architecture on mainnet naturally requires paying gas fees, e.g. to update the membership, starting + releasing vesting streams for donations, and distributing vested funds. Given that it is very likely Protocol Guild members themselves who are paying these gas fees, we started tracking this onchain expenditure to quantify how gas-efficient the mechanism is relative to the amount being donated.

- In total [3.957 ETH has been spent on gas](https://dune.com/queries/2676495/4450329) (excluding donation and withdrawal fees), of which 1.25 ETH was [burned](https://dune.com/queries/2676495/4450332) 🔥
- The total gas fees paid represented about [0.06% of the total funding distributed to date](https://dune.com/queries/2678805/4454559)

![8](https://github.com/cheeky-gorilla/documentation/assets/76262359/243c9ec2-154d-459c-84ed-3332ac2569ff)
![9](https://github.com/cheeky-gorilla/documentation/assets/76262359/6f108944-9fd8-4666-8640-9a10ba20bec6)

## Membership Survey

We conducted an extensive survey among the Protocol Guild's membership when the pilot ended. The survey aimed to gauge members' perspectives on various aspects of the Guild, including its strategy, governance, operations, and smart contract architecture.

### High-Level Strategy

The Protocol Guild was created in part to help make Ethereum more resilient, by providing another diversified funding channel to support core protocol development. But, is the Protocol Guild actually net-positive for Ethereum? The answer appeared to be a resounding "Yes" from Protocol Guild members, with a mean of 4.75/5, indicating strong agreement (Question 1).

![10](https://github.com/cheeky-gorilla/documentation/assets/76262359/a0d0af60-751a-4743-841f-29eb48e4085b)

Perhaps unsurprisingly, this also meant that, on average, members were strongly aligned with the Guild's overall processes and strategy, with a mean score of 4.58/5 (Question 2).

![11](https://github.com/cheeky-gorilla/documentation/assets/76262359/73c7ae38-b555-4c7a-ac92-59da8eef9805)

However, this score was slightly lower than the prior (4.75 vs 4.58), and this difference appears to be caused by issues with the Guild's member nomination process, as we'll explore next.

### Membership Curation

Protocol Guild's membership is self-curated - meaning it is the existing members that coordinate to add or remove members. To manage this, the Protocol Guild uses rough consensus a la [core protocol development](https://ethereum.org/en/governance/). This process requires members to create written proposals to add new members, posted on [Protocol Guild’s Github](https://github.com/protocolguild/documentation/pulls?q=). Once posted, there's a discussion period, and assuming no significant objections, the nomination is accepted after 1 week.

As straightforward as that may sound, the mean score to the question "[is the] process to get nominated and join the Guild [clear]", was lower than expected: 3.88/5, with a standard deviation of 1.15 (Question 9). This suggests that most members found the process clear, but not all.

![12](https://github.com/cheeky-gorilla/documentation/assets/76262359/fc6ff56c-4465-43e5-8eaf-6eecdf62c78d)

The fact that this process can be improved was also evident in the question about whether or not the "curation/nomination process [was] smooth and effective" (Question 15). Here the mean score was 4.07/5, still lower than ideal.

![13](https://github.com/cheeky-gorilla/documentation/assets/76262359/d2f13792-e128-41a7-88d7-4249e4dfddcc)

Given that there were two questions that indicated that there was room for improvement with the nomination process, one must wonder how this impacted the output of the process itself: the membership registry. Question 17 asked if "the curated membership during the Pilot was an accurate representation of core protocol contributors", and the mean score was 4.10/5. Now, if the Protocol Guild's core function is to curate a membership registry of Ethereum's core protocol contributors, then this score should be much closer to 5.

![14](https://github.com/cheeky-gorilla/documentation/assets/76262359/f17eddfd-6ee0-4c7c-8e76-bb3b333730bf)

These three questions indicated that there's work to be done improving the nomination process, which would ultimately also help ensure that the Protocol Guild's membership remains the most accurate representation of Ethereum's core protocol contributor set. The actions taken to address this can be seen in “Pilot Reflection” section “Membership Curation” further below.

### Architecture

One of the central features of the pilot was that donated funds vested linearily over 1 year, to build long-term incentives for members to continue working on the core protocol. This was implemented in an effort to reduce membership churn and facilitate knowledge handover - very important given the specialized knowledge contributors have. Overall, members found that the "vested distribution is useful and incentivizes long-term contributions", with a mean score of 4.54/5 (Question 19).

![15](https://github.com/cheeky-gorilla/documentation/assets/76262359/7480d314-5274-4754-b6a5-e6bb3605ea5b)

There was however some disagreement about how long funds should vest after the pilot. Question 25 showed that 72% of members thought the vesting should be longer than 1 year, but there was disagreement about how long exactly. On average the results indicated that funds should vest for 2.5 years, whereas previously there were discussions to vest funds over 4 years. This brought up interesting discussions internally, about how longer vesting timelines helps create income security for contributors, while also acknowledging that e.g. 4 years could represent an entire market cycle, and could lead to imbalanced funding. Ultimately a 4-year vesting period was chosen for after the pilot, as described in section “Protocol Guild V2”.

![16](https://github.com/cheeky-gorilla/documentation/assets/76262359/c6032882-3174-4cb3-9cf6-5f3af91109e0)

Other questions related to the Protocol Guild's architecture revolved around the retroactive time weighting, which essentially rewards members for being long-term contributors. The time weighting is actually a square root function of the numbers of months a member has been actively contributing, multiplied by either 1 or 0.5, depending on if the member is contributing full time or part time. Time was selected here because it represents the most objective measurement of impact, while sidestepping the need for subjective interpretations of how to quantify "impact".

Question 18 asked if "[this] time-weighting mechanism is sufficiently fair", and the mean response was 4.05/5. Following up on this, Question 23 then asked how the tiers should be changed, with 57% wanting to keep things unchanged, 18% wanting to add more tiers, while 8% thought the membership should only have one tier, for those working full-time.

![17](https://github.com/cheeky-gorilla/documentation/assets/76262359/41d84a2f-b8d4-4b33-9043-cbac19d7a2b0)

![18](https://github.com/cheeky-gorilla/documentation/assets/76262359/d6b56074-66b0-4c83-bd6f-8c5218c3e10d)

Again these questions created interesting internal discussions, specifically if the weighting tiers should be used as a forcing function to encourage more full-time contributors to Ethereum's core protocol development (e.g. by removing the “part-time” tier, or by lowering part-time weights), or if it should be used as a reward function to reward anyone who is contributing (e.g. by allowing quarter-time contributors). Ultimately it was decided that no changes needed to be made to the time-weighting tiers for now.

### Funding

Overall, 88% of members found that the amount raised for the pilot was "appropriate" (Question 13), but members would have liked to see more variety in donors (Question 14), a reaction to the vast majority of funding coming from five large donations from ecosystem entities: Lido, ENS, Uniswap, Nouns DAO and Moloch DAO. These donations were solicited directly by members via governance proposals, but the hope is that Protocol Guild can move away from such proactive fundraising in the future, as more projects intuitively embrace the norm of giving back to the protocol work they depend on.

![19](https://github.com/cheeky-gorilla/documentation/assets/76262359/5e893cc1-401b-418e-8abb-6da5fb2abf98)

![20](https://github.com/cheeky-gorilla/documentation/assets/76262359/e1731fda-d4c0-4156-9ba3-9e75cdeb2a4b)

But was the amount raised enough to incentivize contributors to continue contributing? Around 84% of members agreed that the Protocol Guild had a "positive" effect on "[their] decision to start/continue working on the core protocol" (Question 16). Similarly, members agreed that "anticipated future incentives (fundraising post-Pilot) [makes] me want to continue my core protocol work", with a mean score of 4.34/5 (Question 24).

![21](https://github.com/cheeky-gorilla/documentation/assets/76262359/9f6be4d3-8be3-496d-8ef9-f1741a3f690f)

![22](https://github.com/cheeky-gorilla/documentation/assets/76262359/edfb003b-f6ea-4f1f-97cc-955fac38eeb6)

Overall, the post-pilot survey demonstrated that Protocol Guild made a successful start to its stated purpose of rebalancing incentives for Ethereum’s core protocol contributors.. However, there were clearly some small tweaks that could be made (e.g. to the nomination process and eligibility framework), to help maximize the Protocol Guild’s effectiveness. The actions taken in the year since the pilot ended will be explored in the next section!

## Pilot Reflection

The 1-year pilot served as a successful proof of concept for how an onchain mechanism can be deployed to help rebalance financial incentives for Ethereum’s core protocol work.

### Fundraising

We reached our fundraising target ($10mm), and indeed almost that entire amount came from just five governance proposals:[Lido](https://research.lido.fi/t/proposal-to-fund-the-protocol-guild-pilot-via-a-lido-grant/2016) ($2.8m),[Uniswap](https://gov.uniswap.org/t/governance-proposal-should-the-uniswap-community-participate-in-the-protocol-guild-pilot/16824) ($2.7m),[ENS](https://discuss.ens.domains/t/ep13-executable-support-the-protocol-guild-pilot/12877) ($1.8m),[Nouns DAO](https://discourse.nouns.wtf/t/proposal-nouns-funding-the-protocol-guild-pilot/1599) ($0.8m) and [Moloch DAO](https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b/proposals/22) ($0.8m). Since the pilot ended, we’ve also seen more unsolicited donations including [Arbitrum’s 3mm ARB donation as part of their token generation event](https://twitter.com/arbitrum/status/1638163833624600584). That donation, worth $3.5mm at the time, has kept Arbitrum at the top of our [donor leaderboard](https://dune.com/queries/2670033/4438326) at the time of writing.

However, more work needs to be done to bootstrap the norm that projects built on Ethereum donate a portion of their tokens towards Ethereum’s core protocol development.

### Operations

As highlighted in the membership survey, members didn't always feel informed about what was happening with the Protocol Guild (e.g. fundraising efforts or planned architecture changes). In response to this, we started having weekly internal calls to provide a consistent time and place for the membership to receive updates. These weekly calls have proven valuable in engaging more members with the Protocol Guild’s operations, and continue to this day.

However, the weekly calls were an example of the significant time and effort associated with managing Protocol Guild’s operations (fundraising, coordinating membership updates, improving the mechanism etc.). Overall the Guild’s operations in these bootstrapping stages required more time than most members should reasonably commit, given the mechanism should enable focus on the core protocol, and not distract from it!

Fortunately, halfway through the pilot, Protocol Guild [acquired an external contributor who was eventually made a Protocol Guild member](https://github.com/protocolguild/documentation/pull/69) to shoulder some of this operational burden. However, figuring out how to onboard and retain new contributors should be kept top-of-mind for the future, to ensure that operations never become a bottleneck for this mechanism to exist.

### Membership Curation

There were four significant changes to membership management that came out of the Pilot:

- [More explicit eligibility](https://github.com/protocolguild/docs/pull/47)
  - This change better specified the kinds of contributions that define the core protocol. We believe this change has successfully addressed the issues surfaced in the pilot survey, though we will try to quantify that in future membership surveys.
- Removal of Solidity from eligibility & membership
  - One of the results of the eligibility changes was the removal of Solidity contributors, some of which had previously been part of the Pilot. The reasoning for this change can be seen [here](https://github.com/protocolguild/documentation/issues/18) and [here](https://github.com/protocolguild/documentation/pull/80) - broadly, this was inconsistent with the goals of PG funding a narrow scope centered around the core protocol and not expanding into dev tooling.
- Clarify the distinction between [proposing new projects/teams and individuals](https://github.com/protocolguild/docs/pull/58/files)
- [Membership repo no longer private](https://github.com/protocolguild/documentation/issues/107)
  - While the pilot survey indicated that members were comfortable keeping the repo private (to avoid self-censorship during new member discussions), ultimately it was agreed that the benefits of transparent processes outweighed the negatives.
    - Transparency is the norm throughout Ethereum. We should hold ourselves to the same standard where it makes sense
    - Having an open operational record offers prospective members a reference for qualified contributions. This will be increasingly more important as funding scales and the incentives to join the Guild increase.
    - Funders and the broader Ethereum community deserve a window into Protocol Guild’s curation to both understand/engage with the mechanism and in the worst case, to act as a secondary check on it getting stale / losing legitimacy

Overall, the pilot was invaluable in verifying our assumptions about the efficacy of this kind of funding mechanism for Ethereum’s core protocol development, and we are excited to build on all the pilot’s learnings with the next iteration of the Protocol Guild.

### Protocol Guild v2

A key piece of our long-term vision is the [Protocol Guild Pledge](https://twitter.com/TimBeiko/status/1752458526407139680), wherein we aim to make Ethereum’s core protocol work economically rational on a risk-adjusted basis, by normalizing that projects built on Ethereum donate 1% of their native token to the Protocol Guild. However, to achieve this goal it will be necessary to scale fundraising orders of magnitude beyond the pilot.

Accordingly, Protocol Guild’s smart contract architecture will need to be upgraded to remove trusted components, manual input and offchain dependencies. Work on these new contracts has been underway since the end of the pilot, and will be implemented on a modular basis as and when they are ready.

While waiting for this new smart contract architecture, a new immutable vesting contract will be deployed which vests funds linearly over 4 years (as opposed to 1 year during the pilot). The Github PR related to the ratifying this vesting duration can be seen [here](https://github.com/protocolguild/docs/issues/59). Although the membership survey indicated a preference for a shorter vesting period, it was ultimately agreed that sticking with the industry standard (4 years) made the most sense to facilitate donations and incentivize long-term contributions. That being said, we consider 4 years to be the default, but not a requirement - any donor can [deploy their own vesting contract](https://docs.splits.org/core/vesting) and point it to our V2 split with a shorter / longer vesting period!

Overall, Protocol Guild’s future iterations will aim to replicate everything that worked well in the pilot, but with increased transparency, trustlessness and the removal of offchain dependencies. We hope that these changes, plus the 4-year vesting period, will encourage [more projects](https://dune.com/protocolguild/protocol-guild#protocol-guild-pledge) built on Ethereum to take the Protocol Guild Pledge, to support the core protocol work they depend on.

## Conclusion

With the tremendous success of raising $14+ million from 7.5k donations, we believe that the Protocol Guild has been validated as an effective funding mechanism. On behalf of all Protocol Guild members, we extend our heartfelt thanks to everyone who contributed. We are deeply humbled and incredibly grateful for our ecosystem's unwavering support of Ethereum’s core protocol work.

But this is just the beginning! [Ethereum’s core protocol development roadmap](https://twitter.com/VitalikButerin/status/1588669782471368704) remains as exciting as ever, and we are committed to implementing changes to the Protocol Guild to make it an even more effective conduit for funding this vital work.

If you're passionate about Ethereum's future and want to join us on this exciting journey, please consider taking the [Protocol Guild Pledge](https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng "https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng"), or reach out on our [Discord](https://discord.com/invite/HaUhXYsMyC "https://discord.com/invite/HaUhXYsMyC") to explore other ways to contribute.
