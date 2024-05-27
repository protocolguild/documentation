# 1. Eligibility

Protocol Guild eligible projects must:

- Be fully open source: both “source available” and free to fork, modify, redistribute
- Have a regular presence in Ethereum R&D or governance venues, such as
  - specification repos (e.g. `consensus-specs`, `execution-specs`, `execution-apis`)
  - research forums (e.g. [ethresear.ch](https://ethresear.ch)), feature prototyping (e.g. EIPs, devnets, etc.)
  - regular [Ethereum protocol calls](https://calendar.google.com/calendar/u/0?cid=Y191cGFvZm9uZzhtZ3JtcmtlZ243aWM3aGs1c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t) (e.g. AllCoreDevs, breakouts, testing/interop calls, etc.)
- Target at least one of the following projects/areas:
  - Ethereum core protocol maintenance and development
    - Contributors to well-tested, technically-differentiated and production-ready Ethereum mainnet client implementations. Currently, this includes [Erigon](https://github.com/ledgerwatch/erigon), [EthereumJS](https://github.com/ethereumjs),  [Geth](https://github.com/ethereum/go-ethereum), [Hyperledger Besu](https://github.com/hyperledger/besu), [Lighthouse](https://github.com/sigp/lighthouse), [Lodestar](https://github.com/ChainSafe/lodestar), [Nethermind](https://github.com/NethermindEth/nethermind), [Nimbus](https://github.com/status-im/nimbus-eth2), [Prysm](https://github.com/prysmaticlabs/prysm), [Teku](https://github.com/ConsenSys/teku) and [Reth](https://github.com/paradigmxyz/reth)
    - Client testing/security/infra which supports these implementations: [ethereum/tests](https://github.com/ethereum/tests) [ethereum/execution-spec-tests](https://github.com/ethereum/execution-spec-tests)
    - Coordination related to upgrades and maintenance: [ethereum/pm](https://github.com/ethereum/pm)
  - Research and implementation experiments related to potential protocol changes
    - [Verkle tries](https://github.com/gballet/go-verkle) (Verge)
    - [Portal Network](https://github.com/ethereum/portal-network-specs) (Purge)
    - EVM improvements: [Ipsilon](https://github.com/ipsilon)
    - Consensus work
    - Cryptography
    - Mechanism design
    - Resource pricing
  - Spec work resulting from the above (should be implementation agnostic, unopinionated)
    - [Execution specs (EELS)](https://github.com/ethereum/execution-specs)
    - [Consensus specs](https://github.com/ethereum/consensus-specs)
  - Protocol Guild
    - General comms
    - Fundraising
    - Research related to the evolution of the Guild itself
    - Internal maintenance for the Guild membership

## 1.1 Context

The eligibility framework is a "best effort representation" of Ethereum Layer 1 R&D. It tries to be sufficiently accomodating to what is the core protocol, but not any broader. This framework has been modified previously and will likely continue to be: more restrictive in some places and more permissive in others.

Contributing to the efforts referenced above does not guarantee Protocol Guild membership. While this list tries to be explicit when possible linking to specific repositories, there are some research areas which can't be linked to a single source and may still be considered eligible.

Formal organizational affiliations are not necessary for membership. It may be the case that some members of an organization will be eligible but others will not be.

Independent or unaffiliated contributors are considered by the same guidelines as any contributors "officially" part of teams/projects.

## 1.2 How to Modify the Framework

Changing the eligibility framework can be made through a PR to the [documentation repo](https://github.com/protocolguild/documentation). This PR should add the project in the appropriate section, along with the following info:

- Name of project
- Start date of the project
- Summary of why this project should be considered eligible/ineligible
