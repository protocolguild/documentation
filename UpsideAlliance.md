# Protocol Guild (Draft WIP)

> *"And, Ebling, there's another, greater purpose. Hari Seldon founded two Foundations three centuries ago; one at each end of the Galaxy. You must find that Second Foundation."*
>
> Foundation, Isaac Asimov

- [**Announcement Post**](https://stateful.mirror.xyz/mEDvFXGCKdDhR-N320KRtsq60Y2OPk8rHcHBCFVryXY)
- Join the [**Stateful Works Discord**](https://discord.gg/t8zSZCvf3y) for discussion
---
[toc]

## 🚨 Disclaimer 🚨

This document represents the opinions and designs of contributors and anyone that has given feedback, not the Ethereum Foundation. If it were to be realized, it would live within the domain of [Stateful Works](https://twitter.com/StatefulWorks).

This is a draft WIP - there may be some inconsistencies in argument or design throughout.

## 1. Summary

This proposal describes **a new public goods funding mechanism**: a split contract which distributes donated application tokens over a vesting period to a self-curated list of Ethereum protocol contributors.

For the first version of this mechanism, membership will be scoped to only include client maintainers, researchers, upgrade coordinators.

The primary goals: to provide autonomous tools for recruitment, retention, and reward to the protocol and its maintainers. If desired, individuals can forward their allocation to a charity.

## 2. Broader Context

### 2.1 Tradeoffs of Existing Protocol Funding Mechanisms

The existing suite of protocol funding mechanisms have so far adequately supported the ecosystem, but come with their own tradeoffs: they are not forward looking, bias towards projects/ teams, and are formed around mediating institutions.

#### 2.11 Project-based Grants

These are a very common mechanism seen in Gitcoin, the EF's Ecosystem Support Program, and many application layer ecosystem programs (eg. UGP). They tend to be best at rewarding contributions from the near-past to near-future. For individuals donating to Gitcoin Grants, it can be challenging to ensure accountability for grantees due to the amount of time and expertise it can take to perform diligence. Many donators end up depending on social signaling to determine who to to donate to. An prospective funder from the application layer has to rely on a mediating institution (eg. the Ethereum Foundation, Gitcoin Grants rounds) to facilitate discovery, processing, and diligence.

#### 2.12 Retroactive Funding Programs

An explicitly backwards-looking variant of grants include [Optimism's RPG](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c). These can account for past work, but are necessarily scoped to measure the contributions of teams or projects, usually not individuals. There is no guarantee of consistent funding, as there is a possibility of omission from a subsequent round. In Gitcoin's case, it takes a while for contributions to be recognized and rewarded due to how discovery and grant promotion cycles work.

#### 2.13 Salaries

Salaries *do* target individuals but are limited in that they can only account for the present and near future. Further, they are tied to a single legal organization, and can never be a good proxy for ecosystem value creation.

There isn't an efficient solution for projects building on Ethereum to directly support core protocol contributors. 

#### 2.14 Designing Anti-Fragility

There is space for a new mechanism here: one which is forward looking, biases towards rewarding individuals, and which doesn't depend on a mediating institution. This mechanism could connect applications and protocols building on Ethereum directly with a collection of maintainers. This is important because there's no guarantee that funds will end up with the individuals they are intended for.

However, it's unlikely that one project from the ecosystem would take up the coordination efforts to collect and maintain a list of contributors. If it did happen, the project would eventually find themselves with an immense amount of power as the gatekeeping curator.

It would be better for the anti-fragility of the protocol and its system of maintainers if there were additional differentiated funding solutions.

### 2.2 Risk / Reward Disparity

There's a growing disparity between the risk / reward of working on crucial protocol infrastructure and how much value this work enables the broader community to realize.

One effect is that this infrastructure faces increasing competition for talent from the application layer and the broader crypto industry. These projects usually offer token or equity benefits, which can provide significant financial upside to employees. Conversely, protocol projects usually pay in ETH or fiat. It's a simple fact that new joiners will not be exposed to the same degree of financial upside as early contributors paid in ETH.

The outcome is that prospective and current protocol contributors more often opt for opportunities which include startup equity or application tokens. This deprives the protocol of their important contributions, increases hiring churn, and decreases the rate of ecosystem improvement.

This isn't to fault individuals for rationally weighting financial inputs, or protocols for leveraging the power of tokens. The challenge is that infra projects can't always utilize the same tools to attract and retain talent longterm. Early on, the community committed to not enshrining a public treasury skimmed from the block reward. The community instead opted for an allocation to the Foundation to fund development. Today, hindsight recognizes the wisdom in this early decision: perpetual block rewards can undermine the credible neutrality of the protocol and entities which benefit, are potentially capturable, and reduce the monetary properties of the base asset. 

Some infra-adjacent projects have launched tokens, but this makes sense for very few infra projects.

Given these limitations, ecosystem positions cannot offer comparable upside incentives to contributors. While financial incentives are not the ultimate motivator for everyone, we argue that it would be better for the protocol to have access to this kind of tool.

## 3. Proposal Rationale

To increase the long-term sustainability of protocol maintainence, we propose a curated split contract. This mechanism will provide autonomous funding for and nudge the incentive balance towards the protocol. A split is a contract that divides funds sent to it among its membership according to their weighting. This mechanism should vest any donated assets over a standard period. These donations will likely come from Ethereum-based applications and protocols. 

We believe this is a new type of public goods funding mechanism. If realized, the protocol gains a tool which is meaningfully differentiated:

- by long-term outcomes: It incentivises current contributors to continue their work as long as there are material funds which have yet to vest. With fewer departures, teams are more stable, individual maintainers stick around and resource allocation is more predictable.
- in terms of financial upside: Helps to close the gap between the value-creation enabled vs. realized by offering a slice of upside benefits to ecosystem contributors. 
- politically: It exists independent of any institution, and provides funding to protocol builders which cannot be infringed on by mediating institutions.
- operationally: It maintains its own membership, eligibility guidelines, and internal policies.

Equipped with such a tool, public goods looking to hire or retain talent can include membership on this split as a unique perk. A talented individual shouldn't be forced to choose between financial upside and pushing the ecosystem forward. This proposal aligns well with our community's existing voluntaryist mindset towards public goods.

## 4. Roles & Obligations

There are four unique roles (4.1, 4.2, 4.3, 4.4) that this mechanism requires to operate. We outline any obligations expected as well as recommendations for conduct and operation.

### 4.1 Members

#### 4.11 Members as Beneficiaries

*NOTE: these are only initial recommendations - final decisions are ultimately up to the membership.*

→ 150-200 individuals who have qualified for slots on the split contract. 

This is just an estimate, the actual number may be higher or lower. There is no cap or target for number of slots. Slots can be set to any address, including the beneficiary's, a charity, or another split contract (make sure it can be claimed from).

#### Obligations

Participating individuals have an obligation to notify organizers when their contributing status changes, or the project they are working on breaks one of the guidelines above. Further, participants should commit to semi-regularly withdrawing vested funds or signing a message from their listed address to prove access to the private key. This limits the impact of compromised wallets or lost keys.

While it is encouraged, members are not required to participate in governance.

### 4.12 Members as Curators

*NOTE: these are only recommendations - final decisions are ultimately up to the membership.*

#### Qualifications

All members should agree to participate in curation.

#### Obligations & Guidelines

Given the ambitious scope of this mechanism and the trust afforded by the community/donators, the expectations are relatively minor: make sure the membership accurately reflects active contributors.

The Guild should be a garden which tends itself. Each of its members should be peer stewards of this self-regulating plot. When the allocation of nutrients, sunlight or water become imbalanced, it's up to the membership to recognize and adjust. Members should only commit if they are aligned with this expectation.

In the context of the initial weighting scheme being used (total eligible quarters), this is very straightforward. Members should self-report when their eligibility changes so that their weighting can be updated. The backstop is each team/project, who only need to confirm when a contributor has been added or removed. In this way, regular operations distribute curation responsibilities evenly around the network graph. The alternative should be avoided at all costs, ie. dependence on a centralized few for quarterly check-ins with the entire membership. One member of each team/project (eg. Lighthouse) should agree to be the point of contact responsible for ensuring other members are aware of any significant developments like:

- explaining membership obligations to new team members
- collecting addresses and signatures for inclusion in the eligible set
- migration to a new smart contract
- a change to the weighting scheme

Members should have regular contact with new beneficiaries they propose. Any bias or conflicts of interest should be disclosed - eg. where one is an advisor (paid or otherwise) to the other's side project.

It will be up to members to decide the exact processes for deciding membership and the tradeoffs that exist between these design. To consider: 

- Is there quorum requirement?
- Should members even vote on new joiners? 
- Could there be a vouching mechanism instead? eg. 3-5 current members need to vouch for a prospective beneficiary. If it's found that there is any abuse of the referral system, or the person doesn't exist, or the person doesn't actually contribute then the nominating individuals should be removed from the set.

It should be part of the founding mandate to surface the widest variety of contributor backgrounds, and help them meet the eligibility requirements. As global internet infrastructure, Ethereum would be a disappointment if it forever remained the domain of a small homogeneous set of developers.

When onboarding new contributors, it's important that split addresses always refer to an individual's personal wallet and *not* their employer's. If teams were the atomic unit, all team members would have to agree on whether to accept or decline membership, likely decreasing the number of participants.

#### Other Considerations

Effectively, curators are gatekeepers for the project. Other public goods funding mechanisms use external councils (eg. Optimism's RPG) or the donors (eg. Gitcoin) to curate the beneficiary set. We believe it is incentive compatible that curators are drawn from the same pool because:

- adding ineligible beneficiaries removes future vested value from existing members
- the mechanism *must* accept all legitimate contributors which fit established guidelines in order to maintain credible neutrality to participants and donators. If donators think that the set is not inclusive enough, they will not feel obligated to begin or continue their contributions.

There are edge cases which should be considered. For example,  where the marginal legitimacy lost by excluding a given  contributor is too low to get curators to push for their inclusion. Or, the initial set of curators fails to expand beyond outside of their social graphs, but accumulates enough members to accomplish a state of "good enough" legitimacy. Or, the social norms that build up around the mechanism are sufficiently powerful to draw in continued donations even though it just barely hits the "good enough" threshold. These are all partial failure modes of the mechanism.

#### 4.13 Members as Signers

→ Beneficiaries who act as key holders for the multisig which can update the list of beneficiaries and their weights in the Astrodrop contract.
 
##### Qualifications & Obligations
 
These should be well regarded Ethereum community members. They should agree to follow strong security practices, and make themselves available to sign and deploy membership updates when needed, eg. quarterly.

Overlapping signers and beneficiaries allows for more efficient self-governance vs. the overhead that comes with a set of external signers. 

### 4.2 Donating Entities

![](https://i.imgur.com/LP1jvBg.png)
→ *[Kei's tweet](https://twitter.com/keikreutler/status/1461646035491692550)*

Ethereum has a rich culture of experimenting and nuturing radical new ideas. It's what makes our community one of the most vibrant in the space. Many Defi, NFT, DAO, and L2 projects have built amazing things on top of Ethereum's credibly neutral public infrastructure. However, none of what we know as Ethereum today would have been possible without the consistent efforts of committed protocol maintainers. Therefore, it would be ideal for current and future contributors should have a stake in the successes of these projects. This produces a powerful incentive alignment between maintainers and those that depend on their work.

To accomplish this, we invite contributing entities to donate:
-  governance tokens
-  recurring protocol fee revenue
-  interest bearing tokens
-  NFTs that have been fractionalized into ERC20s

We suggest that 1% of total project tokens should be allocated to this mechanism.

### 4.3 The Community

Even when the mechanism is deployed, it will require consistent efforts from the broader community to make this a long-term success. This includes application developers, users, investors, enthusiasts, and builders of all kinds. They will be instrumental in:

- introducing and maintaining public norms about contributions through regular advocacy for the initiative
- writing governance proposals to get protocols to donate: even if protocols are aware of the split contract and on board with the norms, there may additional work needed to shepherd each proposal over the finish line
- ensuring the curators are responsibly neutral in their management of the protocol and its quarterly updates. If this is not the case, it is the responsibility of the community to call this out and advocate for change

## 5. Smart Contract Architecture

### 5.1 Astrodrop

After exploring many options, we've settled on Astrodrop (AD), a new vesting smart contract. The graphic below should give a good intro to how the Protocol Guild would operate an Astrodrop Shrine.

![](https://i.imgur.com/PRXX9oe.png)

Out of all the mechanisms we explored, this product fulfills the majority of our original design objectives. Let's go through them one by one and see how well it fits within our aspirational framework.

#### 5.11 Accepts common asset types 

> To preserve the upside potential of donated assets, it's crucial that the split accepts ERC20s in addition to ETH.

Yes, AD can accept both. Unclear on ERC-721s or other NFT token types.

#### 5.12 Immutable distribution

> No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period.

Yes - the terms of the vesting length, past members and their weights cannot be modified once deployed. However, it should be noted that if the PG multisig were to be compromised, it could be used to steal the remainder of vest.

#### 5.13 Non-custodial

> No member should have even temporary discretion over vested or unvested funds - eg. a designated address holds funds before a member manually sends them on to another component.

Yes - at no point does any individual hold donated assets in an EOA.

#### 5.14 Mutable membership

> It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because contributors will still join and leave protocol work. If we can't add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense.

Yes - members can be added, removed, reweighted as needed (see diagram above).

#### 5.15 Includes vesting

> In order to promote long-term incentive alignment, donated assets should be subject to a standard vesting period with no cliff. We suggest 4 years, but this should be mutual set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting rate deployed with the contract should not be modifiable by any party.

AD achieves these objectives particularly well when compared to other vesting solutions.

- allows PG to deploy the initial contract with optionality over desired launch date, vesting time, etc
- The same contract can be reused for many donations, either from the same org or different ones. The avoids unecessary gas + time costs to donators. The vesting terms are the same for each donation.
- However, there is a tradeoff because it is a single contract. As the end of vesting approaches, a new contract must be deployed to continue the stream. This assumes a minimal level of ongoing coordination between members to decide when to deploy the next Shrine contract and kick off the next X years of streamed payments.

The only thing that a Moloch contract can do that the AD cannot is programmatically drio

#### 5.16 Multi-claims are straightforward

> Members should be able to claim their allocation from multiple eligibility windows and multiple assets in a single transaction.

Yes - AD allows beneficiaries to claim their share of all eligible windows with a single transaction.

#### 5.17 Membership and Assets should be "Ragekickable"

> Once a member leaves contributions the continuing membership should be able to forcibly eject that member and their allocated shares. This may be necessary in the case of:
>
> - a long enough period of inactivity beyond a reasonable break
> - taking a new job
> - no longer meeting the code of conduct agreement set by members

This feature no longer applies. This was a specific consideration in case we used a Moloch contract. Any MT with weights and addresses is deployed in the past cannot be modified.

#### 5.18 Members decide when to take custody/ withdraw

> Members should be able to decide when and how they withdraw funds from the mechanism, eg. to suite the tax framework of the jurisdiction they reside within. 

Yes - members can claim their allocation at any point during or after the vesting period.

#### 5.19 Donations have finality

> It should not be possible to remove donated assets from the split contract by anyone other than the beneficiaries. This means when a protocol donates tokens at launch, they cannot withdraw when they change their mind, when there is significant asset appreciation, or if the contributing address were to be compromised.

Yes - donations to an AD Shrine cannot be revoked or paused.

### 5.2 PG Multisig

While it's possible for the Astrdrop contract to be "set and forget," we plan to fully leverage its mutable capabilities. There should be a multisig, eg. a Gnosis Safe, deployed to take on a few key tasks that the Shine cannot handle autonomously. These include:

- Deploying Shrines to accept donations
- Updating the membership list

See [4.13 Members as Signers](https://hackmd.io/ANe-MBCgTFSN6qG7drn3zg?both#413-Members-as-Signers) for the obligations expected of members regarding this component. 

## 6. Guide to Operation

### 6.1  Members

#### 6.11 Membership requirements

Members should be committed to Ethereum and its ethos of decentralization. The contributions of qualifying individuals qualifying individuals should be:

- fully open source, ie. available for forking, modification and redistribution
- continuous for at least 6 months ahead of inclusion
- use permissive licenses
- part of the protocol, not built on top of it (a specific client implementation vs. an application)
- a benefit to the broader Ethereum community
- dedicated to permissionless, open access to Ethereum

Occasionally, these individuals may work on a team which has a token, has VC backing or gives equity. These are guidelines, not hard rules. Members should expect this ruleset to change over time, to get more explicit in some places and more permissive in others.

#### 6.12 Weighting

This mechanism will be the most antifragile with the simplest weighting methods. This limits the time spent deciding appropriate categories as well as the time spent weighting contributors. Additionally, this should limit cases of ambiguity gaming that might come up in complicated weighting schemes. Based on member feedback, we've has settled on two rules:

- historic contributions are considered in weightings
- historic contributors get "diluted" as newcomers come in
- anyone who stops contributing is removed from the split via periodic reviews
- continuing contributors get additional weight per period they are active. This means historic contributors don't maintain their split weighting if they leave protocol development

In the typical operation of the split, this would simply be `number of eligible months`, including past contributions before the split existed.

In future versions, it may be worth considering another multiplier from members which would come from how effective they view each of their peers. This could be accomplished through a pairwise ranking system that outputs the multiplier. 

### 6.2 Donating Entities

### 6.3 Community

## 6. Anticipated Concerns

While we can't conceive of every scenario, we've tried to think critically about deficiencies when they've presented themselves. If you see a devious edge case, an organizational pitfall- please join the [**Stateful Works Discord**](https://discord.gg/t8zSZCvf3y) to discuss, and hopefully add it here!

### 6.1 Related to Operation

-  Shouldn't one-off contributions be considered for membership?
    - Every mechanism has its limit. The Protocol Guild may meet its at the edges of contribution, where someone has meaningfully contributed to a project, but does not work on it consistently, or produces something  This remains an open question, and might  be considered for a future weighting scheme if there are no major issues.

- Why are weightings not more granular?

    - While it's true that some people are objectively more productive in their work / valuable to the protocol, adding a weighting scheme to a membership this large would introduce complexity with each membership update. There would also be unknown, probably negative social dynamics related how to value the contributions of your peers.
    - It's worth a note of caution against heading too far down the path of data and hyper-specificity when it comes to evaluating contributions. We suspect that at least a few possible futures would end up including a public facing component, which privilege people who have previously been working on the protocol.
    - They have had additional time to form themselves into the shape the political and social structures are looking to latch onto. Metrics, rubrics breed subtle exploits, entrench power
    - Ideally, under any weighting scheme, the margin between contributor profile should not be overly large relative to the others.
    
- How can members as curators or signers abuse their position of trust?
    - Fundamentally, this is a political tool. In negative outcomes, whoever maintains the member eligibility can influence research areas and interest people have in certain sections of the protocol. Want to get the merge done? Add more client implementers at the expense of other ecosystem categories. This kind of manipulation is unlikely to actually happen as it would harm the mechanism's legitimacy.
    - Or worse, the existing signers decide not to honor the agreed upon outcomes from weighting deliberations, go slightly rogue. In this case, we can imagine some contributors deciding to ride it out until the vesting has completed. In other situations, a significant portion of the membership would collectively abandon the stream in solidarity. Or, they could claim and send the wrapped tokens to the burn address as a gesture of protest.

- How can this be gamed?
    - As the mechanism scales, it's inevitable that the amount of attention given by a core group of Guild members will eventually fall, become less thorough. At a sufficiently high number of members, unscrupulous developers might invent phantom co-workers and redirect the split shares to themselves. This is one area where the mechanism relies on mutual trust to avoid abuse. 

- What happens if a large percent of infrastructure contributors decide not to participate? Or, what if sufficient number of contributors join and then decide to leave the split?
    - The mechanism's legitimacy is predicated on broad participation. If enough contributors decline, this may not be an appropriate tool for incenting work on public goods. In the latter case, the vesting would still continue but it may be difficult to solicit additional donations.

- How will members handle conflicts about list inclusion, eg. when someone starts doing well-intentioned but poorly executed work?
    - Eligibility criteria should be given special care, as much as the contract or the outreach to donating entities. These should be communicated publicly and frequently with change history, eg. Github. Any decisions which sidestep transparent processes undermines the mechanism's legitimacy.

- What other failure modes have not been explored in-depth yet?
    - the membership is updated to only include addresses controlled by the attackers. 
    - More cleverly, they only dilute the existing membership a little bit, or adjusting the weights just enough to favor certain set of contributors. 
    - Members selling early access to their shares to capitalize early into a stream, or taking a loan against them and committing to stay at least as long as their agreements dictate. Web3 "permissionless vibes" maximalist might 

- What happens when enough signers get compromised? 
    - This would damage the trust donating entities put into the members, as well as any future efforts to restart something similar. 

- What are the tax implications of participation?
    - We are not tax lawyers, each participant should seek experts for their jurisdiction.
 
- What's use case you can anticipate wanting in the future that Astrodrop can't facilitate today?
    - lending markets built into the vesting stream available for lending
    - programmatically dripping membership
    - extensions that let users automate a custom functions like "claim and sell to DAI"
    - anyone who donates would eventually be airdropped a social token which unlocks a token-gated core dev discord /jk

### 6.2 Related to the Broader Community

-  Will this replace existing salaries?
    - No, this should be a bonus on top of current pay: employers/ DAOs should pretend as though it doesn't exist. Given that an employer won't be able to tell whether they have submitted their address or that of a charity. It would not be ethical to compell charity disclosures.
    
- What if this ends up being a significant amount? 
    - If this mechanism *doesn't* accrue significant funds, then it's not really working properly. Vested donations should be significant enough to inspire new contributors to join core development. However, there should be deeper incentive analyses and the thresholds at which they get funky.

- Why doesn't people just ask for some multiple of their current salary?
    - As discussed in "[2. Broader Context](https://hackmd.io/ANe-MBCgTFSN6qG7drn3zg?both#2-Broader-Context)," traditional orgs will never be able to match the upside that comes from working on a novel tokenized application or L2.

- Aren't donated assets a form of bribe?
    - No. this would be a very inefficient form of bribing, as the large membership distribution dilutes any targeted intent. It would be much more effective to bribe individuals, which can already happen today without a split contract. It could even be argued that this mechanism makes bribes *less* effective because bribes are most effective in situations of relative wealth inequality. By raising the holdings of core developers, they are less likely to be swayed by individual financial offers. Of course, this is completely opt-in and protocol contributors are welcome to redirect their share to another public good organization. Only when there are relatively few donating entities could the mechanism arguably edge towards bribe territory, as it's very clear where benefits come from. Or, if the relative amount donated by one entity dwarfs that given by others.

- What about including past protocol contributors?
    - Not advisable, this would complicate inclusion decisions. The split is supposed to incentivise current and future contributors.

- Will this compete with Gitcoin or other similar efforts?
    - We feel that this mechanism is differentiated enough (ie. forward looking, core protocol focused, vested, biases towards native tokens as opposed to USD) that the overlap may appear larger than it actually is. However, there may be some donating entities that feel like they are already "doing their part" with donations to one initiative and may not feel obligated to contribute to the other. We believe that it's healthy to have a number of autonomous & differentiated funding approaches towards Public Goods.

### 6.3 Culture / Big Questions

- Broadly, how will this design fail?
    - Believing that voluntaryism and donation-based funding scales sufficiently to the levels this mechanism needs in order to be effective.
    - Assuming that developers even want to "self-govern" an asset stream, including its responsibilities and pressures.

- Will long-term vesting lead to stagnation in core development roles?
    - In the sense of gatekeeping/groupthink/capture, we sincerely hope not. There's certainly a possibility that previously effective people may get stuck in a position if the incentive is significant enough. However, this is no different from any other job with performance requirements, crypto or otherwise. If someone is not performing adequately, they will be removed from their job and then from the list. If anything, the infusion of new perspectives as the set grows will be a healthy process.
    - With the conclusion of each vest, everyone starts again at 0 convincing the public that they are the legitimate heir to the Protocol Guild name and legacy. Competition for scarce political purchase means there will be alliances, intrigue, rebalances. Any one can copy this blueprint and create their own competing versions. We anticipate that even the initial cohort now will unavoidably have its own political undercurrents! A blooming society actively actively evolve their systems periodically to avoid settling into patterns too soon. So we should continue - see the approaching Leviathan peeking over the horizon, pull ourselves towards well considered implementations, norms, visions. Subtle frameworks like this interface between the social and the economic resources a group traffics in. They are dense confluences of swirling power - what we're doing is preempting inevitability.

- Other than the amount of vested/vesting funds, what are some measures of success?
    - the frequency that someone joins or remains in core protocol work and citing the Guild as a compelling benefit.
    - the number of former core devs in defi we can recruit back
    - the number of completely retired former devs we can recruit back 
    - favorable Gini coefficient of the donator set
    - onboarding a diverse array of contributors 

## 7. Case studies

*NOTE: What follows are a theoretical high-impact scenarios. This is not a claim that funding will meet these amounts, only an exploration of possibilities.*

### 7.1 Vested assets in DAO treasuries

Projects which previously launched a token could donate a portion of the tokens currently controlled by governance. Here's a rough sample of what this might look like in practice, using the top 20 projects by unvested DAO holdings listed on [Open-Orgs.info](https://openorgs.info/). This is not meant to be a comprehensive survey. see the data behind these charts [here](https://docs.google.com/spreadsheets/d/1eMPxTDNB-MFYCJL61sEHNce2IvI4jeu3GcA5nAgo_g4/edit?usp=sharing). 

|     Name     | Unvested Treasury | Vested Treasury |
|:------------:| -----------------:| ---------------:|
|   Uniswap    |   $11,032,128,273 |  $4,467,296,235 |
|     Lido     |    $1,013,369,806 |  $1,013,369,806 |
|     Aave     |      $710,995,680 |    $710,995,680 |
| Olympus DAO  |      $695,596,511 |    $695,596,511 |
|  Synthetix   |      $459,754,748 |    $459,754,748 |
|     ENS      |    $4,814,784,391 |    $398,406,844 |
|   MakerDAO   |      $315,896,435 |    $315,896,435 |
|    Badger    |      $281,435,598 |    $281,435,598 |
|   Gitcoin    |      $643,282,372 |    $212,022,218 |
|    Yearn     |      $162,664,196 |    $162,664,196 |
|  SushiSwap   |      $143,079,883 |    $143,079,883 |
|   Alchemix   |      $124,448,531 |    $124,448,531 |
|   Balancer   |      $113,243,653 |    $113,243,653 |
|    DXdao     |      $112,487,482 |    $112,487,482 |
|     API3     |      $109,938,536 |    $109,938,536 |
|  BarnBridge  |      $108,304,172 |    $108,304,172 |
|  Nouns DAO   |       $67,661,963 |     $67,661,963 |
|  Index Coop  |       $65,258,192 |     $65,258,192 |
|   mStable    |       $51,208,814 |     $51,208,814 |
| Nexus Mutual |       $43,478,269 |     $43,478,269 |
|   Compound   |    $1,019,076,566 |     $37,806,182 |

|         | .5% Donation | 1% Donation | 1.5% Donation |
|:-------:| ------------:| -----------:| -------------:|
| **SUM** |  $48,471,770 | $96,943,539 |  $145,415,309 |

Already we can see the significant benefit these donations would have. For these scenarios, we include 150 members on the split contract plus a 4 year vesting period.

![](https://i.imgur.com/i3xI4bu.png)

### 7.2 Donations at launch

This funding mechanism really starts to show its promise when considering if projects start to include this as part of launch parameters. The chart below takes the same 20 projects and distributes a portion of what the max supply would have been at launch. Of course, this is just an illustration - they didn't all launch and contribute to the split at the same time.

|     Name     | Max Supply at Launch | Price, Nov. 11 |
|:------------:| --------------------:| --------------:|
|   Uniswap    |        1,000,000,000 |         $25.71 |
|     Lido     |        1,000,000,000 |          $4.27 |
|     Aave     |           16,000,000 |        $312.93 |
| Olympus DAO  |            5,041,746 |        $878.69 |
|  Synthetix   |          237,694,162 |          $9.99 |
|     ENS      |          100,000,000 |         $58.09 |
|   MakerDAO   |            1,005,577 |      $3,025.46 |
|    Badger    |           21,000,000 |         $32.40 |
|   Gitcoin    |          100,000,000 |          $9.36 |
|    Yearn     |               36,666 |     $33,903.79 |
|  SushiSwap   |          250,000,000 |         $11.23 |
|   Alchemix   |            2,393,060 |        $453.89 |
|   Balancer   |          100,000,000 |         $24.74 |
|    DXdao     |              148,976 |        $777.09 |
|     API3     |          106,940,994 |          $5.56 |
|  BarnBridge  |           10,000,000 |         $35.06 |
|  Index Coop  |           10,000,000 |         $28.64 |
|   mStable    |          100,000,000 |          $1.13 |
| Nexus Mutual |            6,898,110 |        $181.95 |
|   Compound   |           10,000,000 |        $335.91 |

|         | .5% Donation |  1% Donation | 1.5% Donation |
|:-------:| ------------:| ------------:| -------------:|
| **SUM** | $329,723,413 | $659,446,826 |  $989,170,239 |
							
![](https://i.imgur.com/glD5TVl.png)

We believe $2M-6.5M vested over 4 years to potential contributors will be a step in the right direction. The beauty of the mechanism is that there is no application to participate as a donor: any application can just send funds to the split contract, and the rest will happen without their involvement.