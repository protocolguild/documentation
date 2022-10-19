# 3. Smart Contract Architecture

As part of the design process for the Protocol Guild, we researched a number of smart contracts and ultimately settled on the Split and Vesting contracts from **[0xSplits](https://www.0xsplits.xyz/)**. Learn more about that project [here](https://docs.0xsplits.xyz/).

## 3.1 0xSplits Contracts

Both the Vesting and Split contract can directly receive ETH and ERC-20 tokens. The Vesting contract gradually makes vested tokens transferable to the Split contract. The contract only accepts ETH and ERC-20s: DO NOT SEND NFTs (ERC-721s), they will not vest, cannot be split, and will be unrecoverable. Below are recommendations for which types of contributions to send to which contract.

### Pilot Vesting Contract
- Best for larger entities participating in the pilot.
- Funds sent here will vest over 1 year.
- **[0xSplits interface](https://app.0xsplits.xyz/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/)** / [Etherscan](https://etherscan.io/address/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9)
- Verify that the full address being sent to is 0xF29F…f1a9. In the future, there may be additional vesting contracts with different vesting schedules.
-Note that there are two steps: depositing and starting the stream. See the [documentation](https://docs.0xsplits.xyz/) for more information. 

### Split Contract
- Best for smaller donations outside of the pilot, or regular periodic contributions.
- Funds sent to this contract will not vest, instead they’ll be immediately available for withdrawal by the core contributors listed in the contract.
- **[0xSplits interface](https://app.0xsplits.xyz/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/)** / [Etherscan](https://etherscan.io/address/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1)
- Verify that the full address being sent to is 0x84af…8ea1. While the addresses and weights contained in the contract are mutable, the address of the contract itself will be used in perpetuity and will not change. Outside of the unlikely case that the Split management (multisig) gets compromised, it’s reasonable for sponsors to assume that this address will never change,  to facilitate  automatic or recurring contributions. If this changes, we will be sure to communicate this publicly.

The diagram below illustrates a set of 0xSplits contracts and how the Guild intends to operate them. 

<img width="1572" alt="0xsplits horizontal" src="https://user-images.githubusercontent.com/80278162/165815437-11646882-bac0-41bf-9709-e64880c96d82.png">

Out of all the existing mechanisms we explored, 0xSplits fulfills many of our original design objectives. 

- Accepts common asset types
  - To preserve the upside potential of donated assets, it's crucial that the split accepts ERC-20s in addition to ETH.
- Immutable distribution
  - No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period. The terms of the vesting length, past members and their weights cannot be modified once deployed. However, it should be noted that if the Guild’s multisig were to be compromised, any unvested amounts could be stolen.
- Non-custodial
  - No member should have even temporary discretion over vested or unvested funds, a designated address holds funds before a member manually sends them on to another component.
- Mutable membership
  - It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because the contributor set will change over time. If we can’t add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense.
- Includes vesting
  - In order to provide long-term incentives, donated assets should be subject to a vesting period. The vesting schedule for the pilot will be ~1 year, while subsequent vesting periods will likely last 4 years. This should be discussed and set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting terms deployed with the contract should not be modifiable by any party.
  - 0xSplits allows the Guild to deploy the initial contract with optionality over desired launch date, vesting time, etc.
  - The same vesting contract can be reused for many donations, either from the same org or different ones. The avoids unnecessary gas + time costs to sponsors. The vesting terms are the same for each donation.
- Multi-claims are straightforward
  - Members are able to claim their allocation from multiple eligibility windows and multiple assets in a single transaction.
- Members decide when to take custody/withdraw
  - Members should be able to decide when and how they withdraw funds from the mechanism, to suite the tax framework of the jurisdiction they reside within.
- Donations have finality
  - It is not possible to remove donated assets from the Vesting Contract by anyone other than the beneficiaries.

## 3.2 Guild Multisig

While it’s possible for the contract to be “set and forget,” we plan to fully leverage its mutable capabilities. For longer vesting schedules (e.g. 4 years), there will definitely be changes to the contributor set that will need to be accounted for.

We have deployed a 6/10 Gnosis Safe [here](https://gnosis-safe.io/app/eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4/balances) to take on a few key tasks that cannot be handled autonomously. This includes updating the membership list, and possibly deploying new vesting contracts (though this can also be done by unrelated EOAs with no reduction in trust).

Members and sponsors should be aware that if a malicious entity were to compromise enough signers, they could steal any assets that haven’t been released (4a in the diagram above) and distributed (4b) to  beneficiaries of the Split contract. For this reason we won’t disclose the name of signers and will regularly rotate them, expanding the set of signers when possible. Further, releases and distributions should occur on a regular cadence (quarterly) to limit the impact of the multisig being compromised.

Beyond that, we’re exploring options to make this process completely trustless in the future, similar to Moloch’s permissionless proposals.

See **4.13 Signers** for the obligations of multisig signers.
