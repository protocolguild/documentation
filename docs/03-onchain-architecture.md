# 3. Smart Contract Architecture

This section describes the Guild's current smart contract architecture. You can learn more about the pilot’s architecture [here](https://protocol-guild.readthedocs.io/en/latest/06-resources.html#pilot-smart-contract-architecture).

| Contract  | Address | ENS | Note |
| :--- | :--- | :--- | :--- |
| Vesting | [0x25941dc771bb64514fc8abbce970307fb9d477e9](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) | vesting.theprotocolguild.eth | Default donation address for Protocol Guild |
| Pass-Through | [0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E](https://app.splits.org/accounts/0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E/) | ptw.theprotocolguild.eth | Used by DAO to trigger arbitrary calls on tokens that have finished vesting |
| Split | [0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/) | split.theprotocolguild.eth | Onchain membership registry for distributing vested funds to the membership |
| DAO | [0x412a32dd71357bd12337f4408168df903f90cbd3](https://admin.daohaus.club/#/molochv3/0x1/0x412a32dd71357bd12337f4408168df903f90cbd3/members) | dao.theprotocolguild.eth | DAO containing all Protocol Guild members |
| Mainnet Multisig | [0x3250c2CEE20FA34D1c4F68eAA87E53512e95A62a](https://app.safe.global/balances?safe=eth:0x3250c2CEE20FA34D1c4F68eAA87E53512e95A62a) | - | Used when mainnet donations need to be claimed |
| Optimism Vesting | [0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830](https://app.splits.org/accounts/0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830/?chainId=10) | - | Default donation address on Optimism |
| Optimism Split | [0xc20A515648ecC1f379fDF6ECE07552a9093F416E](https://app.splits.org/accounts/0xc20A515648ecC1f379fDF6ECE07552a9093F416E/?chainId=10) | - | Onchain membership registry for distributing vested funds to the membership on OP |
| Arbitrum Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=arb1:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | - | Default donation address on Arbitrum |
| Base Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=base:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | - | Default donation address on Base |
| Optimism Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=oeth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | - | Used when Optimism donations need to be claimed |
| Polygon Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=matic:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | - | Default donation address on Polygon |
| re.al Multisig | [0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120](https://safe.re.al/balances?safe=re-al%3A0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120) | - | Default donation address on re.al |
| Scroll Multisig | [0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=scr:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B) | - | Default donation address on Scroll |
| ZKsync Multisig | [0x9fb5F754f5222449F98b904a34494cB21AADFdf8](https://app.safe.global/balances?safe=zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8) | - | Default donation address on ZKsync |
| Zora Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://safe.optimism.io/balances?safe=zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | - | Default donation address on Zora |

Protocol Guild uses smart contracts created by [Splits](https://splits.org/) to trustlessly manage the vesting and distribution of donated funds. All donations pass through a [4-year vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) on mainnet, which vests funds into a [pass-through wallet](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/), which in turn sends funds to a [split contract](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/) for distribution to the membership.

The split contract itself also serves as the Guild’s onchain membership registry of Ethereum’s active L1 R&D maintainers, while a [Moloch v3 DAO](https://admin.daohaus.club/#/molochv3/0x1/0x412a32dd71357bd12337f4408168df903f90cbd3/members) is used to ratify changes to the membership onchain.

## 3.1 Modules

The Guild’s smart contract architecture is modularized as follows:

<img width="1000" alt="OnchainArchitecture" src="https://github.com/cheeky-gorilla/membership/assets/76262359/66cb927d-6e12-4255-9e9f-04f5d6eb676e">

### Vesting Contract

- Contract addresses:
  - Ethereum Mainnet: [0x25941dc771bb64514fc8abbce970307fb9d477e9](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/)
  - Optimism: [0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830](https://app.splits.org/accounts/0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830/?chainId=10)
- Official documentation: [https://docs.splits.org/core/vesting](https://docs.splits.org/core/vesting)

The Guild’s donation address is an immutable vesting contract which irrevocably vests donated funds on a linear, block-by-block, basis over 4 years. Here, "irrevocably" means donations **cannot** be stopped or otherwise redirected during the vest by anyone, be it the donor or Protocol Guild membership.

Anyone can donate ETH and ERC-20 tokens to the vesting contract on mainnet.

**NFT donations are not supported** - standard NFT transfers (safeTransfer) will be rejected by the contract (i.e. meaning the transaction will fail), while non-safeTransfer NFT donations will be lost.

**How it works:**
- Donated tokens will accrue in a per-asset queue until a vesting stream is started for that batch of tokens, by triggering the `startStream` function (permissionless, as in any actor can trigger this function, regardless of whether they are a Guild member)
- Once the vesting stream is started, the tokens will vest linearly over 4 years, and anyone can permissionlessly trigger `releaseStream` to push any vested tokens into a pass-through wallet (this must be done per vesting stream)

All donated tokens are thus forced to vest - there is no way to do anything with them until they are vested into the pass-through wallet.

### Pass-Through Wallet

- Contract address: [0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E](https://app.splits.org/accounts/0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E/?chainId=1)
- Official documentation: [https://docs.splits.org/core/pass-through](https://docs.splits.org/core/pass-through)

All funds from the mainnet vesting contract go into a pass-through wallet (PTW), which pools vested tokens to be pushed to the split contract. (A PTW is not deployed on Optimism, there funds from the vesting contract go straight to the split.)

The PTW allows the Guild’s membership to make arbitrary calls with vested tokens if needed, since the current split contract does not have arbitrary call functionality. For the avoidance of doubt: the PTW can only be used to interact with tokens which have already finished vesting. Tokens still vesting in the [vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) cannot be prematurely interacted with.

**How it works:**
- The PTW has a permissionless `passThrough` function, which allows anyone to push vested funds accumulated in the PTW to the contract's `passThrough`, which is set to the Guild’s split contract, `0xd4aD8dAbA9eE5ef16Bb931d1CbE63fb9e102eC10`. 
- The PTWs owner (the Guild’s multisig), can pause / unpause the contract by changing the `paused` value, allowing the owner to move specific tokens using arbitrary calls instead. 
- The PTW owner can also update the `passThrough` recipient if needed e.g. if the Guild migrates to a different split contract in the future

### Split Contract

- Contract addresses:
  - Ethereum Mainnet: [0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/)
  - Optimism: [0xc20A515648ecC1f379fDF6ECE07552a9093F416E](https://app.splits.org/accounts/0xc20A515648ecC1f379fDF6ECE07552a9093F416E/?chainId=10)
- Official documentation:
  - Split V1 (Ethereum Mainnet): [https://docs.splits.org/core/split](https://docs.splits.org/core/split)
  - Split V2 (Optimism): [https://docs.splits.org/core/split-v2](https://docs.splits.org/core/split-v2)

The split contract contains all Guild members’ addresses and their respective share of vested funds (based on the time-weight formula).

Unlike the vesting contract, the split contract is mutable, as it needs to be updated quarterly to reflect changes to the membership (i.e. members being added or removed), as well as to update member weights over time.

**How split distributions work:**
- The `distribute` function allocates tokens in the split contract to Guild members according to their weights (it does not move the funds into the member wallets)
- Once distribute has been triggered, members can trigger the `withdrawForMyself` function to deposit tokens into their wallets

**How split updates work:**
- Membership changes are ratified once a quarter with a vote in the Guild’s Moloch V3 DAO, where new members are added / old members are removed in an onchain “Signal Proposal”
- Once the DAO proposal is executed, the Guild’s 6/10 multisig exports the offchain membership registry (with member addresses and weights), and uploads it as a CSV into the split contract to update it

### Moloch v3 DAO

- Contract address: [0x412a32dd71357bd12337f4408168df903f90cbd3](https://admin.daohaus.club/#/molochv3/0x1/0x412a32dd71357bd12337f4408168df903f90cbd3/members)
- Official documentation: [https://moloch.daohaus.fun/](https://moloch.daohaus.fun/)

The Guild uses [DAOhaus'](https://daohaus.club/) Moloch V3 contracts for onchain governance. The DAO includes all Guild members, with one person one vote, including vote delegation.

The DAO does not keep track of member weights, nor does it hold any funds. Currently, it is only used to ratify changes to the membership onchain. These changes are then processed by the Guild’s multisig (by updating the split contract).

**Proposal flow:**
- Once a quarter, “Signal Proposals” are used to ratify changes to the membership onchain, which adjusts the DAO’s members in bulk (i.e. adding and removing members)
- All proposals need to be sponsored by a DAO member before the voting period starts
- The voting period lasts 5 days, with a 33% quorum required for proposals to pass
- Proposals that reach quorum have a 2-day grace period before they can be executed

### Multisigs

- Official documentation: [https://docs.safe.global/](https://docs.safe.global/)

| Contract  | Address | Note |
| :--- | :--- | :--- |
| Mainnet Multisig | [0x3250c2CEE20FA34D1c4F68eAA87E53512e95A62a](https://app.safe.global/balances?safe=eth:0x3250c2CEE20FA34D1c4F68eAA87E53512e95A62a) | Used when mainnet donations need to be claimed (e.g. [Octant](https://octant.app/projects)) |
| Arbitrum Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=arb1:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | Default donation address on Arbitrum |
| Base Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=base:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | Default donation address on Base |
| Optimism Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=oeth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | Used when Optimism donations need to be claimed (e.g. [OP RPGF](https://retrofunding.optimism.io/)) |
| Polygon Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=matic:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | Default donation address on Polygon |
| re.al Multisig | [0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120](https://safe.re.al/balances?safe=re-al%3A0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120) | Default donation address on re.al |
| Scroll Multisig | [0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=scr:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B) | Default donation address on Scroll |
| ZKsync Multisig | [0x9fb5F754f5222449F98b904a34494cB21AADFdf8](https://app.safe.global/balances?safe=zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8) | Default donation address on ZKsync |
| Zora Multisig | [0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://safe.optimism.io/balances?safe=zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC) | Default donation address on Zora |

The Guild has deployed 6/10 [Safe](https://safe.global/) multisig contracts to control the PTW and split contract, and to claim funds on mainnet and optimism (when donations cannot be sent to the vesting contact directly). Multisigs are also used to receive donations on most L2s, and then bridge those funds to mainnet.

The multisigs’ signers are not disclosed publicly, and are rotated regularly.

The aim is to reduce reliance on multisigs over time, to replace them with the DAO or other more trustless alternatives as the become available.

## 3.2 Future Updates

Work is already underway on future iterations of the Guild’s smart contract architecture, to remove trusted components, manual input and offchain dependencies. The current modular architecture allows for these updates to be implemented in a gradual and secure way as and when ready. This documentation will also be updated at such time to reflect the changes being made.

If you would like to help shape the future of the Guild’s smart contract architecture, please reach out on our [Discord](https://discord.com/invite/HaUhXYsMyC)!
