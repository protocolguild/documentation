# 10. Donate

## 10.1 Individual Donations

The Protocol Guild’s funding mechanism was designed to remove all friction associated with supporting Ethereum’s core protocol development, by providing a single onchain address which vests funds to all active core protocol contributors over time. Anyone can donate ETH and ERC-20 tokens to the following address: 

<b>theprotocolguild.eth
  
0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9</b>

![QR](https://user-images.githubusercontent.com/76262359/216310584-94b261a6-d9f5-4da8-bae0-8366c6b6e066.png)

Funds sent to the above address will be held in the Guild’s [vesting contract](https://app.0xsplits.xyz/accounts/0xF29Ff96aaEa6C9A1fBa851f74737f3c069d4f1a9/), which vests funds over 1 year (during the pilot), before being moved to the Guild’s [split contract](https://app.0xsplits.xyz/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/), for distribution to members. You can read more about the Protocol Guild’s smart contract architecture [here](https://protocol-guild.readthedocs.io/en/latest/3-smart-contract.html#smart-contract-architecture). 

## 10.2 Donate a Portion of Staking Rewards

The Protocol Guild joined EthStaker for a community call in December, to talk about how the Guild has created a mechanism which enables Ethereum's ecosystem and community to help fund core protocol development in an efficient and sustainable way.

Below we will detail how stakers can take part in this public goods funding experiment, by using onchain smart contracts to trustlessly route a portion of staking rewards (specifically execution rewards) to the Guild.

This guide will describe how stakers can use 0xSplits to create a so-called “Split contract”, which is “an open-source, audited, non-upgradeable set of contracts that efficiently split onchain income”. The address of this Split contract will then be used as the “fee recipient” for receiving the staker’s execution rewards, to split rewards between the staker and the Guild. The percent allocation of the split will be determined by the staker, who can also modify it at any time. 0xSplits has been a crucial component of the Guild’s smart contract architecture, and has been used to manage $10m of funds donated to Ethereum’s core protocol contributors.

There are three steps to this guide, which shouldn't take more than 30 mins to complete:
