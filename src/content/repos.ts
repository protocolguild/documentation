export interface RepoData {
  name: string;
  description: string;
  contributors: number;
  link: string;
}

export const repoData: RepoData[] = [
{
   name: "bluealloy/revm"
   description: "Rust EVM implementation"
   contributors: 1
   link: "https://github.com/bluealloy/revm"
},
{
   name: "ChainSafe/lodestar"
   description: "TypeScript Implementation of Ethereum Consensus"
   contributors: 8
   link: "https://github.com/ChainSafe/lodestar"
},
{
   name: "Consensys/teku"
   description: "Open-source Ethereum consensus client written in Java"
   contributors: 9
   link: "https://github.com/Consensys/teku"
},
{
   name: "Consensys/tuweni"
   description: "a set of Java blockchain libraries & tools"
   contributors: 1
   link: "https://github.com/Consensys/tuweni"
},
{
   name: "crate-crypto/go-ipa"
   description: "A Go implementation of cryptographic primitives for Verkle Trees"
   contributors: 1
   link: "https://github.com/crate-crypto/go-ipa"
},
{
   name: "erigontech/erigon"
   description: "Ethereum Execution client written in Go"
   contributors: 9
   link: "https://github.com/erigontech/erigon"
},
{
   name: "erigontech/rpc-tests"
   description: "Collection of JSON RPC black-box testing tools"
   contributors: 1
   link: "https://github.com/erigontech/rpc-tests"
},
{
   name: "erigontech/silkworm"
   description: "C++ implementation of the Ethereum protocol"
   contributors: 6
   link: "https://github.com/erigontech/silkworm"
},
{
   name: "ethereum/c-kzg-4844"
   description: "A minimal implementation of the Polynomial Commitments API for EIP-4844 and EIP-7594, written in C."
   contributors: 1
   link: "https://github.com/ethereum/c-kzg-4844"
},
{
   name: "ethereum/consensus-specs"
   description: "Ethereum Consensus Specifications"
   contributors: 9
   link: "https://github.com/ethereum/consensus-specs"
},
{
   name: "ethereum/EIPs"
   description: "Ethereum Improvement Proposal repo"
   contributors: 8
   link: "https://github.com/ethereum/EIPs"
},
{
   name: "ethereum/evmc"
   description: "EVMC – Ethereum Client-VM Connector API"
   contributors: 3
   link: "https://github.com/ethereum/evmc"
},
{
   name: "ethereum/evmone"
   description: "Fast Ethereum Virtual Machine implementation"
   contributors: 6
   link: "https://github.com/ethereum/evmone"
},
{
   name: "ethereum/execution-apis"
   description: "Collection of APIs provided by Ethereum execution clients"
   contributors: 2
   link: "https://github.com/ethereum/execution-apis"
},
{
   name: "ethereum/execution-spec-tests"
   description: "A Python framework & test cases to generate test vectors for Ethereum execution clients"
   contributors: 7
   link: "https://github.com/ethereum/execution-spec-tests"
},
{
   name: "ethereum/execution-specs"
   description: "Spec for the Execution Layer. Tracking network upgrades."
   contributors: 3
   link: "https://github.com/ethereum/execution-specs"
},
{
   name: "ethereum/go-ethereum"
   description: "Go implementation of the Ethereum protocol"
   contributors: 4
   link: "https://github.com/ethereum/go-ethereum"
},
{
   name: "ethereum/go-verkle"
   description: "Go implementation of Verkle trees"
   contributors: 2
   link: "https://github.com/ethereum/go-verkle"
},
{
   name: "ethereum/hive"
   description: "End-to-end test harness"
   contributors: 1
   link: "https://github.com/ethereum/hive"
},
{
   name: "ethereum/pm"
   description: "Project Management: Meeting notes and agenda items"
   contributors: 2
   link: "https://github.com/ethereum/pm"
},
{
   name: "ethereum/portal-network-specs"
   description: "Portal Network Specs"
   contributors: 5
   link: "https://github.com/ethereum/portal-network-specs"
},
{
   name: "ethereum/protocol-security"
   description: "Securing the network"
   contributors: 5
   link: "https://github.com/ethereum/protocol-security"
},
{
   name: "ethereum/tests"
   description: "Common tests for all Ethereum implementations"
   contributors: 2
   link: "https://github.com/ethereum/tests"
},
{
   name: "ethereum/trin"
   description: "An Ethereum portal client in Rust"
   contributors: 2
   link: "https://github.com/ethereum/trin"
},
{
   name: "ethereumjs/ethereumjs-monorepo"
   description: "Ethereum VM TypeScript Implementation"
   contributors: 5
   link: "https://github.com/ethereumjs/ethereumjs-monorepo"
},
{
   name: "ethereumjs/ultralight"
   description: "Portal Network client in TypeScript"
   contributors: 2
   link: "https://github.com/ethereumjs/ultralight"
},
{
   name: "ethPandaOps"
   description: "Bringing Ethereum upgrades to devnets and testnets"
   contributors: 1
   link: "https://github.com/ethPandaOps"
},
{
   name: "gballet/go-ethereum"
   description: "Go implementation of the Ethereum execution"
   contributors: 2
   link: "https://github.com/gballet/go-ethereum"
},
{
   name: "grandinetech/grandine"
   description: "High performance Ethereum consensus client"
   contributors: 5
   link: "https://github.com/grandinetech/grandine"
},
{
   name: "grandinetech/rust-kzg/"
   description: "Parallelized multi-backend KZG library for Ethereum Data Sharding"
   contributors: 1
   link: "https://github.com/grandinetech/rust-kzg/"
},
{
   name: "hyperledger/besu"
   description: "An enterprise-grade Java-based, Apache 2.0 licensed Ethereum Execution client"
   contributors: 12
   link: "https://github.com/hyperledger/besu"
},
{
   name: "hyperledger/besu-stateless"
   description: "Stateless Ethereum Execution client "
   contributors: 1
   link: "https://github.com/hyperledger/besu-stateless"
},
{
   name: "imapp-pl/gas-cost-estimator"
   description: "Gas benchmark tool for EVM operations across different implementations"
   contributors: 1
   link: "https://github.com/imapp-pl/gas-cost-estimator"
},
{
   name: "ipsilon/eof"
   description: "Validation code for the EOF specification"
   contributors: 4
   link: "https://github.com/ipsilon/eof"
},
{
   name: "libp2p/jvm-libp2p"
   description: "a libp2p implementation for the JVM, written in Kotlin"
   contributors: 1
   link: "https://github.com/libp2p/jvm-libp2p"
},
{
   name: "NethermindEth/nethermind"
   description: "A robust execution client built on .NET"
   contributors: 21
   link: "https://github.com/NethermindEth/nethermind"
},
{
   name: "OffchainLabs/hashtree"
   description: "SHA256 library highly optimized for Merkle tree computations"
   contributors: 1
   link: "https://github.com/OffchainLabs/hashtree"
},
{
   name: "paradigmxyz/reth"
   description: "Modular, contributor-friendly and blazing-fast Rust implementation of the Ethereum protocol"
   contributors: 3
   link: "https://github.com/paradigmxyz/reth"
},
{
   name: "paradigmxyz/revmc"
   description: "JIT and AOT compiler for the EVM, built on Revm."
   contributors: 1
   link: "https://github.com/paradigmxyz/revmc"
},
{
   name: "protocolguild/documentation"
   description: "Protocol Guild documentation"
   contributors: 3
   link: "https://github.com/protocolguild/documentation"
},
{
   name: "prysmaticlabs/gohashtree"
   description: "A Golang SHA256 library optimized for Merkle Trees"
   contributors: 1
   link: "https://github.com/prysmaticlabs/gohashtree"
},
{
   name: "prysmaticlabs/prysm"
   description: "Go implementation of Ethereum Consensus"
   contributors: 11
   link: "https://github.com/prysmaticlabs/prysm"
},
{
   name: "sigp/discv5"
   description: "Rust implementation of Discovery v5"
   contributors: 2
   link: "https://github.com/sigp/discv5"
},
{
   name: "sigp/enr"
   description: "Ethereum Node Record"
   contributors: 2
   link: "https://github.com/sigp/enr"
},
{
   name: "sigp/lighthouse"
   description: "Ethereum consensus client in Rust"
   contributors: 13
   link: "https://github.com/sigp/lighthouse"
},
{
   name: "status-im/nimbus-eth1"
   description: "Nim Execution Client for Resource-Restricted Devices"
   contributors: 2
   link: "https://github.com/status-im/nimbus-eth1"
},
{
   name: "status-im/nimbus-eth2"
   description: "Nim Consensus Client"
   contributors: 6
   link: "https://github.com/status-im/nimbus-eth2"
}
]
