## 3. Smart Contract Architecture

### 3.1 Astrodrop

After exploring many options, we've settled on Astrodrop (AD), a new vesting smart contract. The graphic below should give a good intro to how the Protocol Guild would operate an Astrodrop Shrine.

<img width="1600" alt="Vesting Split Contract" src="https://user-images.githubusercontent.com/80278162/150164743-da3dee2d-9068-4d96-895e-9f2956d48f36.png">

Out of all the mechanisms we explored, this product fulfills the majority of our original design objectives. Let's go through them one by one and see how well it fits within our aspirational framework.

#### 3.11 Accepts common asset types 

> "To preserve the upside potential of donated assets, it's crucial that the split accepts ERC20s in addition to ETH."

Yes, AD can accept both. Unclear on ERC-721s or other NFT token types.

#### 3.12 Immutable distribution

> "No individual can redirect assets outside of what is dictated by the split membership and its vesting parameters for each period."

Yes - the terms of the vesting length, past members and their weights cannot be modified once deployed. However, it should be noted that if the PG multisig were to be compromised, it could be used to steal the remainder of vest.

#### 3.13 Non-custodial

> "No member should have even temporary discretion over vested or unvested funds - eg. a designated address holds funds before a member manually sends them on to another component."

Yes - at no point does any individual hold donated assets in an EOA.

#### 3.14 Mutable membership

> "It should be possible to add and remove beneficiaries from the split. Managing additions and removals would be the responsibility of the membership. Updates are important because contributors will still join and leave protocol work. If we can't add newcomers to this list, then the recurring cost to redeploy the contract and redirect the split would become an unnecessary expense."

Yes - members can be added, removed, reweighted as needed (see diagram above).

#### 3.15 Includes vesting

> "In order to promote long-term incentive alignment, donated assets should be subject to a standard vesting period with no cliff. We suggest 4 years, but this should be mutual set by the split beneficiaries, with consideration for the expectations of donating entities. The vesting rate deployed with the contract should not be modifiable by any party."

AD achieves these objectives particularly well when compared to other vesting solutions.

- allows PG to deploy the initial contract with optionality over desired launch date, vesting time, etc
- The same contract can be reused for many donations, either from the same org or different ones. The avoids unecessary gas + time costs to donators. The vesting terms are the same for each donation.
- However, there is a tradeoff because it is a single contract. As the end of vesting approaches, a new contract must be deployed to continue the stream. This assumes a minimal level of ongoing coordination between members to decide when to deploy the next Shrine contract and kick off the next X years of streamed payments.

The only thing that a Moloch contract can do that the AD cannot is programmatically drip shares to members to increase their weight.

#### 3.16 Multi-claims are straightforward

> "Members should be able to claim their allocation from multiple eligibility windows and multiple assets in a single transaction."

Yes - AD allows beneficiaries to claim their share of all eligible windows with a single transaction.

#### 3.17 Members decide when to take custody/ withdraw

> "Members should be able to decide when and how they withdraw funds from the mechanism, eg. to suite the tax framework of the jurisdiction they reside within."

Yes - members can claim their allocation at any point during or after the vesting period.

#### 3.18 Donations have finality

> "It should not be possible to remove donated assets from the split contract by anyone other than the beneficiaries. This means when a protocol donates tokens at launch, they cannot withdraw when they change their mind, when there is significant asset appreciation, or if the contributing address were to be compromised."

Yes - donations to an AD Shrine cannot be revoked or paused.

### 3.2 PG Multisig

While it's possible for the Astrodrop contract to be "set and forget," we plan to fully leverage its mutable capabilities. There should be a multisig, eg. a Gnosis Safe, deployed to take on a few key tasks that the Shine cannot handle autonomously. These include:

- Deploying new Shrines to accept continuous sponsorships
- Updating the membership list

See **4.13 Members as Signers** for the obligations expected of members regarding this component. 
