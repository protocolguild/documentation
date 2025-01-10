# 1. Eligibility

Protocol Guild eligible projects must:

- Champion Ethereum's ethos of decentralization, credible neutrality, censorship resistance and permissionlessness
- Be fully open source under an Open Source Initiative (OSI) [Approved License](https://opensource.org/licenses).
- Have a regular presence in Ethereum R&D or governance venues, such as;
  - Specification repos (e.g. [consensus-specs](https://github.com/ethereum/consensus-specs), [execution-specs](https://github.com/ethereum/execution-specs), [execution-apis](https://github.com/ethereum/execution-apis))
  - Research forums (e.g. [ethresear.ch](https://ethresear.ch), [Ethereum Magicians](https://ethereum-magicians.org/))
  - Feature prototyping (e.g. [EIPs](https://github.com/ethereum/eips), devnets, etc.)
  - Regular [Ethereum protocol calls](https://calendar.google.com/calendar/u/0?cid=Y191cGFvZm9uZzhtZ3JtcmtlZ243aWM3aGs1c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) (e.g. AllCoreDevs, breakouts, testing/interop calls, etc.)
- Target at least one of the following projects/areas:
  - Work on the canonical protocol specs (should be implementation agnostic, unopinionated)
    - [Consensus specs](https://github.com/ethereum/consensus-specs)
    - [Execution specs (EELS)](https://github.com/ethereum/execution-specs)
    - [Execution APIs](https://github.com/ethereum/execution-apis)
  - Ethereum core protocol maintenance and development
    - Contributors to well-tested, technically-differentiated and production-ready Ethereum mainnet client implementations. Currently, this includes [Erigon](https://github.com/erigontech/erigon), [EthereumJS](https://github.com/ethereumjs),  [Geth](https://github.com/ethereum/go-ethereum), [Grandine](https://github.com/grandinetech/grandine), [Hyperledger Besu](https://github.com/hyperledger/besu), [Lighthouse](https://github.com/sigp/lighthouse), [Lodestar](https://github.com/ChainSafe/lodestar), [Nethermind](https://github.com/NethermindEth/nethermind), the [Nimbus consensus client](https://github.com/status-im/nimbus-eth2), [Prysm](https://github.com/prysmaticlabs/prysm), [Teku](https://github.com/ConsenSys/teku), [Reth](https://github.com/paradigmxyz/reth), and the [Nimbus execution client](https://github.com/status-im/nimbus-eth1).
    - Client testing/security/infra which supports these implementations: [ethereum/tests](https://github.com/ethereum/tests) [ethereum/execution-spec-tests](https://github.com/ethereum/execution-spec-tests)
    - Coordination related to upgrades and maintenance: [ethereum/pm](https://github.com/ethereum/pm)
  - Research and implementation experiments related to potential protocol changes
    - [Verkle trees](https://github.com/gballet/go-verkle) (Verge)
    - [Portal Network](https://github.com/ethereum/portal-network-specs) (Purge)
    - EVM improvements: [Ipsilon](https://github.com/ipsilon)
    - Consensus work
    - Cryptography
    - Mechanism design
    - Resource pricing
  - Protocol Guild
    - Fundraising
    - Research related to the evolution of the Guild itself
    - Internal maintenance for the Guild membership
    - General communications

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

The eligibility start date for the project is the date at which the project met the Eligibility criteria above. This is the earliest date that future Protocol Guild members can use to count contributions towards the project. 
