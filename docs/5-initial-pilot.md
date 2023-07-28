# 5. Pilot: May '22 - May '23 

## 5.1 Before Launch

To prepare for launch, there are a few tasks we wanted to properly complete:

- Perform an informal audit of the 0xSplits contracts by members.
- Verify the 0xSplits contracts and frontend on testnet.
- Deploy the 6/10 multisig, the Split contract itself, and the Vesting Module.
- Onboard as many eligible members as possible.
- Broadcast the intent of the Protocol Guild to the broader community and potential sponsors, including getting a precommitment of funds where possible.
- Refine and document the operating process, which includes curating and deliberating on potential members, as well as onboarding them.

## 5.2 Pilot Characteristics

As of May 8th 2022, all of the above tasks have been completed. What follows is an overview of how the pilot is structured.

- Sponsoring assets will vest for one year (365 days) from stream initialization. Sponsoring streams may overlap with the next iteration of the vesting contract by a few months.
- We are targeting between $10-20mm in sponsorships. If you’re interested in being part of this initial cohort of sponsors, you can permissionlessly send funds to the [vesting contract 0xF29...1a9](https://app.0xsplits.xyz/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/). If you or your project have questions, please reach out on [Twitter](https://twitter.com/protocolguild) or to any of the existing members.
- We will plan to update the [membership list](https://protocol-guild.readthedocs.io/en/latest/9-membership.html#member-list) and [weights](https://protocol-guild.readthedocs.io/en/latest/9-membership.html#addresses-and-weights) ideally once per quarter, barring any special cases.
- The beneficiary split has been launched with 111 beneficiary addresses - see the contract through the [0xsplits interface](https://app.0xsplits.xyz/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/). The initial set of pilot beneficiaries include:
  - Diviners (Researchers / Spec Writers / Client Tinkerers): Responsible for divining the future needs of the protocol.
  - Framers (Client Maintainers): In dialogue with the previous set, responsible for manifesting the best fit frameworks to hold these needs in balance with each other.
  - Guides (Ecosystem relations, client tinkerers): In dialogue with both previous sets and responsible for guiding both of their paths of divination and manifestation.
  - The donations.0xSplits.eth address, which represents the 0xSplits team and some of their public goods dependencies.

## 5.3 Documenting Process

### Funding Requests

* Successful: [2mm LDO from the Lido community](https://research.lido.fi/t/proposal-to-fund-the-protocol-guild-pilot-via-a-lido-grant/2016)
* Successful: [200k ENS from the ENS community](https://discuss.ens.domains/t/ep13-executable-support-the-protocol-guild-pilot/12877)
* Successful: [500k UNI from the Uniswap community ](https://gov.uniswap.org/t/governance-proposal-should-the-uniswap-community-participate-in-the-protocol-guild-pilot/16824)
* Successful: [500 ETH from Nouns](https://discourse.nouns.wtf/t/proposal-nouns-funding-the-protocol-guild-pilot/1599)
* Successful: [500 ETH from MolochDAO](https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b/proposals/22)
* Failed: [2mm CRV from Curve Finance](https://gov.curve.fi/t/proposal-to-fund-the-protocol-guild-pilot-via-a-vefunder-gauge/3032). approached through the wrong funding mechanism

### Dune Dashboard

An overview of pilot finances can be explored via this Dune Analytics dashboard: [Protocol Guild Finances](https://dune.com/datamonkey_eth/protocol-guild). Thanks to [@datamonkey_eth](https://twitter.com/datamonkey_eth) for working with us to make it happen - we can strongly recommend them if your project needs data viz done!

## 5.4 Documenting Outcomes

Throughout the pilot, special attention should be given to evaluating outcomes related to the aforementioned **Pilot Characteristics**. The information gathered should be archived in the docs as a cohesive report for the edification of future members and operational adjustments. The report should include the following topics:

### Timing
  - Was one year the right length for the pilot?
  - What should the standard vesting period be post-pilot?
  - What’s the earliest the next iteration should launch ahead of the pilot concluding?

### Funding
  - Were funding targets hit ahead of launch?
  - How were the funds impacted by asset price fluctuations during the pilot? 
  - Was the initial raise too low/high?
  - Was there a healthy number and variety of sponsors?

### Operations
  - What sort of operating procedures worked? Which ones didn't? 
  - What role did voting play in decision-making, if any? 
  - What were the best practices that emerged with regard to voting, onboarding, curation?
  - Should the weighting be modified e.g. more granular, more subjective measures?
  - Were there any issues with compromised wallets, contracts or multisigs during the pilot?

### Communications
  - What sort of communication activities were carried out by the Guild during the pilot?
  - What was the engagement level of said communications with Guild members, sponsors and the community more broadly?
  - What sort of questions, feedback or concerns (if any), did Guild members, sponsors, or the community have during the pilot?

### Membership
  - Did the Guild start with an accurate representation of protocol contributors? 
  - What areas in the ecosystem should eligibility be expanded to after the pilot? Are there areas where eligibility should be restricted?
  - What were the notable membership changes/disputes, if any?
  - What is the general state of the membership?
  - Has the presence of the Guild lead to negative or positive affects to relationships, the progress of regular projects?
  - What frequency has someone's decision to join or remain in core protocol work cited the Guild as a compelling benefit?
  - Have any Guild members participated in mentorship programs to support diverse array of future contributors?

## 5.5 Mid-Pilot Update (Dec. 7 2022)

With the Protocol Guild’s 1-year pilot just about halfway done, we wanted to share an update on how the pilot is going, and what’s next. But first, a quick reminder of what this is all about:

The Protocol Guild is building towards the future of Public Goods funding. Today, this area still has a few challenges to overcome. Discovery is fragmented: not every contributor or team maintains a profile in the same services, if they exist at all. Simultaneously, it’s not straightforward for larger sponsors to fund the core protocol over long time horizons. Curation and distribution is centralized around a few large entities.

The Guild addresses these issues with a single high-signal mechanism the ecosystem can direct Public Goods funding towards. We use a self-curated membership registry and vesting to make sustainable long-term protocol funding as simple as possible. Instead of relying on a select few generous / well-capitalized entities to fund important infrastructure, Protocol Guild allows for applications, L2s or individuals to sponsor the people building the base layer they depend on.

The Guild launched a 1-year pilot in May 2022, and subsequently raised ~$9m in funds from Lido, Uniswap, ENS, Nouns DAO and Moloch DAO. 

Now let’s take a look at the last 6 months!

### Pilot Stats
Data from Dec 7, 2022 @ 9.15 UTC. 

#### Fundraising
- $9.7m has been donated to the Guild so far (valued at the time of donation)
- 91% of donated funds ($8.8m) came from five governance proposals: [Lido](https://research.lido.fi/t/proposal-to-fund-the-protocol-guild-pilot-via-a-lido-grant/2016) ($2.8m), [Uniswap](https://gov.uniswap.org/t/governance-proposal-should-the-uniswap-community-participate-in-the-protocol-guild-pilot/16824) ($2.7m), [ENS](https://discuss.ens.domains/t/ep13-executable-support-the-protocol-guild-pilot/12877) ($1.8m), [Nouns DAO](https://discourse.nouns.wtf/t/proposal-nouns-funding-the-protocol-guild-pilot/1599) ($0.8m) and [Moloch DAO](https://app.daohaus.club/dao/0x1/0x519f9662798c2e07fbd5b30c1445602320c5cf5b/proposals/22) ($0.8m)
- Five tokens account for 98% of all donations: LDO (29%), UNI (28%), ENS (19%), ETH (15%) and WETH (8%)
- There have been 3.8k individual donations, from 185 unique donors
- The [MergeFractals NFT project](https://ethereum-merge-fractals.surge.sh/) accounted for 88% of all individual donations, with 3.4k donations (totaling $41k)
- While the average donation value is $2.5k, this is skewed by significant high-value outliers (from the governance proposals), as indicated by the median donation being $12

![Donations](https://user-images.githubusercontent.com/76262359/206177963-8eac39a8-1314-4de6-aa7e-8717ac5b839f.png)

A very big THANK YOU to all donors - you’re demonstrating what important norms we should be aiming for.

#### Distributions
- Today the Guild has 128 members, up from 90 at the start
- $5m has been distributed to members so far (valued at the time of distribution)
- On average each member has received $39k, or $5.6k per month
- The most a single *active* member has received over this period is $79k, while the minimum is $13k
- $5.4m is still vesting in the Guild's treasury (during the pilot, each donation vests for 1 year)

![Distributions](https://user-images.githubusercontent.com/76262359/206177936-ec771374-4cf8-4bd4-899b-2b9b7db9881e.png)

#### Price Fluctuations
- The value of all donated funds are roughly even with the original donation value (-0.5%), mainly because ENS and UNI token prices are up 47% and 11% respectively since being donated in June '22. Almost all other token prices (including ETH) are down ~20%.
- The value of all distributed funds are down almost 16% since being distributed. That might seem counterintuitive considering that the value of donated funds are relatively equal since being donated, but this can be explained by the fact that funds are not distributed when the donated is received, rather they are unlocked gradually (i.e. vested) over time. And overall, all token prices have been experiencing a downtrend since August '22. For example, although ENS and UNI token prices are up 47% and 11% respectively since being donated in June '22, they are down 7% and 30% respectively since the start of Aug '22.
- Volatility was exacerbated by the fact that stablecoins (specifically DAI, USDC and USDT) account for just 1.9% of all donated funds.

![Totals](https://user-images.githubusercontent.com/76262359/206177876-9cc93e14-44f0-48fc-b420-09420faebb3e.png)

### Mid-Pilot Reflection

#### Mission
At the half-way point of the pilot, has the Guild proven itself as an effective mechanism to fund core protocol development? We consider the preliminary results to be quite promising, however there is still much work to be done. 

The Protocol Guild was initially conceived as a way to "[boost the incentives around stewarding the core protocol](https://protocol-guild.readthedocs.io/en/latest/index.html#protocol-guild)". In retrospect, this goal was perhaps not ambitious enough. A significant portion of core protocol development is currently being funded by centralized - and potentially unsustainable - sources, including the Ethereum Foundation (EF), Consensys and a few others. To secure the future of Ethereum’s core development work, we need to create a new equilibrium in core protocol funding, sustained by the ecosystem built on top of it. 

Accordingly, the Protocol Guild's goals have expanded as follows:
1. To serve as a counterbalance to EF / corporate-funded core protocol development, or at worst, a funder of last resort
2. To enable a one-stop-shop for funding the entire core protocol (research, implementation, coordination, testing)
3. To normalize setting aside a portion of ecosystem revenues to fund core protocol development
4. To help retain existing core protocol developers over the long term
5. To incentivize new contributors to join core protocol development

Achieving the above in a sustainable and decentralized way will be a years-long process, and require buy-in from across the Ethereum ecosystem. Fortunately, it’s the exact kind of challenge that our community is uniquely suited to rally around!

#### Member Accomplishments

Here’s an incomplete list of what Guild members have been busy with over the last year:

- Implement proof-of-stake consensus mechanism
    * Ethereum [successfully transitioned](https://bordel.wtf/) from proof-of-work to proof-of-stake (i.e. the merge), giving it the foundation it needs for [future scalability upgrades](https://ethereum.org/en/upgrades/vision/) while simultaneously [reducing energy](https://ethereum.org/en/energy-consumption/) consumption by ~99.95%! Read more takes [here](https://stateful.mirror.xyz/mYXVnZ_0mP0eTtKMb1-NJqo3a8cRXGMySfk_0ep_Oeg).
    * Next step is to enable [withdrawals](https://ethereum-magicians.org/t/eip-4895-beacon-chain-withdrawals-as-system-level-operations/8568), which is scheduled for the next hard fork ([Shanghai](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/shanghai.md)).
    * Research is also underway to enable [distributed validators](https://github.com/ethereum/distributed-validator-specs) and [single slot finality](https://notes.ethereum.org/@vbuterin/single_slot_finality). 
- Increase transaction throughput
    * [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844), aka Proto-Danksharding, will reduce rollup transaction fees by an order of magnitude, by introducing a new transaction type which rollups can use to (temporarily) post data in a much more cost-effective way. 
    * The EIP-4844 development process has been supported by various ecosystem entities, and today has reached the stage where discussions are underway as to which of the upcoming hard forks to include it in. 
- Maintain credible neutrality
    * The [OFAC sanctioning of Tornado Cash transactions](https://home.treasury.gov/news/press-releases/jy0916) has spurred a large debate around transaction inclusion, especially as it relates to stakers using [MEV techniques](https://www.mevboost.org/) to supplement their staking rewards by using [censoring relays](https://www.mevwatch.info/). 
    * [Proposal-Builder Separation](https://barnabe.substack.com/p/pbs) (PBS) could mitigate these concerns, with features that include forcing the inclusion of censored transactions (while also enabling tremendous scalability upgrades by making it easier to implement [Danksharding](https://notes.ethereum.org/@dankrad/new_sharding)). 
- Make it much easier to verify blocks
    * Removing reliance on centralized service providers to verify blocks is another core focus for researchers, which will be enabled by introducing [Verkle trees](https://notes.ethereum.org/@vbuterin/verkle_tree_eip). Also known as “[Stateless Ethereum](https://blog.ethereum.org/2021/12/02/verkle-tree-structure)”, work is underway to write and implement the specification for this. 
- Make Ethereum leaner by pruning old history
    * Progress is being made to implement [EIP-4444](https://eips.ethereum.org/EIPS/eip-4444), which proposes to [bound historical data in execution clients](https://www.youtube.com/watch?v=SfDC_qUZaos), to help reduce computation, bandwidth and storage requirements for node operators. 
- Upgrades to Ethereum’s EVM
    * Comprised of [five different EIPs](https://twitter.com/lightclients/status/1593270268956270594#m), the introduction of the [EVM Object Format](https://notes.ethereum.org/@ipsilon/evm-object-format-overview) (EOF) will enable a swath of improvements to the EVM, including adding versioning to EVM code, separating code and data, while also enabling significant gas savings for contract deployment. Similar to EIP-4484, EOF is also a candidate to include in one of the upcoming hard forks. 
- Events members attended and shared research at;
    * [Devconnect](https://www.youtube.com/watch?v=Bhx7advbPLE)
    * [Devcon Bogotá](https://youtu.be/hSgJiZQ70k8)
    * [Stanford Blockchain Conference](https://cbr.stanford.edu/sbc22/)
    * [Columbia CryptoEconomics Workshop](https://universitylife.columbia.edu/events/columbia-cryptoeconomics-workshop)
    * And many more!

To be clear, this isn’t to say that the Guild was responsible for these accomplishments or directed the work. All credit to the individuals and the teams / projects they work on to maintain Ethereum today and in the future!

#### Operations

To date the Guild has been using a private GitHub repository to coordinate changes to membership. And, while this process has been sufficient to make multiple updates, adopting a more public process would help boost transparency. 

In terms of smart contract tooling, [0xSplits](https://0xsplits.xyz/) has been used to automate both the [vesting of donated funds](https://app.0xsplits.xyz/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/) and [distribution of vested funds](https://app.0xsplits.xyz/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/) to members, and has worked without issues so far. We intend to continue using this tool for the foreseeable future.

However, the way the Guild *interacts with* the 0xSplits contracts can certainly be improved. Today, a 6/10 multisig is used to interact with the 0xSplits front-end, specifically to add / remove members and update member allocations (based on their [weighting](https://protocol-guild.readthedocs.io/en/latest/6-operating-guidelines.html#weighting)). This process entails an excessive amount of manual entry, and is potentially susceptible to errors in the future.

Another place to improve is the use of stateful.eth to receive funding on Layer 2's. This process should be made as trustless and automated as possible to avoid manual effort and prevent errors / abuse.

Fortunately, we’ve already started work to address these bottlenecks!

### Current Focus

#### V2 Architecture

The Guild should aim to be the industry standard for how to leverage blockchains for Public Goods funding. As such, all the aforementioned operational inefficiencies and dependencies need to be resolved for the next iteration of the Guild, post-pilot. 

To remove the need for a multisig, we are in the process of specing out how to convert the Guild's membership governance into an onchain process. We are currently leaning towards [Moloch v3](https://moloch.daohaus.fun/), due to its dual-token functionality (one for voting, one for treasury claims), as well as its ability to execute external contracts via proposals. Voting will be used for proposals to add / remove members, while weights can be automatically distributed without the need for manual updates.

These changes will then be pushed to 0xSplits via so-called "[Shamans](https://moloch.daohaus.fun/tools/shaman)" - essentially programmable DAO proposals which can interact with external contracts. From there, 0xSplits will be used as today to automate the vesting of donated funds and distribute vested funds to members. 

Finally, we hope to use L2 forwarding contracts to automatically forward funds from L2s to mainnet once certain value thresholds are reached. For this, we are currently considering [Mimic](https://mimic.fi/). 

Below is a preliminary diagram for what the new architecture of the Guild could look like: 

<img width="1416" alt="PG Moloch v2" src="https://user-images.githubusercontent.com/27454964/223480334-3367acd9-65a3-4ead-9f51-e9c5cbbb455a.png">

If you have any suggestions for the Guild’s v2 architecture, please [reach](https://twitter.com/ProtocolGuild) [out](https://discord.gg/HaUhXYsMyC)!

#### Fundraising

One of the primary Guild’s goals is to normalize setting aside a portion of ecosystem revenues to fund core protocol development. In an ideal world, we would love to see all entities that rely on Ethereum donate 1% of their revenue / profits/ initial token supply.

Over the next six months we will begin fundraising outreach in line with the above, and have already started drafting governance proposals. We will of course continue to leverage crowdfunding avenues such as [Gitcoin Grants](https://gitcoin.co/grants/4832/protocol-guild) in tandem. 

Overall, we aim to get funding commitments for at least $100m over four years from the end of the pilot (May '23). This corresponds to 2.5x more per year than during the pilot. Although this number is ambitious, recall that almost 10% of that was raised for the pilot from just five Ethereum projects (Lido, Uniswap, ENS, Nouns DAO and Moloch DAO). We have faith that the Ethereum community will again come through in support of our goals. 

#### Communications

A key goal of our communications strategy going forward will be to ensure the Guild’s purpose captures a larger mind-share across the Ethereum community. We want to get to a place where new projects instinctively think about donating a portion of funds in support of core protocol development. 

Furthermore, in a future where the Ethereum ecosystem is directing substantial funds through the Guild for this purpose, it will remain important for the Guild to operate as transparently as possible, so that its effectiveness and credible neutrality cannot be called into question. 

While we will take steps to preserve member privacy where possible, the Guild itself will otherwise aim to operate much in the same way as Ethereum’s core protocol devs (public Discords, calls etc.). 

As part of this, reports such as this one will be more frequent going forward, and not just alongside Gitcoin Grants rounds. These reports will summarize everything going on within the Guild, including changes to membership, funding, architecture, notable accomplishments of members etc. These reports will be refined over time to contain exactly the kind of information the Ethereum community requires.

—

And that’s it! Our next big update will drop in time for [Gitcoin Grants](https://gitcoin.co/grants/4832/protocol-guild) Round 16 in January ‘23. In the meantime, if you have any questions or comments please engage with us either on [Twitter](https://twitter.com/ProtocolGuild) or [Discord](https://discord.gg/HaUhXYsMyC). Thank you for your continued support!
