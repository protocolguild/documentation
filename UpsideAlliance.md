# Upside Alliance

> *"And, Ebling, there's another, greater purpose. Hari Seldon founded two Foundations three centuries ago; one at each end of the Galaxy. You must find that Second Foundation."*
>
> Foundation, Isaac Asimov

[toc]

## 🚨 Disclaimer

This document represents the opinions and designs of Trent Van Epps, not the Ethereum Foundation. If it were to be realized, it would live within the domain of [Stateful Works](https://twitter.com/StatefulWorks).

## 1. Summary

This proposal describes a split contract which distributes donated application tokens over a vesting period to a curated list of individuals who contribute to Ethereum infrastructure.

Protocol infrastructure includes client maintainers, researchers, upgrade coordinators, library maintainers, and smart contract languages.

The primary goals: to provide tools for recruitment, retention, and reward to the protocol and its maintainers.

If desired, individuals can forward their allocation to a charity.

## 2. Context of the problem

There's a growing disparity between the risk / reward of working on crucial protocol infrastructure and how much value this work enables the broader community to realize.

One effect is that this infrastructure faces increasing competition for talent from the application layer and the broader crypto industry. These projects usually offer token or equity benefits, which can provide significant financial upside to employees. Conversely, protocol projects usually pay in ETH or fiat. It's a simple fact that new joiners will not be exposed to the same degree of financial upside as early contributors paid in ETH.

The outcome is that prospective and current protocol contributors more often opt for opportunities which include startup equity or application tokens. This deprives the protocol of their important contributions, increases hiring churn, and decreases the rate of ecosystem improvement.

This isn't to fault individuals for rationally weighting financial inputs, or protocols for leveraging the power of tokens. The challenge is that infra projects can't always utilize the same tools to attract and retain talent longterm. Early on, the community committed to not enshrining a public treasury skimmed from the block reward. The community instead opted for an allocation to the Foundation to fund development. Today, hindsight recognizes the wisdom in this early decision: perpetual block rewards can undermine the credible neutrality of the protocol and entities which benefit, are potentially capturable, and reduce the monetary properties of the base asset. 

Some infra-adjacent projects have launched tokens, but this makes sense for very few infra projects.

Given these limitations, ecosystem positions cannot offer comparable upside incentives to contributors. While financial incentives are not the ultimate motivator for everyone, we argue that it would be better for the protocol to have access to this kind of tool.

## 3. Proposal Rationale

To nudge the incentive balance back to important Mainnet infrastructure, we propose a curated split contract. A split is a contract that divides funds sent to it among its membership according to their weighting. This mechanism should vest any donated assets over a standard period. These donations will likely come from Ethereum-based applications and protocols.

This split will help close the gap between the value-creation enabled vs. realized by offering a slice of upside benefits to ecosystem contributors. Equipped with such a tool, public goods looking to hire or retain talent can include membership on this split as a unique perk. A talented individual shouldn't be forced to choose between financial upside and pushing the ecosystem forward. This proposal aligns well with our community's existing voluntaryist mindset towards public goods.

Finally, we believe this is a new type of public goods funding mechanism. Grants and retroactive funding programs (eg. [Optimism's RPG](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c)) can account for past work, but are necessarily scoped around isolated projects. Salaries account for the present and near future, but are tied to a single legal organization, and can never be a good proxy for value creation.

A vested split contract incentivises current contributors to continue their work as long as vesting is ongoing. With fewer departures, teams are more stable, individual maintainers stick around and resource allocation is more predictable. Most importantly, new contributors are encouraged to seek full time core protocol work.

## 4. Case studies

*NOTE: What follows are a theoretical high-impact scenarios. This is not a claim that funding will meet these amounts, only an exploration of possibilities.*

### 4.1 Vested assets in DAO treasuries

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

### 4.2 Donations at launch

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

We believe $2M-6.5M vested over 4 years to potential contributors will be a step in the right direction. The beauty of the Upside Alliance is that there is no application to participate as a donor: any application can just send funds to the split contract, and the rest will happen without their involvement.

## 5. Roles & Obligations

There are four unique roles that this mechanism requires to operate. We outline any obligations expected as well as recommendations for conduct and operation.

### 5.1 Split Members

There are three different member sub-roles (4.11, 4.12, 4.13) described below.

#### 5.11 as Beneficiaries

🚨 *NOTE: feedback from reviewers indicates that the eligibility rubric be made much more explicit. Further, it's important to note that these are only recommendations - final decisions are ultimately up to the membership.*

→ 150-200 individuals who have qualified for slots on the split contract. These slots can be set to any address the they desire, including either their own or a charity.

##### Qualifications

Beneficiaries should be committed to Ethereum and its ethos of decentralization. They should have already been contributing to mainnet Ethereum for at least 6 months before being considered for inclusion; this limits set turnover. The ecosystem contributions from qualifying individuals should be:

- fully open source
- part of the protocol, not built on top of it
- important developer tools
- benefitting the broader Ethereum community
- dedicated to permissionless, open access to Ethereum

Occasionally, these individuals may work on a team which has a token, has VC backing or gives equity. Remember: these are guidelines, not hard rules.

##### Obligations

Participating individuals have an obligation to notify organizers when their contributing status changes, or the project they are working on breaks one of the guidelines above. Further, participants should commit to semi-regularly withdrawing vested funds or signing a message from their listed address to prove access to the private key. This limits the impact of compromised wallets or lost keys.

They are not required to participate in governance or propose new members.

##### Weighting Guidelines

This system will be the most antifragile with the lowest number of contributor categories possible. This limits the time spent deciding appropriate weightings as well as the time spent weighting contributors. Additionally, this should limit cases of ambiguity gaming that might come up in complicated weighting schemes. We recommend only two categories:

- Full time: 100 points
- Part time: 25 points
 
The ratio between the two types can be adjusted beyond this initial suggestion. One effect of the weighting is that contributors may seek full time positions where previously they did part-time work. This ultimately benefits the core protocol.

Before the contract launches, there should be a code of conduct all members agree to abide by. This should include the obligations and recommendations listed above. This code should be explicit on what constitutes grounds for removal from the contract, eg. participants who are found to have taken bribes or sold access to their vested stream.

#### 5.12 as Curators

##### Qualifications

All members agree to seek out legitimate protocol contributors for the initial and future sets, in accordance with the guidelines set out above.

##### Obligations & Guidelines

Members should have regular contact with beneficiaries they propose. They should not propose new beneficiaries where there may be bias or conflicts of interest - eg. where one is an advisor (paid or otherwise) to the other's side project. Where unavoidable, the member should consider having someone else advocate for the proposed individual and/or abstain from the inclusion deliberations.

It will be up to members to decide the exact processes for deciding membership and the tradeoffs that exist between these design. To consider: 

- Is there quorum requirement?
- What threshold of support is a passing nomination?
- Should members even vote on new joiners? 
- Could there be a vouching mechanism instead? 
    - eg. 3-5 current members need to vouch for a prospective beneficiary. If it's found that there is any abuse of the referral system, or the person doesn't exist, or the person doesn't actually contribute then the nominating individuals should be removed from the set.

It should be part of the founding mandate to surface the widest variety of contributor backgrounds, and help them meet the eligibility requirements. As global internet infrastructure, Ethereum would be a disappointment if it forever remained the domain of a small set of developers.

When onboarding new contributors, it's important that split addresses always refer to an individual's personal wallet and *not* their employer's. If teams were the atomic unit, all team members would have to agree on whether to accept or decline membership, likely decreasing the number of participants.

The address should be an externally owned account (EOA), not a smart contract, except in the case of a multisig. This is to discourage selling future vested assets to a smart contract controlled by investors who pay for access upfront.

Exceptions may include contributors who opted to delegate their slot to a traditional non-profit or another Ethereum public goods organization - eg. Gitcoin. This should be publicly disclosed.

It may be simpler to be be agnostic to whatever is supplied to reduce management overhead. For example, doublechecking a contract to make sure it's a legitimate charity, or that it's not an investment contract that the dev is selling. In the case of the latter, any purchasers place their trust in the beneficiaries to not quit with the upfront payment.

##### Other Considerations

Effectively, curators are gatekeepers for the project. Other public goods funding mechanisms use external councils (eg. Optimism's RPG) or the donors (eg. Gitcoin) to curate the beneficiary set. We believe it is incentive compatible that curators are drawn from the same pool because:

- adding ineligible beneficiaries removes future vested value from existing members
- the mechanism *must* accept all legitimate contributors which fit established guidelines in order to maintain credible neutrality to partipants and donators. If donators think that the set is not inclusive enough, they will not feel obligated to contribute.

There are edge cases which should be considered. For example,  where the marginal legitimacy lost by excluding a given  contributor is too low to get curators to push for their inclusion. Or, the initial set of curators fails to expand beyond outside of their social graphs, but accumulates enough members to accomplish a state of "good enough" legitimacy. Or, the social norms that build up around the mechanism are sufficiently powerful to draw in continued donations even though it just barely hits the "good enough" threshold. These are all partial failure modes of the mechanism.

#### 5.13 Signers

→ Beneficiaries who act as key holders for the multisig which can update the list of addresses in the split contract. This may ultimately be informed by the smart contract architecture and the frequency of updates.
 
##### Qualifications & Obligations
 
These should be well regarded, well known Ethereum community members. They should agree to follow strong security practices, and make themselves available to sign quarterly membership updates when needed.

Overlapping signers and beneficiaries allows for more efficient self-governance vs. the overhead that comes with a set of external signers. 

### 5.2 Contributing Entities

![](https://i.imgur.com/LP1jvBg.png)
→ *[Kei's tweet](https://twitter.com/keikreutler/status/1461646035491692550)*

Ethereum has a rich culture of experimenting and nuturing radical new ideas. It's what makes our community one of the most vibrant in the space. Many Defi, NFT, DAO, and L2 projects have built amazing things on top of Ethereum's credibly neutral public infrastructure. However, none of what we know as Ethereum today would have been possible without the consistent efforts of committed protocol maintainers. Therefore, it would be ideal for current and future contributors should have a stake in the successes of these projects. This produces a powerful incentive alignment between maintainers and those that depend on their work.

To accomplish this, we invite contributing entities to donate:
-  governance tokens
-  recurring protocol fee revenue
-  interest bearing tokens
-  NFTs that have been fractionalized into ERC20s

We suggest that 1% of total project tokens should be allocated to this mechanism.

### 5.3 The Community

Even when the split contract is deployed, it will require consistent efforts from the broader community to make this a long-term success. This includes application developers, users, investors, enthusiasts, and builders of all kinds. They will be instrumental in:

- introducing and maintaining public norms about contributions through regular advocacy for the initiative
- writing governance proposals to get protocols to donate: even if protocols are aware of the split contract and on board with the norms, there may additional work needed to shepherd each proposal over the finish line
- ensuring the curators are responsibly neutral in their management of the protocol and its quarterly updates. If this is not the case, it is the responsibility of the community to call this out and advocate for change

## 6. Contract Requirements

*NOTE: These are only initial suggested requirements - the membership may decide on a completely different architecture, or some features may be technically / socially unworkable.*

To accomplish this desired outcome, we've specced a number of requirements that the split contract should meet. See Prior Art for other projects which have explored related concepts.

#### 6.1 Accepts common asset types 

To preserve the upside potential of donated assets, it's crucial that the split accepts ERC20s in addition to ETH.

#### 6.2 Immutable distribution

No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period.

#### 6.3 Non-custodial

No member should have even temporary discretion over vested or unvested funds - eg. a designated address holds funds before a member manually sends them on to another component.

#### 6.4 Mutable membership

It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because contributors will still join and leave protocol work. If we can't add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense.

#### 6.5 Includes vesting

In order to promote long-term incentive alignment, donated assets should be subject to a standard vesting period with no cliff. We suggest 4 years, but this should be mutual set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting rate deployed with the contract should not be modifiable by any party.

#### 6.6 Donations have finality

It should not be possible to remove donated assets from the split contract by anyone other than the beneficiaries. This means when a protocol donates tokens at launch, they cannot withdraw when they change their mind, when there is significant asset appreciation, or if the contributing address were to be compromised.

#### 6.7 Multi-claims are simple

Members should be able to claim their allocation from multiple eligibility windows in a single transaction.

![](https://i.imgur.com/DvpBDsi.png)

## 7. Anticipated Concerns

- Broadly, how will this design fail?
    - Believing that voluntaryism scales sufficiently to the levels this mechanism needs in order to be effective.
    - Assuming that developers even want to "self-govern" an asset stream, along with the responsibilities and pressures that come tied up with it.
- Will long-term vesting lead to stagnation in core development roles?
    - There's certainly a possibility that previously effective people may get stuck in a position if the incentive is significant enough. However, this is no different from any other job with performance requirements, crypto or otherwise. If someone is not performing adequately, they will be removed from their job and then from the list.
-  Will this replace existing salaries?
    - No, this should be a bonus on top of current pay.
- Why are categories and weightings not more granular?
    - While it's true that some people are objectively more productive in their work / valuable to the protocol, adding a weighting scheme to a membership this large would introduce complexity with each quarterly update as well as complex social dynamics about how to value the contributions of others. In the future, maintainers may consider a pairwise ranking model. 
- What if this ends up being a significant amount? 
    - If this mechanism *doesn't* accrue significant funds, then it's not really working properly. Vested donations should be significant enough to inspire new contributors to join core development. However, there should be deeper incentive analyses and the thresholds at which they get funky.
- Can beneficiaries abuse their position of trust?
    - Fundamentally, this is a political tool. In negative outcomes, whoever maintains the member eligibility can influence research areas and interest people have in certain sections of the protocol. Want to get the merge done? Add more client implementers at the expense of other ecosystem categories. This kind of manipulation is unlikely to actually happen as it would harm the mechanism's legitimacy.
- How can this be gamed?
    - Unscrupulous developers might invent phantom co-workers and redirect the split shares to themselves, or add real contributors but retain percent kickback. This is one area where the mechanism relies on mutual trust to avoid abuse. 
- Why doesn't people just ask for 5x salaries?
    - As discussed in the "Context of the Problem," traditional orgs will never be able to match the upside that comes from working on a novel tokenized application or L2.
- Aren't donated assets a form of bribe?
    - No. this would be a very inefficient form of bribing, as the large membership distribution dilutes any targeted intent. It would be more effective to bribe individuals, which can already happen today without a split contract. It could even be argued that this mechanism makes bribes *less* effective because bribes are most effective in situations of relative wealth inequality. By raising the holdings of core developers, they are less likely to be swayed by financial offers. Of course, this is completely opt in and protocol contributors are welcome to redirect their share to another public good organization.
- What happens if a large percent of infrastructure contributors decide not to participate? Or, what if sufficient number of contributors join and then decide to leave the split?
    - The mechanism's legitimacy is predicated on broad participation. If enough contributors decline, this may not be an appropriate tool for incenting work on public goods. In the latter case, the vesting would still continue but it may be difficult to solicit additional donations.
- How will members handle conflicts about list inclusion, eg. when someone starts doing well-intentioned but poorly executed work?
    - Eligibility criteria should be as explicit as possible. This should be communicated publicly and frequently with change history eg. Github. Any decisions which sidestep transparent processes undermine the mechanism's legitimacy.
- What about including past protocol contributors?
    - Not advisable, this would complicate inclusion decisions, as the split is supposed to incentivise current and future contributors.
- Will this compete with Gitcoin or other similar efforts?
    - We feel that this mechanism is differentiated enough (ie. forward looking, core protocol focused, vested, biases towards native tokens as opposed to USD) that the overlap may appear larger than it actually is. However, there may be some donting entities that feel like they are already "doing their part" with donations to one initiative and may not feel obligated to contribute to the other.
- What happens if enough signers get compromised and the membership is updated to addresses controlled by the attackers?
    - Depending on the final contract design, there's little that can be done besides wait out the assets which are still being vested. This would damage the trust donating entities put into the members, as well as any future efforts to restart something similar.
- What happens when the vesting parameters of the contract are less restrictive than the actual protocol builders?
    - This is not ideal, and probably suggests that the vesting rate should be at least as long as the industry standard.
- How should stable projects be considered?
    - One challenge for curators to determine what constitutes "actively involved" for solo project maintainers. These are often valuable contributions to the Ethereum ecosystem, but the work to maintain a stable project is much less than someone working part time. It may be worth creating a third category weighted at .1. This seems like an area where complications or abuse arise.  
- What are the tax implications of participation?
    - We are not tax lawyers, each participant should seek experts for their jurisdiction. 

## 8. Prior Art

There are a number of existing concepts which informed this project's design.

### 8.1 Split Contracts
- [OpenGrants](https://opengrants.com/explore)
    - Pros: limited participant set is easier to manage, vesting included
    - Cons: not updatable, one-off, no maintainer
- [Beacon Book](https://stateful.mirror.xyz/Y1ED9RorG9OvEUXD8NBmXgYhSVhjj8H537-I2SZJkYA) / [1559 NFT Series](https://stateful.mirror.xyz/rsUhYxXARr7j2iDjqJeelY7nc6CN_Y-MilVDP1S5voA)
    - Pros: non-custodial, limited scope is easier to manage
    - Cons: retroactive only, can't support erc20s

### 8.2 Organizations
- [Moloch V2](https://molochdao.gitbook.io/handbook/moloch-2.0-operating-manual/features-overview)
    - Pros: non-custodial, ragequit limits lockin
    - Cons: 
        - no vesting, voting in new members is too much overhead
        - "For an ERC-20 token to show up in the Bank's balance, the DAO must whitelist the token via a Whitelist Proposal"
- Gitcoin
    - Pros: recognized brand, full team backing up product
    - Cons: streaming payments (EIP-1337) never took off, curation is more challenging, currently custodial, creating and editing collections would require each split member to create their own profile
- [clr.fund](https://clr.fund/)
    - Pros: is exploring novel zK tools for donation anonymity
    - Cons: curation is more challenging, currently custodial, creating and editing collections would require each split member to create their own profile, less well known
- [Optimism Retroactive Public Goods Funding](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c)
    - Pros: first round appears very successful
    - Cons: requires active curation per round, retroactive only
- Index Products
    - Pros: 
    - Cons