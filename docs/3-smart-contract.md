# 3. Smart Contract Architecture

As part of the design process for the Protocol Guild, we researched a number of smart contracts and ultimately settled on the Split and Vesting contracts from **[0xSplits](https://www.0xsplits.xyz/)**. Learn more about the project in the [documentation](https://docs.0xsplits.xyz/).

## 3.1 0xSplits Contracts

Both the Vesting and Split contract can directly receive ETH and ERC20 tokens. The Vesting contract gradually makes vested tokens transferable to the Split contract. the contract only accepts ETH and ERC-20s: **DO NOT SEND NFTs** (ERC-721s), they will not vest, cannot be split, and will be unrecoverable. Below are recommendations for which types of contributions to send to which contract. 

### Pilot Vesting Contract
- best for larger entities participating in the Pilot
- funds sent here will vest for 1 year
- **[0xSplits interface](https://app.0xsplits.xyz/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/)** / [Etherscan](https://etherscan.io/address/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9)
- Verify that the full address being sent to is 0xF29F…f1a9. in the future, there may be additional vesting contracts with different durations setup for the next iteration of the project
- Note that there are two steps: depositing and starting the stream

### Split Contract
- best for smaller donations outside of the Pilot, or regular periodic contributions
- funds sent to this contract will not vest, and be immediately available for withdrawal by the core contributors listed in the contract
- **[0xSplits interface](https://app.0xsplits.xyz/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/)** / [Etherscan](https://etherscan.io/address/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1)
- Verify that the full address being sent to is 0x84af...8ea1. While the addresses and weights contained in the contract are mutable, the address of the contract itself will be used in perpetuity and will not change. Outside of the unlikely case that the Split management (multisig) gets compromised, it's reasonable for Sponsors to assume that this address being the canonical one far into the future if you're planning on automatic or recurring contributions. If this changes, we will be sure to communicate this publicly.

The diagram below illustrates a set of 0xSplits contracts and how the Guild intends to operate them. 

<img width="1572" alt="0xsplits horizontal" src="https://user-images.githubusercontent.com/80278162/165815437-11646882-bac0-41bf-9709-e64880c96d82.png">

Out of all the existing mechanisms we explored, 0xSplits fulfills many of our original design objectives. 

- Accepts common asset types
  - To preserve the upside potential of donated assets, it's crucial that the split accepts ERC20s in addition to ETH.
- Immutable distribution
  - No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period. The terms of the vesting length, past members and their weights cannot be modified once deployed. However, it should be noted that if the PG multisig were to be compromised, operators could be used to steal the remainder of vest.
- Non-custodial
  - No member should have even temporary discretion over vested or unvested funds - eg. a designated address holds funds before a member manually sends them on to another component.
- Mutable membership
  - It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because contributors will still join and leave protocol work. If we can't add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense.
- Includes vesting
  - In order to promote long-term incentive alignment, donated assets should be subject to a standard vesting period. The Pilot will be ~1 year, and subsequent vests will likely last for 4 years. This should be discussed and set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting terms deployed with the contract should not be modifiable by any party.
  - 0xSplits allows PG to deploy the initial contract with optionality over desired launch date, vesting time, etc
  - The same Vesting Contract can be reused for many donations, either from the same org or different ones. The avoids unecessary gas + time costs to Sponsors. The vesting terms are the same for each donation.
- Multi-claims are straightforward
  - Members are able to claim their allocation from multiple eligibility windows and multiple assets in a single transaction.
- Members decide when to take custody/ withdraw
  - Members should be able to decide when and how they withdraw funds from the mechanism, eg. to suite the tax framework of the jurisdiction they reside within.
- Donations have finality
  - It is not possible to remove donated assets from the Vesting Contract by anyone other than the beneficiaries.

## 3.2 PG Multisig

While it's possible for the contract to be "set and forget," we plan to fully leverage its mutable capabilities. For longer 4 year vests, there will definitely be changes in the contributor set that we want to account for.

We have deployed a 6/10 Gnosis Safe [here](https://gnosis-safe.io/app/eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4/balances) to take on a few key tasks that cannot be handled autonomously. These include updating the membership list over the vest, and possibly deploying new vesting contracts (though this can also be done by unrelated EOAs with no reduction in trust).

Members and sponsors should be aware that if a malicious entity were to compromise enough signers, they could steal any assets that haven't been released (4a in the diagram above) and distributed (4b) to the beneficiary of the Split contract. For this reason we don't disclose the name of signers and will regularly rotate them, expanding the set of signers when possible. Further, release and distribute should probably happen on a regular cadence (quarterly) to limit the impact of a worst case scenario with the Multisig signers.

Beyond that, we're exploring options to make this completely trustless in the future, similar to Moloch's permissionless proposals.

See **4.13 Members as Signers** for the obligations expected of members as signers.
