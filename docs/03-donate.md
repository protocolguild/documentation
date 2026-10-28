# 3. Donate

The Protocol Guild’s funding mechanism was designed to remove friction associated with supporting Ethereum’s core protocol development, by providing a single onchain address which vests funds directly to active core protocol contributors over time. 

All donations can be seen in Protocol Guild's [Dune Dashboard](https://dune.com/protocolguild/protocol-guild).

Note that there are different donation addresses depending on if you're donating on Ethereum mainnet or L2s / other chains!

## 3.1 Mainnet

<b>[theprotocolguild.eth](https://explorer.splits.org/accounts/0x4EA88fa76848a8BBAB72613d4171df1eBcf68399/)<br>
[0x4EA88fa76848a8BBAB72613d4171df1eBcf68399](https://explorer.splits.org/accounts/0x4EA88fa76848a8BBAB72613d4171df1eBcf68399/)</b>

[![Donate](https://raw.githubusercontent.com/protocolguild/documentation/refs/heads/main/assets/donate.png)](https://explorer.splits.org/accounts/0x4EA88fa76848a8BBAB72613d4171df1eBcf68399)

The Guild’s mainnet donation address is an immutable vesting contract which trustlessly vests donated funds over 1 year. Vested funds get pushed into a [pass-through wallet](https://explorer.splits.org/accounts/0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E/?chainId=1), which in turn sends funds to a [split contract](https://explorer.splits.org/accounts/0xd982477216dadd4c258094b071b49d17b6271d66/?chainId=1) for distribution to the membership. You can read more about this smart contract architecture [here](/docs/onchain-architecture).

Important: The vesting contract only supports ETH and ERC20 tokens, and cannot claim funds. For other tokens, or if donations need to be claimed, please use the following multisig instead: [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/settings/setup?safe=eth:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)

## 3.2 Donation Addresses

Apart from Ethereum mainnet, vesting contracts have been deployed on Arbitrum, Base and Optimism. For other L2s / chains, multisigs have been deployed to receive donations. Multisig funds will be transferred or bridged into vesting contracts periodically. The 4-year vesting contracts are for [Protocol Guild Pledge](#protocol-guild-pledge) donations.

| **Chain** | **1-Year Vesting Contract** | **4-Year Vesting Contract** | **Multisig** |
|:---|:---|:---|:---|
| **Ethereum Mainnet** | [0x4EA88fa76848a8BBAB72613d4171df1eBcf68399](https://explorer.splits.org/accounts/0x4EA88fa76848a8BBAB72613d4171df1eBcf68399/) | [0x25941dc771bb64514fc8abbce970307fb9d477e9](https://explorer.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) | [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/settings/setup?safe=eth:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79) |
| **Arbitrum** | [0x8ee2AcfEbd311c1cF8d74448E207B4960EaCf599](https://explorer.splits.org/accounts/0x8ee2AcfEbd311c1cF8d74448E207B4960EaCf599/?chainId=42161) | [0x7F8DCFd764bA8e9B3BA577dC641D5c664B74c47b](https://explorer.splits.org/accounts/0x7F8DCFd764bA8e9B3BA577dC641D5c664B74c47b/?chainId=42161) | [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=arb1:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79) |
| **Base** | [0xffaaCCFe120f3fC47f42102cF4F28e837cd49A20](https://explorer.splits.org/accounts/0xffaaCCFe120f3fC47f42102cF4F28e837cd49A20/?chainId=8453) | [0xd16713A5D4Eb7E3aAc9D2228eB72f6f7328FADBD](https://explorer.splits.org/accounts/0xd16713A5D4Eb7E3aAc9D2228eB72f6f7328FADBD/?chainId=8453) | [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=base:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79) |
| **Optimism** | [0x7a489D5Fedd52f561b73EC8B0a164c0BD36036A2](https://explorer.splits.org/accounts/0x7a489D5Fedd52f561b73EC8B0a164c0BD36036A2/?chainId=10) | [0x58ae0925077527a87D3B785aDecA018F9977Ec34](https://explorer.splits.org/accounts/0x58ae0925077527a87D3B785aDecA018F9977Ec34/?chainId=10) | [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=oeth:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79) |
| **Polygon** | - | - | [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=matic:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79) |
| **Robinhood Chain** | - | - | [0x2Dc2234a0C2E8a5e378130567B50d160637f946A](https://robinhoodchain.blockscout.com/address/0x2Dc2234a0C2E8a5e378130567B50d160637f946A) |
| **Scroll** | - | - | [0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=scr:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79) |
| **Shape** | - | - | [0x700fccD433E878F1AF9B64A433Cb2E09f5226CE8](https://safe.shape.network/balances?safe=shape:0x700fccD433E878F1AF9B64A433Cb2E09f5226CE8) |
| **zkSync** | - | - | [0x9fb5F754f5222449F98b904a34494cB21AADFdf8](https://app.safe.global/balances?safe=zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8) |
| **Zora** | - | - | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://safe.optimism.io/balances?safe=zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) |

Important: The vesting contracts only support ETH and ERC20 tokens, and cannot claim funds. For other tokens, or if donations need to be claimed, please use the indicated multisigs instead.

## 3.3 Protocol Guild Pledge

Protocol Guild's long-term mission is to make contributing to Ethereum L1 R&D economically rational on a risk-adjusted basis, while avoiding capture. To get there, we aim to normalize that projects built on Ethereum donate 1% of their native token to the Protocol Guild. You can read about the Protocol Guild Pledge [here](https://www.protocolguild.org/blog/20240130-protocol-guild-pledge).

Projects taking the pledge can donate their tokens into the 4-year vesting contracts listed in the [table above](#donation-addresses). Please [reach out to us](https://calendly.com/vecchiarelli-peter/30min) before making a pledge donation, so that we can help coordinate a test transaction first.

### How to take the Pledge?

Projects that don't have a token yet can take the pledge by making a public commitment to donate 1% of a future token to the Protocol Guild. You can see an example of this [here](https://x.com/taikoxyz/status/1755609928167981330).

Projects that already have a token can take the pledge by donating 1% of the supply to the donation addresses listed above. 

If you have questions about taking the pledge, please [schedule a call](https://calendly.com/vecchiarelli-peter/30min) or send an email to pledge [at] protocolguild.org.
