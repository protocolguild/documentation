# 3. Smart Contract Architecture

This section describes the Guild's current smart contract architecture. You can learn more about the pilot’s architecture [here](https://protocol-guild.readthedocs.io/en/latest/06-resources.html#pilot-smart-contract-architecture).

Protocol Guild uses smart contracts created by [Splits](https://splits.org/) to trustlessly manage the vesting and distribution of donated funds. All donations pass through a [4-year vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) on mainnet, which vests funds into a [pass-through wallet](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/), which in turn sends funds to a [split contract](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/) for distribution to the membership.

The split contract itself also serves as the Guild’s onchain membership registry of Ethereum’s active L1 R&D maintainers, while a [Moloch v3 DAO](https://admin.daohaus.club/#/molochv3/0x1/0x412a32dd71357bd12337f4408168df903f90cbd3/members) is used to ratify changes to the membership onchain.

## 3.1 Modules

The Guild’s smart contract architecture is modularized as follows:

<img width="1000" alt="OnchainArchitecture" src="https://github.com/cheeky-gorilla/membership/assets/76262359/66cb927d-6e12-4255-9e9f-04f5d6eb676e">

### Vesting Contract

The Guild’s donation addresses on Ethereum mainnet, Arbitrum, Base and Optimism are immutable vesting contract, built by the [Splits](https://splits.org/) team, which irrevocably vests donated funds on a linear (block-by-block), basis over 4 years. Here, "irrevocably" means donations **cannot** be stopped or otherwise redirected during the vest by anyone, be it the donor or Protocol Guild membership. Anyone can donate ETH and ERC-20 tokens to these  vesting contract.

**NFT donations are not supported** - standard NFT transfers (safeTransfer) will be rejected by the contract (i.e. meaning the transaction will fail), while non-safeTransfer NFT donations will be lost.

**How it works:**
- Donated tokens will accrue in a per-asset queue until a vesting stream is started for that batch of tokens, by triggering the `startStream` function (permissionless, as in any actor can trigger this function, regardless of whether they are a Guild member)
- Once the vesting stream is started, the tokens will vest linearly over 4 years, and anyone can permissionlessly trigger `releaseStream` to push any vested tokens into a pass-through wallet (this must be done per vesting stream)
- Official documentation: [https://docs.splits.org/core/vesting](https://docs.splits.org/core/vesting)

All donated tokens are thus forced to vest - there is no way to do anything with them until they are vested into the pass-through wallet.

**Deployed Vesting Contracts:**

- Mainnet: [0x25941dc771bb64514fc8abbce970307fb9d477e9](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/)
  - Deprecated: [0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9](https://app.splits.org/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/)
- Arbitrum: [0x7F8DCFd764bA8e9B3BA577dC641D5c664B74c47b](https://app.splits.org/accounts/0x7F8DCFd764bA8e9B3BA577dC641D5c664B74c47b/?chainId=42161)
- Base: [0xd16713A5D4Eb7E3aAc9D2228eB72f6f7328FADBD](https://app.splits.org/accounts/0xd16713A5D4Eb7E3aAc9D2228eB72f6f7328FADBD/?chainId=8453)
- Optimism: [0x58ae0925077527a87D3B785aDecA018F9977Ec34](https://app.splits.org/accounts/0x58ae0925077527a87D3B785aDecA018F9977Ec34/?chainId=10)
  - Deprecated: [0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830](https://app.splits.org/accounts/0xB3d8d7887693a9852734b4D25e9C0Bb35Ba8a830/?chainId=10)

### Pass-Through Wallet

All funds from vesting contracts go into a pass-through wallet (PTW), built by the [Splits](https://splits.org/) team, which pools vested tokens to be pushed to split contracts.

The PTW allows the Guild’s membership to make arbitrary calls with vested tokens if needed, since the current split contract does not have arbitrary call functionality. For the avoidance of doubt: the PTW can only be used to interact with tokens which have already finished vesting. Tokens still vesting in vesting contracts cannot be prematurely interacted with.

**How it works:**
- The PTW has a permissionless `passThrough` function, which allows anyone to push vested funds accumulated in the PTW to the contract's `passThrough`, which is set to the Guild’s split contract.
- The PTWs owner (the Guild’s multisig), can pause / unpause the contract by changing the `paused` value, allowing the owner to move specific tokens using arbitrary calls instead. 
- The PTW owner can also update the `passThrough` recipient if needed e.g. if the Guild migrates to a different split contract in the future
- Official documentation: [https://docs.splits.org/core/pass-through](https://docs.splits.org/core/pass-through)

**Deployed PTWs:**

- Mainnet: [0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E](https://app.splits.org/accounts/0x2E1A2823B6e65e6AC46BaD6e0Cc4096976Fc265E/?chainId=1)
- Arbitrum: [0x613d2d0dcbe95e2f06e1fa6651633ceb17b58dbf](https://app.splits.org/accounts/0x613d2d0dcbe95e2f06e1fa6651633ceb17b58dbf/?chainId=42161)
- Base: [0xfcdf7254cca539f87f732c4bc19356a3d856a9b1](https://app.splits.org/accounts/0xfcdf7254cca539f87f732c4bc19356a3d856a9b1/?chainId=8453)
- Optimism: [0xd62f993fa6a2d15815795c377cf5c9ccce81f499](https://app.splits.org/accounts/0xd62f993fa6a2d15815795c377cf5c9ccce81f499/?chainId=10)

### Split Contract

Split contracts, built by the [Splits](https://splits.org/) team, contain all Guild members’ addresses and their respective share of vested funds (based on the time-weight formula). Unlike the vesting contract, the split contract is mutable, as it needs to be updated quarterly to reflect changes to the membership (i.e. members being added or removed), as well as to update member weights over time.

**How it works:**
- Distributions:
  - The `distribute` function allocates tokens in the split contract to Guild members according to their weights (it does not move the funds into the member wallets)
  - Once distribute has been triggered, members can trigger the `withdrawForMyself` function to deposit tokens into their wallets
- Updates:
  - Membership changes are ratified once a quarter with a vote in the Guild’s Moloch V3 DAO, where new members are added / old members are removed in an onchain “Signal Proposal”
  - Once the DAO proposal is executed, the Guild’s 6/10 multisig exports the offchain membership registry (with member addresses and weights), and uploads it as a CSV into the split contract to update it
- Official documentation:
  - Split V1: [https://docs.splits.org/core/split](https://docs.splits.org/core/split)
  - Split V2: [https://docs.splits.org/core/split-v2](https://docs.splits.org/core/split-v2)

**Deployed Splits Contracts:**

- Mainnet: [0xd982477216dadd4c258094b071b49d17b6271d66](https://app.splits.org/accounts/0xd982477216dadd4c258094b071b49d17b6271d66/?chainId=1)
  - Deprecated:
    - [0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1](https://app.0xsplits.xyz/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/)
    - [0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/)
- Arbitrum: [0xd982477216dadd4c258094b071b49d17b6271d66](https://app.splits.org/accounts/0xd982477216dadd4c258094b071b49d17b6271d66/?chainId=42161)
- Base: [0xd982477216dadd4c258094b071b49d17b6271d66](https://app.splits.org/accounts/0xd982477216dadd4c258094b071b49d17b6271d66/?chainId=8453)
- Optimism: [0xd982477216dadd4c258094b071b49d17b6271d66](https://app.splits.org/accounts/0xd982477216dadd4c258094b071b49d17b6271d66/?chainId=10)
  - Deprecated: [0xc20A515648ecC1f379fDF6ECE07552a9093F416E](https://app.splits.org/accounts/0xc20A515648ecC1f379fDF6ECE07552a9093F416E/?chainId=10)
  
### Moloch v3 DAO

The Guild uses [DAOhaus'](https://daohaus.club/) Moloch V3 contracts for onchain governance. The DAO includes all Guild members, with one person one vote, including vote delegation.

The DAO does not keep track of member weights, nor does it hold any funds. Currently, it is only used to ratify changes to the membership onchain. These changes are then processed by the Guild’s multisig (by updating the split contract).

**How it works:**
- Once a quarter, “Signal Proposals” are used to ratify changes to the membership onchain, which adjusts the DAO’s members in bulk (i.e. adding and removing members)
- All proposals need to be sponsored by a DAO member before the voting period starts
- The voting period lasts 5 days, with a 33% quorum required for proposals to pass
- Proposals that reach quorum have a 2-day grace period before they can be executed
- Official documentation: [https://moloch.daohaus.fun/](https://moloch.daohaus.fun/)

**Deployed DAOs:**

- Mainnet: [0x412a32dd71357bd12337f4408168df903f90cbd3](https://admin.daohaus.club/#/molochv3/0x1/0x412a32dd71357bd12337f4408168df903f90cbd3/members)

### Multisigs

The Guild has deployed 6/10 [Safe](https://safe.global/) multisig contracts to control the PTW and split contract, and to claim funds on mainnet and optimism (when donations cannot be sent to the vesting contact directly). Multisigs are also used to receive donations on most L2s, and then bridge those funds to mainnet.

The multisigs’ signers are not disclosed publicly, and are rotated regularly.

The aim is to reduce reliance on multisigs over time, to replace them with the DAO or other more trustless alternatives as the become available.

Safe official documentation: [https://docs.safe.global/](https://docs.safe.global/)

**Deployed Multisigs:**

- Mainnet
  - [PG Security Level 1 (PTW): 0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A](https://app.safe.global/balances?safe=eth:0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A)
  - [PG Security Level 2 (Split, ENS + foundation treasury reserves): 0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E](https://app.safe.global/balances?safe=eth:0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E)
  - [PG Security Level 2 (Donation claimer): 0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=eth:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)
  - [PG Director's 2/3 0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=eth:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
  - Deprecated:
    - [Pilot Donations: 0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4](https://app.safe.global/balances?safe=eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4)
    - [PGv2 Donations: 0x3250c2CEE20FA34D1c4F68eAA87E53512e95A62a](https://app.safe.global/balances?safe=eth:0x3250c2CEE20FA34D1c4F68eAA87E53512e95A62a)
    - [PGv2 Split Recipient 1: 0x69f4b27882eD6dc39E820acFc08C3d14f8e98a99](https://app.safe.global/balances?safe=eth:0x69f4b27882eD6dc39E820acFc08C3d14f8e98a99)
    - [PGv2 Split Recipient 2: 0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=eth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B)
- Arbitrum
  - [PG Security Level 1 (PTW): 0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A](https://app.safe.global/balances?safe=arb1:0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A)
  - [PG Security Level 2 (Split): 0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E](https://app.safe.global/balances?safe=arb1:0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E)
  - [PG Security Level 2 (Donation claimer): 0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=arb1:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)
  - [PG Director's 2/3 0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=arb1:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
  - Deprecated:
    - [Pilot Donations: 0x29031805D0f40E5dcDE21A236FB4a69e6e0423B2](https://app.safe.global/balances?safe=eth:0x29031805D0f40E5dcDE21A236FB4a69e6e0423B2)
    - [PGv2 Donations: 0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=eth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC)
- Base
  - [PG Security Level 1 (PTW): 0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A](https://app.safe.global/balances?safe=base:0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A)
  - [PG Security Level 2 (Split): 0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E](https://app.safe.global/balances?safe=base:0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E)
  - [PG Security Level 2 (Donation claimer): 0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=base:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)
  - [PG Director's 2/3 0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=base:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
  - Deprecated:
    - [Pilot Donations: 0x92B97eC7FE03b4e75Ebd54e4cbe3cd6950591353](https://app.safe.global/balances?safe=base:0x92B97eC7FE03b4e75Ebd54e4cbe3cd6950591353)
    - [PGv2 Donations: 0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=base:0x32e3C7fD24e175701A35c224f2238d18439C7dBC)
- Optimism
  - [PG Security Level 1 (PTW): 0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A](https://app.safe.global/balances?safe=oeth:0xaaaa99a4660f97Ce648FcaE65BEf2f70CF9d404A)
  - [PG Security Level 2 (Split): 0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E](https://app.safe.global/balances?safe=oeth:0xbbbbf78c3026E0F78dd69a131db8a144FfCc057E)
  - [PG Security Level 2 (Donation claimer): 0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=oeth:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)
  - [PG Director's 2/3 0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=oeth:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
  - Deprecated:
    - [Pilot Donations: 0x728D29E9E06cE5d846242692dF05467076c19849](https://app.safe.global/balances?safe=oeth:0x728D29E9E06cE5d846242692dF05467076c19849)
    - [PGv2 Donations: 0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=oeth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC)
    - [PGv2 (Split Controller + Split Recipient): 0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=oeth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B)
- Polygon
  - [PG Security Level 2 (Donation claimer): 0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=matic:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)
  - [PG Director's 2/3 0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=matic:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
  - Deprecated:
    - [Pilot Donations: 0x22BdFa4e038F71eEF5a7d2fc6daB383f8d54FD72](https://app.safe.global/balances?safe=matic:0x22BdFa4e038F71eEF5a7d2fc6daB383f8d54FD72)
    - [PGv2 Donations: 0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://app.safe.global/balances?safe=matic:0x32e3C7fD24e175701A35c224f2238d18439C7dBC)
- re.al
  - [PGv2 Donations: 0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120](https://safe.re.al/transactions/queue?safe=re-al%3A0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120)
- Scroll
  - [PG Security Level 2 (Donation claimer): 0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79](https://app.safe.global/balances?safe=scr:0xdddd576bAF106bAAe54bDE40BCac602bB4a7cf79)
  - [PG Director's 2/3 0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=scr:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
  - Deprecated:
    - [PGv2 Donations: 0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=scr:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B)
- Shape
  - [PGv2 Donations: 0x700fccD433E878F1AF9B64A433Cb2E09f5226CE8](https://safe.shape.network/balances?safe=shape:0x700fccD433E878F1AF9B64A433Cb2E09f5226CE8)
- Zora
  - [PGv2 Donations: 0x32e3C7fD24e175701A35c224f2238d18439C7dBC](https://safe.optimism.io/balances?safe=zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC)
  - Deprecated:
    - [Pilot Donations: 0xD8cd6E414B28085E186968ee25cBba78dc28D6aa](https://safe.optimism.io/balances?safe=zora:0xD8cd6E414B28085E186968ee25cBba78dc28D6aa)
- ZKsync
  - [PGv2 Donations: 0x9fb5F754f5222449F98b904a34494cB21AADFdf8](https://app.safe.global/balances?safe=zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8)
  - [PG Director's 2/3 0x42b6846549aC160a5c607193CC9d481ebb79edc7](https://app.safe.global/balances?safe=zksync:0x42b6846549aC160a5c607193CC9d481ebb79edc7)

## 3.2 Future Updates

Work is already underway on future iterations of the Guild’s smart contract architecture, to remove trusted components, manual input and offchain dependencies. The current modular architecture allows for these updates to be implemented in a gradual and secure way as and when ready. This documentation will also be updated at such time to reflect the changes being made.

If you would like to help shape the future of the Guild’s smart contract architecture, please reach out on our [Discord](https://discord.com/invite/HaUhXYsMyC)!
