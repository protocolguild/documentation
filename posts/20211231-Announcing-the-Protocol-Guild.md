---
title: 'Announcing the Protocol Guild'
excerpt: 'Rough outline for an experimental new funding tool which provides recruitment, retention, and reward mechanisms of core protocol contributors'
coverImage: '/emojicover.png'
date: '2021-12-31'
---
*Reposted with permission by Trent Van Epps, original [here](https://stateful.mirror.xyz/mEDvFXGCKdDhR-N320KRtsq60Y2OPk8rHcHBCFVryXY)*

*Rough outline for an experimental new funding tool which provides recruitment, retention, and reward mechanisms of core protocol contributors - read the full proposal [here](https://protocol-guild.readthedocs.io/en/latest/index.html).*

Over the past year, Stateful Works has pushed the boundary on how to simultaneously accrue cultural and financial capital to protocol maintainers:

* [Beacon Book](https://stateful.mirror.xyz/Y1ED9RorG9OvEUXD8NBmXgYhSVhjj8H537-I2SZJkYA): a multimedia project about the launch of the Beacon Chain from the perspective of its contributors, including NFTs, the digital text, and a physical book. Has raised ~110 ETH to date. Started in Dec 2020, launched July 2021
* [1559 NFT Series](https://stateful.mirror.xyz/rsUhYxXARr7j2iDjqJeelY7nc6CN_Y-MilVDP1S5voA): an NFT with 1559 editions, and a 1/1 which was auctioned off. Raised ~278 ETH directly to the contributors for EIP-1559. Started in May 2020, launched in July.

Both of these projects have three important characteristics:

* Conditioned on past efforts: "retroactive Public Goods funding," to use a term popularized through Optimism's [recent experiment](https://medium.com/ethereum-optimism/retropgf-experiment-1-1-million-dollars-for-public-goods-f7e455cbdca).
* Immutable Membership: Both projects also used [Splits](https://dev.mirror.xyz/mQ03-JXlfdoBnRrZisC5X3kM9nBkOILlHwxbdq382Gw), a Mirror product which lets contributors trustlessly route value according to set weightings. Given the work had already been completed, it made sense that the membership wouldn't need to be updated. 

Everyone's past, present, and future contributions to each respective project was roughly known and wouldn't be changing in the future.
Limited to ETH: the split contracts can only accept and split ETH

While these were both successful in their own rights, we think there's more to do in this space. Over the past two months, we've been sketching out our next project with the input of core contributors. We're calling it the **Protocol Guild**:

>This proposal describes a new public goods funding mechanism: a split contract which distributes donated application tokens over a vesting period to a self-curated list of Ethereum protocol contributors.
The primary goals: to provide autonomous tools for recruitment, retention, and reward to the protocol and its maintainers. If desired, individuals can forward their allocation to a charity.

The [full proposal](https://protocol-guild.readthedocs.io/en/latest/index.html) contains extensive discussion on existing funding mechanisms, motivations, roles and obligations, design requirements, anticipated concerns, and a few case studies. We'd love to heard your feedback in the Stateful Works [discord](https://discord.com/invite/t8zSZCvf3y).
In direct contrast to the previous projects mentioned above, this mechanism should have:

Present and future orientations: 
* donated assets vest over a certain time to incent existing members to maintain their contributions and prospective ones to consider joining sooner
* Mutable membership: given the roster of contributors may change in the future, it makes sense that the contract members should need to be updatable.
* Flexible asset support: as discussed in the full proposal, this is a necessary features in order to accept protocol/app tokens and tip the incentive balance back towards core protocol maintenance.

While we've made significant progress over the past two months since the project's inception, there's still much to do. This includes onboarding more members, refining the norms and expectations for members, reaching out to more DAOs, settling on the proper contract architecture - we are particularly interested in input on this last one, please reach out!

Ethereum has a well deserved reputation for public goods funding experimentation - we can't wait to add our name to this list in 2022.

Looking forward to sharing more throughout Q1!

⟠ Stateful Works
