# 1. Eligibility

Protocol Guild eligible projects must:

- Champion Ethereum's ethos of decentralization, credible neutrality, censorship resistance and permissionlessness 
- Be fully open source under an Open Source Initiative (OSI) [approved License](https://opensource.org/licenses)
- Have a regular presence in Ethereum R&D or governance venues like [ethresear.ch](https://ethresear.ch), [Ethereum Magicians](https://ethereum-magicians.org/), [protocol calls](https://calendar.google.com/calendar/u/0?cid=Y191cGFvZm9uZzhtZ3JtcmtlZ243aWM3aGs1c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) (e.g. AllCoreDevs, breakouts, testing/interop, etc.)
- Be engaged in feature prototyping (e.g. [EIPs](https://github.com/ethereum/eips), devnets, etc.)

Eligible projects must also target at least one of the following projects/areas related to Ethereum core protocol upgrades, maintenance and development:

| Description | Repos/Projects | Current Members / Max Cap |
|:--|:---|:---|
| Work on the canonical protocol specs. <br/> Should be implementation agnostic + unopinionated | - [Consensus specs](https://github.com/ethereum/consensus-specs) <br/> - [Execution specs (EELS)](https://github.com/ethereum/execution-specs) <br/> - [Execution APIs](https://github.com/ethereum/execution-apis)  | 3 / 5 |
| Ethereum mainnet client implementations. <br/> Must be well-tested, technically differentiated, <br/>  and production ready | - [Erigon](https://github.com/erigontech/erigon) <br/> - [EthereumJS](https://github.com/ethereumjs) <br/> - [Geth](https://github.com/ethereum/go-ethereum) <br/> - [Grandine](https://github.com/grandinetech/grandine) <br/> - [Hyperledger Besu](https://github.com/hyperledger/besu) <br/> - [Lighthouse](https://github.com/sigp/lighthouse) <br/> - [Lodestar](https://github.com/ChainSafe/lodestar) <br/> - [Nethermind](https://github.com/NethermindEth/nethermind) <br/> - [Nimbus](https://github.com/status-im/nimbus-eth2) <br/> - [Prysm](https://github.com/prysmaticlabs/prysm) <br/> - [Teku](https://github.com/ConsenSys/teku) <br/> - [Reth](https://github.com/paradigmxyz/reth) | Erigon: 13.5 / 15 <br/> EthereumJS: 4.5 / 8 <br/> Geth: 6 / 10 <br/> Grandine: 4 / 8 <br/> Besu: 12 / 15 <br/> Lighthouse: 11.5 / 15 <br/> Lodestar: 8 / 10 <br/> Nethermind: 13 / 15 <br/> Nimbus: 8 / 10 <br/> Prysm: 11 / 15 <br/> Teku: 10 / 12 <br/> Reth: 6 / 10 |
| Client testing/security/infra <br/> which supports these implementations | - [ethereum/tests](https://github.com/ethereum/tests) <br/> - [ethereum/execution-spec-tests](https://github.com/ethereum/execution-spec-tests) | 2.5 / 5 |
| Network upgrade coordination  | - [ethereum/pm](https://github.com/ethereum/pm) | 2 / 3 |
| Research and implementation experiments <br/> related to potential protocol changes | - [Verkle trees](https://github.com/gballet/go-verkle) (Verge) <br/> - [Portal Network](https://github.com/ethereum/portal-network-specs) (Purge) <br/> - [Ipsilon](https://github.com/ipsilon) (EVM Improvements) <br/> - Consensus work <br/> - Cryptography <br/> - Mechanism design <br/> - Resource pricing | Verkle Trees: 3 / 5 <br/> Portal Network: 7 / 10 <br/> EVM/Ipsilon: 4 / 8 <br/> Consensus Research: 12 / 15 <br/> Cryptography: 5 / 8 <br/> Mechanism Design: 5.5 / 8 <br/> Resource Pricing: 2 / 5 |
| Protocol Guild | - Fundraising <br/> - Research/testing of future improvements <br/> - Internal maintenance of membership <br/> - General communications | 2 / 3 |

## 1.1 Context

The eligibility framework is a "best effort representation" of Ethereum Layer 1 R&D. It tries to be sufficiently accommodating to what is the core protocol, but not any broader. This framework has been modified previously and will likely continue to be: more restrictive in some places and more permissive in others.

Contributing to the efforts referenced above does not guarantee Protocol Guild membership. While this list tries to be explicit when possible linking to specific repositories, there are some research areas which can't be linked to a single source and may still be considered eligible.

Formal organizational affiliations are not necessary for membership. It may be the case that some members of an organization will be eligible but others will not be.

Independent or unaffiliated contributors are considered by the same guidelines as any contributors "officially" part of teams/projects.

## 1.2 How to Modify the Framework

Changing the eligibility framework can be made through a PR to the [documentation repo](https://github.com/protocolguild/documentation). This PR should add the project in the appropriate section, along with the following info:

- Name of project
- Eligibility start date for the project
- Summary of why this project should be considered eligible/ineligible
- Proposed member cap for the project
- Rationale for the proposed cap based on the project's scope, maturity, and expected contribution to the Ethereum protocol

The eligibility start date for the project is the date at which the project met the Eligibility criteria above. This is the earliest date that future Protocol Guild members can use to count contributions towards the project.

When proposing a new project, the member cap should reflect the project's current scope and maturity. Projects that wish to increase their cap must submit a separate PR with justification for the increase. This allows the Guild to maintain oversight of membership growth while ensuring each project has the resources it needs to contribute effectively to the protocol.

For the purpose of member caps, contributors with partial weight (0.5x) count as 0.5 towards their project's cap. For example, a project with a cap of 10 could include 8 full-weight members (counting as 8) and 4 partial-weight members (counting as 2) for a total of 10.

Projects that have reached their member cap must submit a PR to increase their cap before adding new members. The PR should include:
- Current number of members and their roles
- Justification for increasing the cap
- Impact of the increase on the overall Guild composition
- Expected timeline for utilizing the additional slots
