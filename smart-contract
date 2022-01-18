## 5. Smart Contract Architecture

### 5.1 Astrodrop

After exploring many options, we've settled on Astrodrop (AD), a new vesting smart contract. The graphic below should give a good intro to how the Protocol Guild would operate an Astrodrop Shrine.

![](https://i.imgur.com/PRXX9oe.png)

Out of all the mechanisms we explored, this product fulfills the majority of our original design objectives. Let's go through them one by one and see how well it fits within our aspirational framework.

#### 5.11 Accepts common asset types 

> To preserve the upside potential of donated assets, it's crucial that the split accepts ERC20s in addition to ETH.

Yes, AD can accept both. Unclear on ERC-721s or other NFT token types.

#### 5.12 Immutable distribution

> No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period.

Yes - the terms of the vesting length, past members and their weights cannot be modified once deployed. However, it should be noted that if the PG multisig were to be compromised, it could be used to steal the remainder of vest.

#### 5.13 Non-custodial

> No member should have even temporary discretion over vested or unvested funds - eg. a designated address holds funds before a member manually sends them on to another component.

Yes - at no point does any individual hold donated assets in an EOA.

#### 5.14 Mutable membership

> It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because contributors will still join and leave protocol work. If we can't add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense.

Yes - members can be added, removed, reweighted as needed (see diagram above).

#### 5.15 Includes vesting

> In order to promote long-term incentive alignment, donated assets should be subject to a standard vesting period with no cliff. We suggest 4 years, but this should be mutual set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting rate deployed with the contract should not be modifiable by any party.

AD achieves these objectives particularly well when compared to other vesting solutions.

- allows PG to deploy the initial contract with optionality over desired launch date, vesting time, etc
- The same contract can be reused for many donations, either from the same org or different ones. The avoids unecessary gas + time costs to donators. The vesting terms are the same for each donation.
- However, there is a tradeoff because it is a single contract. As the end of vesting approaches, a new contract must be deployed to continue the stream. This assumes a minimal level of ongoing coordination between members to decide when to deploy the next Shrine contract and kick off the next X years of streamed payments.

The only thing that a Moloch contract can do that the AD cannot is programmatically drio

#### 5.16 Multi-claims are straightforward

> Members should be able to claim their allocation from multiple eligibility windows and multiple assets in a single transaction.

Yes - AD allows beneficiaries to claim their share of all eligible windows with a single transaction.

#### 5.17 Membership and Assets should be "Ragekickable"

> Once a member leaves contributions the continuing membership should be able to forcibly eject that member and their allocated shares. This may be necessary in the case of:
>
> - a long enough period of inactivity beyond a reasonable break
> - taking a new job
> - no longer meeting the code of conduct agreement set by members

This feature no longer applies. This was a specific consideration in case we used a Moloch contract. Any MT with weights and addresses is deployed in the past cannot be modified.

#### 5.18 Members decide when to take custody/ withdraw

> Members should be able to decide when and how they withdraw funds from the mechanism, eg. to suite the tax framework of the jurisdiction they reside within. 

Yes - members can claim their allocation at any point during or after the vesting period.

#### 5.19 Donations have finality

> It should not be possible to remove donated assets from the split contract by anyone other than the beneficiaries. This means when a protocol donates tokens at launch, they cannot withdraw when they change their mind, when there is significant asset appreciation, or if the contributing address were to be compromised.

Yes - donations to an AD Shrine cannot be revoked or paused.

### 5.2 PG Multisig

While it's possible for the Astrdrop contract to be "set and forget," we plan to fully leverage its mutable capabilities. There should be a multisig, eg. a Gnosis Safe, deployed to take on a few key tasks that the Shine cannot handle autonomously. These include:

- Deploying Shrines to accept donations
- Updating the membership list

See [4.13 Members as Signers](https://hackmd.io/ANe-MBCgTFSN6qG7drn3zg?both#413-Members-as-Signers) for the obligations expected of members regarding this component. 

## 6. Guide to Operation

### 6.1  Members

#### 6.11 Membership requirements

Members should be committed to Ethereum and its ethos of decentralization. The contributions of qualifying individuals qualifying individuals should be:

- fully open source, ie. available for forking, modification and redistribution
- continuous for at least 6 months ahead of inclusion
- use permissive licenses
- part of the protocol, not built on top of it (a specific client implementation vs. an application)
- a benefit to the broader Ethereum community
- dedicated to permissionless, open access to Ethereum

Occasionally, these individuals may work on a team which has a token, has VC backing or gives equity. These are guidelines, not hard rules. Members should expect this ruleset to change over time, to get more explicit in some places and more permissive in others.

#### 6.12 Weighting

This mechanism will be the most antifragile with the simplest weighting methods. This limits the time spent deciding appropriate categories as well as the time spent weighting contributors. Additionally, this should limit cases of ambiguity gaming that might come up in complicated weighting schemes. Based on member feedback, we've has settled on two rules:

- historic contributions are considered in weightings
- historic contributors get "diluted" as newcomers come in
- anyone who stops contributing is removed from the split via periodic reviews
- continuing contributors get additional weight per period they are active. This means historic contributors don't maintain their split weighting if they leave protocol development

In the typical operation of the split, this would simply be `number of eligible months`, including past contributions before the split existed.

In future versions, it may be worth considering another multiplier from members which would come from how effective they view each of their peers. This could be accomplished through a pairwise ranking system that outputs the multiplier. 

### 6.2 Donating Entities

### 6.3 Community
