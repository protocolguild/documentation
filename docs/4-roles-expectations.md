# 4. Roles & Expectations

To operate the guild, five unique roles will be required, each with their own obligations.

## 4.1 Members

There will be three types of members: Slot holders, curators and signers.

### 4.11 Slot Holders

Slot holders are members of the Guild who have qualified for a placement (slot) in the split contract. Estimated to be around 150-200 individuals, however the actual number may be higher or lower. There is no cap or target for number of slots. Slots can be set to any Ethereum address, including the individuals own, a charity, or another split contract.

#### Qualifications

Members should be committed to Ethereum and its ethos of decentralization. The contributions of qualifying individuals should be:

- Fully open source, ie. available for forking, modification and redistribution
- Continuous for at least 6 months ahead of inclusion
- Released under permissive licenses
- Part of the protocol, not built on top of it, e.g. a specific client implementation vs. an application
- Beneficial to the broader Ethereum community 
- Dedicated to a permissionless, open access Ethereum

It is possible for eligible individuals to work on a team which has a token, has VC backing or gives equity. However, members should expect these guidelines to change over time, i.e. become more restrictive in some places and more permissive in others.

Though Ethereum is a highly technical field, it is clear that the work of non-developers around the core protocol is also crucial and should be eligible. This may include people affiliated with the All Core Devs call, those coordinating ecosystem upgrades, and anyone helping to coevolve the protocol alongside the community.

#### Expectations

Members must notify each other if their contribution status changes, or if the work that afforded eligibility breaks one of the guidelines above. If you’re unsure about whether a new focus is still qualified, please ask the broader membership. 

At least once per year, members must prove ownership of the supplied address: members can claim vested funds or sign a message with their private key. This limits the impact of compromised wallets or lost keys.

Please note that the membership list will be publicly available in order to maintain transparency and mutual trust with both the broader community and sponsors. However, addresses and their associated weights will not be shared.

Members are strongly encouraged to participate in the Guild beyond the aforementioned expectations. Without deep member engagement, the Guild will not reach its full potential as a voice for core developers and the Ethereum protocol more broadly. The Guild may have trouble growing the membership or evolving norms if only a small minority are engaged in consensus building. Other modes of participation include:

- Suggesting Guild improvements
- Refining eligibility requirements
- Vetting potential members 
- Managing the Discord
- Helping with comms
- Outreach and awareness to potential/existing sponsors

### 4.12 Curators

Curators are members of the guild who maintain the list and weights of eligible members.

#### Qualifications

All Guild members are qualified and expected to participate as curators.

#### Expectations

Given the ambitious scope of this mechanism and the significant trust given by both sponsors and the community, it is vital for the membership list to accurately reflect active contributors. This ensures the legitimacy of the mechanism is maintained, and increased, in the eyes of non-member participants. In this sense, the Guild must be a garden which tends itself. Each of its members are peer stewards of a self-regulating plot. When the allocation of nutrients, sunlight or water become imbalanced, it’s up to the membership to recognize and adjust. Members should only commit if they are aligned with this expectation.

Self-curation is a crucial component of the project. While other public goods funding mechanisms have used external councils (e.g. Optimism’s RPG) or the donors (e.g. Gitcoin) to curate the beneficiary set, this wouldn’t work for our purposes. Any external council would have to be deeply embedded within the core protocol sphere in order to properly curate, to the extreme degree that it would become impractical to do much else. Instead, we will leverage the perspectives and daily interactions of people that are already embedded: the core contributors themselves.

Practically, this means signaling to the broader membership when they, a team member, or an independent contributor they interface with, have changed their contribution status, e.g. by joining or leaving core protocol work. Members should have regular contact with new members they propose. Bias or conflicts of interest should be disclosed, if they exist, e.g. where one is an advisor to the other’s side project.

We believe it is incentive compatible that curators are drawn from the beneficiaries because:

- Adding ineligible beneficiaries removes future vested value from existing members, i.e. they will more carefully consider potential members and their contributions. An external council would not feel this constraint so directly.
- The mechanism *must* accept all legitimate contributors, which prevents the set from ossifying or getting captured. Potential members which fit established guidelines need to be added to maintain credible neutrality to participants and sponsors. If sponsors think that the set is not inclusive enough, they will not feel incentivized to contribute.

Beyond this basic expectation, members should consider mentoring through something like the [Ethereum Protocol Fellowship](https://github.com/eth-protocol-fellows/cohort-three) (EPF) to surface a wide variety of contributor backgrounds, and help them on their journey. As global internet infrastructure, it would be a disappointment if Ethereum forever remained the domain of a small, homogeneous set of developers.

### 4.13 Signers

Signers are Guild members who act as key holders for the multisig, which can update the membership and their weights in the weighting contract. The 6/10 Gnosis Safe can be seen [here](https://gnosis-safe.io/app/eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4/balances). These should be well regarded figures from the Ethereum community. They should agree to follow strong security practices, and make themselves available to sign and deploy membership updates at the agreed upon cadence (e.g. quarterly). Similarly to curatorship, overlapping signers and beneficiaries allows for more efficient self-governance vs. the overhead that comes with a set of external signers. It should be noted that signers never have custody over vested funds. To learn more about how the multisig and the weighting contract interact, see section **Smart Contract Architecture**.

## 4.2 Sponsors

> "A main promise of DAOs lies in their ability not only to bring many people together, but many organizations - this is when they'll really shine" - *[Kei Kreutler](https://twitter.com/keikreutler/status/1461646035491692550)*

Sponsors includes any project which depends on the continued maintenance and evolution of Ethereum to be successful, and is interested in supporting said maintenance and evolution.

Ethereum has a rich culture of experimenting with radical new ideas: it’s what makes our community one of the most vibrant in the space. We’ve seen many DeFi, NFT, DAO, and Layer 2 projects build amazing things on top of Ethereum’s credibly neutral public infrastructure. To maintain and increase core protocol contributions long into the future, the financial incentives available to core contributors should meaningfully balance the lucrative pull of the app/Layer 2 token space. Giving current and future contributors a stake in the successes of these projects produces a powerful incentive alignment between maintainers and those that depend on their work. To accomplish this, we invite sponsors to contribute:
-  Governance tokens
-  Layer 2 sequencer fees
-  Recurring protocol fee revenue
-  Interest bearing tokens
-  Fractionalized NFTs
-  Good old-fashioned ETH

In order to be effective, we suggest that new projects consider allocating 1% of total project tokens to the Protocol Guild - see **Case Studies** for more explorations on this.

Finally, it should be noted that just as protocol maintenance is an ongoing effort, so too is sponsor support. New vesting contracts will need to be deployed and sponsored periodically to maintain  future incentives to contribute to the protocol.

## 4.3 The Community

Even when the Guild is live, it will require consistent efforts from the broader community to ensure its long-term success. This includes application developers, users, investors, enthusiasts, and builders of all kinds. They will be instrumental in:

- Introducing and maintaining public norms about contributions, through regular advocacy for the initiative.
- Writing governance proposals to get protocols to sponsor the Guild: even if protocols are aware of the split contract and on board with the norms, additional work may be needed to follow each community’s process.
- Ensuring the curators are responsibly neutral in their management of the protocol and its quarterly updates. If this is not the case, it is the responsibility of the community to call this out and advocate for change.
