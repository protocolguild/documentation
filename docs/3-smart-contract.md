# 3. Smart Contract Architecture

## 3.1 0xSplits

- [Documentation](https://docs.0xsplits.xyz/)
- Protocol Guild Vesting Contract - Link to be added
- Review from SigmaPrime - Link to be added

The diagram below illustrates a set of 0xSplits contracts and how the Guild would operate them. 

<img width="1678" alt="0xsplits horizontal" src="https://user-images.githubusercontent.com/80278162/165566934-573410ee-2599-4917-95b9-c55ed7d76e20.png">

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

We have deployed a Gnosis Safe [here](https://gnosis-safe.io/app/eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4/balances) to take on a few key tasks that cannot be handled autonomously. These include updating the membership list over the vest, and possibly deploying new vesting contracts (though this can also be done by unrelated EOAs with no reduction in trust).

See **4.13 Members as Signers** for the obligations expected of members as signers.
