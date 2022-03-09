# 3. Smart Contract Architecture

## 3.1 Astrodrop

The diagram below illustrates a set of contracts and how the Guild would operate them. There are a few options we are considering at this time which would make this possible.

<img width="1060" alt="Vesting Split Contract vertical" src="https://user-images.githubusercontent.com/80278162/157520702-755d54cb-4489-4253-8b94-b4f50f8bd95c.png">

Out of all the existing mechanisms we explored, this framework appears to fulfill many of our original design objectives we set out with. Let's go through them one by one and see how well it fits within our aspirational framework.

### 3.11 Accepts common asset types 

To preserve the upside potential of donated assets, it's crucial that the split accepts ERC20s in addition to ETH.

### 3.12 Immutable distribution

No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period. The terms of the vesting length, past members and their weights cannot be modified once deployed. However, it should be noted that if the PG multisig were to be compromised, operators could be used to steal the remainder of vest.

#### 3.13 Non-custodial

No member should have even temporary discretion over vested or unvested funds - eg. a designated address holds funds before a member manually sends them on to another component.

### 3.14 Mutable membership

It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because contributors will still join and leave protocol work. If we can't add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense.

### 3.15 Includes vesting

In order to promote long-term incentive alignment, donated assets should be subject to a standard vesting period with a 6 month cliff. We suggest 4 years, but this should be set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting rate deployed with the contract should not be modifiable by any party.

The mechanism we are considering achieves this particularly well:
- allow PG to deploy the initial contract with optionality over desired launch date, vesting time, etc
- The same contract can be reused for many donations, either from the same org or different ones. The avoids unecessary gas + time costs to donators. The vesting terms are the same for each donation.
- However, there is a tradeoff because it is a single contract. As the end of vesting approaches, a new contract must be deployed to continue the stream. This assumes a minimal level of ongoing coordination between members to decide when to deploy the next contract and kick off the next X years of streamed payments.

### 3.16 Multi-claims are straightforward

Members should be able to claim their allocation from multiple eligibility windows and multiple assets in a single transaction.

### 3.17 Members decide when to take custody/ withdraw

Members should be able to decide when and how they withdraw funds from the mechanism, eg. to suite the tax framework of the jurisdiction they reside within.

### 3.18 Donations have finality

It should not be possible to remove donated assets from the split contract by anyone other than the beneficiaries. This means when a protocol donates tokens at launch, they cannot withdraw when they change their mind, when there is significant asset appreciation, if the contributing address were to be compromised, or if the sought after influence over core development does not materialize.

## 3.2 PG Multisig

While it's possible for the contract to be "set and forget," we plan to fully leverage its mutable capabilities. For longer 4 year vests, there will definitely be changes in the contributor set that we want to account for.

We have deployed a Gnosis Safe [here](https://gnosis-safe.io/app/eth:0xF6CBDd6Ea6EC3C4359e33de0Ac823701Cc56C6c4/balances) to take on a few key tasks that cannot be handled autonomously. These include updating the membership list over the vest, and possibly deploying new vesting contracts (though this can also be done by unrelated EOAs with no reduction in trust).

See **4.13 Members as Signers** for the obligations expected of members as signers.
