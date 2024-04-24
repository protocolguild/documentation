# 4. Roles & Expectations

## 4.1 The Protocol Guild

The Protocol Guild's core output is a curated membership registry, with weights assigned to each member.

The registry is comprised of individuals who are [actively contributing](https://protocol-guild.readthedocs.io/en/latest/4-roles-expectations.html#qualifications) to Ethereum's core protocol development, while the [weights are calculated](https://protocol-guild.readthedocs.io/en/latest/6-operating-guidelines.html#weighting) based on how long each member has been actively contributing.

This registry is tied to a [single Ethereum address](https://app.0xsplits.xyz/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/), which anyone can send funds to, and whose funds will be vested to the membership over time, proportionally to members' normalized weighting.

By providing this registry and address, Ethereum's ecosystem and its community get access to a highly effective and frictionless way to support core protocol contributors. At sufficient scale, this has the downstream effect of boosting the long-term incentives associated with core protocol work.

It should be noted that the Guild as an entity does not directly manage or participate in the day-to-day stewardship of the Ethereum protocol. This remains the responsibility of the [existing organizations, teams and individuals](https://ethereum.org/en/governance/) whose ongoing focus it is to do so. Similarly, the Guild abstractly as well as its online spaces (Twitter, Discord, GitHub etc.) are not intended as forums for protocol decision-making, nor is it a bloc to coerce alignment among core contributors. Decision-making in Ethereum is by rough consensus and should remain so, and in this vein, the Guild should be as credibly neutral about this area of protocol stewardship as the Ethereum network is about the usecases built on top of it.

## 4.2 Members

For the Pilot, members of the Protocol Guild will have up to three different functions: [slot holders](https://protocol-guild.readthedocs.io/en/latest/4-roles-expectations.html#slot-holders), [curators](https://protocol-guild.readthedocs.io/en/latest/4-roles-expectations.html#curators) and [signers](https://protocol-guild.readthedocs.io/en/latest/4-roles-expectations.html#signers).

### 4.21 Slot Holders

Slot holders are members of the Guild who have qualified for a placement (slot) in the split contract. Estimated to be around 150-200 individuals, however the actual number may be higher or lower. There is no cap or target for number of slots. Slots can be set to any Ethereum address, including the individual's own, a charity, or another split contract.

#### Qualifications

Note 1: these guidelines will change over time, i.e. become more restrictive in some places and more permissive in others.

Note 2: contributing to the projects/repos referenced below is necessary but does not guarantee Guild eligibility. While this list tries to be explicit by linking to example repos, there are some research areas which can't be linked to a single repo.

Qualifying contributions _must_ be:

- Fully open source, i.e. both “source available” and free to fork, modify, redistribute
- The full focus of the individual (anything less receives a partial weighting, see [6.3 weighting](https://protocol-guild.readthedocs.io/en/latest/6-operating-guidelines.html#weighting))
- Continuous for at least 6 months ahead of inclusion and ongoing. Any contribution breaks for an existing member must be shorter than 1 quarter / 3 months - Beyond this length, the member should be moved to "Inactive" status until contribution resumes.

Qualifying contributions _must_ target at least one of the following projects/areas:

1. Ethereum core protocol maintenance and development: 

- Contributors to open-source, tested, technically differentiated and production-ready Ethereum mainnet client implementations with a regular presence in R&D or governance venues, such as specifications (e.g. `consensus-specs`, `execution-specs`, `execution-apis`, etc.), research posts (e.g. ethresear.ch), feature prototyping (e.g. EIPs, devnets, etc.) , and regular protocol calls (e.g. AllCoreDevs, testing/interop calls, etc.). Currently, this includes [Erigon](https://github.com/ledgerwatch/erigon), [EthereumJS](https://github.com/ethereumjs),  [Geth](https://github.com/ethereum/go-ethereum), [Hyperledger Besu](https://github.com/hyperledger/besu), [Lighthouse](https://github.com/sigp/lighthouse), [Lodestar](https://github.com/ChainSafe/lodestar), [Nethermind](https://github.com/NethermindEth/nethermind), [Nimbus consensus](https://github.com/status-im/nimbus-eth2) and [Nimbus execution layer](https://github.com/status-im/nimbus-eth1) clients, [Prysm](https://github.com/prysmaticlabs/prysm), [Reth](https://github.com/paradigmxyz/reth), [Teku](https://github.com/ConsenSys/teku)
- Client testing/security/infra which supports these implementations: [ethereum/tests](https://github.com/ethereum/tests) [ethereum/execution-spec-tests](https://github.com/ethereum/execution-spec-tests)
- Coordination related to upgrades and maintenance: [ethereum/pm](https://github.com/ethereum/pm)

2. Research and implementation experiments related to potential protocol changes/refinements
- [Verkle tries](https://github.com/gballet/go-verkle) (Verge)
- [Portal Network](https://github.com/ethereum/portal-network-specs) (Purge)
- EVM improvements: [Ipsilon](https://github.com/ipsilon)
- Consensus work
- Cryptography
- Mechanism design
- Resource pricing

3. Spec work resulting from the above (should be implementation agnostic, unopinionated)
- [Execution specs (EELS)](https://github.com/ethereum/execution-specs)
- [Consensus specs](https://github.com/ethereum/consensus-specs)

There may also be exceptional cases where members are added for contributing to Protocol Guild itself:
- General comms
- Fundraising
- Research related to the evolution of the Guild itself
- Internal maintenance for the Guild membership

Independent or unaffiliated contributors are considered by the same guidelines as any contributors "officially" part of teams/projects.

See [6.4 Modifying Projects and Members](https://protocol-guild.readthedocs.io/en/latest/6-operating-guidelines.html#modifying-projects-and-members) for guidelines on adding/removing eligible projects and members.

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

### 4.22 Curators

Curators are members of the Guild who maintain the list and weights of eligible members.

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

### 4.23 Signers

Signers are Guild members who act as key holders for the multisig, which can update the membership and their weights in the weighting contract. The 6/10 Gnosis Safe can be seen [here](https://gnosis-safe.io/app/eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4/balances). These should be well regarded figures from the Ethereum community. They should agree to follow strong security practices, and make themselves available to sign and deploy membership updates at the agreed upon cadence (e.g. quarterly). Similarly to curatorship, overlapping signers and beneficiaries allows for more efficient self-governance vs. the overhead that comes with a set of external signers. It should be noted that signers never have custody over vested funds. To learn more about how the multisig and the weighting contract interact, see section [Smart Contract Architecture](https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html).

## 4.3 Sponsors

> "A main promise of DAOs lies in their ability not only to bring many people together, but many organizations - this is when they'll really shine" - *[Kei Kreutler](https://twitter.com/keikreutler/status/1461646035491692550)*

Sponsors includes any project which depends on the continued maintenance and evolution of Ethereum to be successful, and is interested in supporting said maintenance and evolution.

Ethereum has a rich culture of experimenting with radical new ideas: it’s what makes our community one of the most vibrant in the space. We’ve seen many DeFi, NFT, DAO, and Layer 2 projects build amazing things on top of Ethereum’s credibly neutral public infrastructure. To maintain and increase core protocol contributions long into the future, the financial incentives available to core contributors should meaningfully balance the lucrative pull of the app/Layer 2 token space. Giving current and future contributors a stake in the successes of these projects produces a powerful incentive alignment between maintainers and those that depend on their work. To accomplish this, we invite sponsors to contribute:
-  Governance tokens
-  Layer 2 sequencer fees
-  Recurring protocol fee revenue
-  Interest bearing tokens
-  Fractionalized NFTs
-  Good old-fashioned ETH

In order to be effective, we suggest that new projects consider allocating 1% of total project tokens to the Protocol Guild - see [Case Studies](https://protocol-guild.readthedocs.io/en/latest/8-case-studies.html) for more explorations on this.

Finally, it should be noted that just as protocol maintenance is an ongoing effort, so too is sponsor support. New vesting contracts will need to be deployed and sponsored periodically to maintain  future incentives to contribute to the protocol.

## 4.4 The Community

Even when the Guild is live, it will require consistent efforts from the broader community to ensure its long-term success. This includes application developers, users, investors, enthusiasts, and builders of all kinds. They will be instrumental in:

- Introducing and maintaining public norms about contributions, through regular advocacy for the initiative.
- Writing governance proposals to get protocols to sponsor the Guild: even if protocols are aware of the split contract and on board with the norms, additional work may be needed to follow each community’s process.
- Ensuring the curators are responsibly neutral in their management of the protocol and its quarterly updates. If this is not the case, it is the responsibility of the community to call this out and advocate for change.
