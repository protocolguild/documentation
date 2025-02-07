# 6. Entity & Operations

## 6.1 Legal Structure

Protocol Guild incorporated a Cayman Islands-based legal entity in 2024, to help scale fundraising efforts.

## 6.2 Finances

Protocol Guild's legal entity currently receives 5% (as of Oct 4, 2024 - [tx link](https://etherscan.io/tx/0x8c1836d568fa4e5eca78d8a6e6880b954fd3377e7b538e305fa5d77a7f6c4071)) of split proceeds to Safe multisigs:

- Mainnet
    - [0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=eth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B) (current address)
    - [0x69f4b27882eD6dc39E820acFc08C3d14f8e98a99](https://app.safe.global/balances?safe=eth:0x69f4b27882eD6dc39E820acFc08C3d14f8e98a99) (previous address)
- Optimism
    - [0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=oeth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B)

The entity converts all tokens on a monthly basis to maintain a stablecoin reserve. This covers:
- $200k in reserve for 2 years of fixed + variable costs incurred to operate the entity
- $100k in reserve for potential claims against the foundation 
- Compensation for independent operations contributors
    - $12.5k/month to support cheeky-gorilla's contributions
    - $6k/month to support Peter Vechiarrelli's contributions

Generally, the entity should receive sufficient funding to cover the above, but not accumulate beyond that. These amounts are set by the membership, as noted in the [Governance](https://protocol-guild.readthedocs.io/en/latest/02-membership.html#governance) subsection of the docs.

## 6.3 Yearly Reports

### 2024
- [1-Page Summary (PDF)](https://cryptpad.fr/file/#/2/file/ffN262dpBNwBeaahgdF6t6cp/)
- [Full Report (PDF)](https://cryptpad.fr/file/#/2/file/5PVpa9AIDynT580pIexMKnMz/)

#### TLDR

- Ethereum soared in 2024! Protocol Guild members successfully delivered the Dencun upgrade in March 2024, a game-changer for Ethereum's scaling strategy, with L2 gas fees reduced 10-100x
- Funding grew to $176mm (valued at time of donation) thanks to 476 generous donors, with $55m left vesting as of Feb. 4
- As of Feb. 4th, members can expect a median vesting amount of $77k over the next 12 months, a significant jump from $34k last year
- Protocol Guild’s membership of Ethereum’s core protocol maintainers grew 16% YoY to 187 individuals, welcoming new contributors from Reth and Grandine
- Introducing the Protocol Guild Pledge! Ethereum projects have started committing 1% of their native tokens to support Ethereum’s core protocol work, including Eigenlayer, Taiko, Ether.Fi, Puffer and more
- Protocol Guild adopted a 4-year vesting contract for all future donations, marking a new era of long-term sustainability

### Introduction

The Protocol Guild is a funding collective established in May 2022 to fund Ethereum’s core protocol maintainers. Our mission is to create a sustainable and decentralized funding stream for essential core protocol work, backed by the projects built on Ethereum.

This report highlights our achievements in 2024, showcasing both the progress of Protocol Guild as a funding mechanism, as well as the significant contributions to Ethereum made by our members.

The last report released by Protocol Guild was our [Pilot Retrospective](https://protocol-guild.readthedocs.io/en/latest/07-resources.html#pilot-retrospective) in April 2024. Moving forward, we intend to deliver detailed annual reports like this one to promote transparency and accountability, ensuring that our donors and the wider Ethereum community are well-informed about our progress and initiatives.

### Donor Acknowledgement

Before we dive into the report, we want to take a moment to express our heartfelt gratitude to everyone who has donated to Protocol Guild over the past three years. Our progress is a true reflection of the unwavering support from Ethereum's ecosystem and community.

We would also like to extend a special acknowledgment to the projects that have [committed](https://dune.com/queries/3428807) to the Protocol Guild Pledge by dedicating 1% of their token supply to our cause (in chronological order):

1.  [Ether.Fi Foundation](http://ether.fi)
2.  [PWN DAO](https://www.ether.fi/)
3.  [Taiko Labs](https://taiko.xyz/)
4.  [Credit Guild](https://www.voltprotocol.io/)
5.  [Member](https://member.clinic/)
6.  [EthStorage](https://ethstorage.io/)
7.  [Sendit](https://sendit.city/)
8.  [Penjamin Blinkerton](https://penjamin.cloud/)
9.  [re.al](https://www.re.al/)
10. [Puffer](https://www.puffer.fi/)
11. [Aligned](https://alignedlayer.com/)
12. [EigenLayer](https://www.eigenlayer.xyz/)

These projects have set a remarkable precedent of supporting the foundational public good that is Ethereum's core protocol development, but we still have work to do in establishing this norm! We invite any project building on Ethereum to join us in creating a sustainable funding source for this vital work. Thank you once again for being an integral part of this mission.

### Core Protocol Development Updates

The stakes for Ethereum’s core protocol development have never been higher, yet the output continues to accelerate despite tackling some of the most challenging issues in the space - scaling a blockchain without compromising on decentralization. Maintaining a stable contributor base is essential to sustain this momentum into 2025 and beyond, enabling Ethereum to effectively execute its core development roadmap and fulfill its potential as the world computer.

It is important to note that not all core protocol maintainers are part of Protocol Guild; Ethereum stewardship ultimately comes from a broader community of teams, projects, and individuals who contribute to the ecosystem's growth and resilience. Nevertheless, we believe that Protocol Guild represents a reasonably accurate snapshot of Ethereum’s core maintainer cohort, and as such, we feel it is appropriate to summarize those achievements in 2024, as well as look to the future.

#### Scaling Ethereum through Blobs

Ethereum's rollup-centric roadmap saw huge payoffs in 2024. The [Dencun upgrade](https://blog.ethereum.org/2024/02/27/dencun-mainnet-announcement) launched in March 2024, reducing L2 gas fees by 10-100x. This was achieved through the introduction of ephemeral data blobs (EIP-4844 or "proto-danksharding"), which can be utilized for data availability instead of calldata. Since the Dencun upgrade, we have seen onchain costs plummet (over [$380mm blob fee savings](https://dune.com/queries/3583807/6035165) to date), alongside a significant uptick in onchain activity. Rollups are Ethereum, and users on rollups are Ethereum users, so this is very encouraging progress!

<img width="1182" alt="image" src="https://github.com/user-attachments/assets/aaafeddc-2387-4bce-8ec3-cca62424dc4b" />
https://l2beat.com/scaling/costs
<img width="1182" alt="image" src="https://github.com/user-attachments/assets/955d1af5-d320-41d1-a956-4ac7c6d7b09b" />
https://l2beat.com/scaling/activity

#### Pectra

Even before the successful implementation of Dencun, work was already in progress on Pectra, the next Ethereum upgrade. [Pectra](https://eips.ethereum.org/EIPS/eip-7600) is set to be the largest upgrade in terms of EIP inclusions, and includes exciting features for stakers, node operators, end-users, smart contract developers, wallets, rollups, and ZK systems. Users will benefit from [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702), which will allow wallet and application developers to significantly enhance the way people interact with Ethereum, by granting smart contract-like capabilities to every single Ethereum address. At the same time, rollups will benefit from a [twofold increase](https://eips.ethereum.org/EIPS/eip-7691) in Ethereum's blob capacity, helping them to achieve further scale. Stakers will be able to merge existing validators together (up to 2048 ETH per validator), also enabling the compounding of their stake. For a full overview of Pectra, see [this Mirror post](https://tim.mirror.xyz/emiQJfRCb5sdnY018t-CeFDIye_Ehn4mieXI6kn5aXA).

#### Fusaka

Work continues in parallel for the upgrade *after* Pectra, Fusaka. The two headline features of this upgrade are PeerDAS and EOF. PeerDAS will lower bandwidth requirements and further reduce transaction costs for users, while [EOF](https://evmobjectformat.org/) will significantly enhance the Ethereum developer experience by streamlining smart contract development and deployment.

You can read more about Ethereum's core protocol development in 2024 and 2025 in [Tim Beiko's Mirror post](https://tim.mirror.xyz/CuRtFjkujKBqVsdvCGvthiPIYaZyzNc5sWIaExw2UpE). 

### Membership

At the start of 2024, Protocol Guild had 161 members, concluding the year with [187](https://protocol-guild.readthedocs.io/en/latest/02-membership.html#active-members). This increase resulted from the addition of 41 new members and the removal of 15. Of the 187 members, 154 (83%) were engaged in Ethereum's core protocol work on a full-time basis, while the rest (15 members or 17%) contributed on a part-time basis.
<img width="1475" alt="image" src="https://github.com/user-attachments/assets/e916aeb2-6dbf-408c-8f47-534ce7e95208" />
https://dune.com/queries/2665887/4430654?sidebar=none

As during the pilot, [self-curation](https://protocol-guild.readthedocs.io/en/latest/02-membership.html#self-curation) was at the heart of any membership changes, i.e. Protocol Guild members themselves coming to consensus on who to add or remove from the membership. To minimize governance overhead, self-curation was split into first curating a list of [eligible teams or projects](https://protocol-guild.readthedocs.io/en/latest/01-eligibility.html#eligibility), after which individuals from those teams / projects can be admitted.

In 2024, two new projects were added to Protocol Guild; [Reth](https://github.com/protocolguild/documentation/pull/135) and [Grandine](https://github.com/protocolguild/documentation/pull/246). The introduction of Grandine came after they [open-sourced](https://medium.com/@grandine/grandine-is-open-sourced-b1815cf0ae39) their client, prompting a [refinement](https://github.com/protocolguild/documentation/pull/231) of our eligibility criteria to clarify the "open source" requirement.

Another update related to curation was the addition of "Primary Contributions" in our documentation's [membership table](https://protocol-guild.readthedocs.io/en/latest/02-membership.html). This [change](https://github.com/protocolguild/documentation/pull/173) aims to provide more insightful information by showcasing contributions to e.g. GitHub repositories, rather than just team or organization names. Although still a work in progress, the goal is for the "Primary Contributions" column to eventually replace the "Team" column. In 2025, we plan to refine and potentially automate the updating of this new column to enhance accountability and streamline self-curation.

Additionally, we engaged in extensive discussions regarding the potential removal of partial weight (i.e. part-time) contributors, who currently make up 17% of our membership. The main arguments for this consideration include evidence suggesting that part-time contributors are more likely to exit core protocol work, and that having multiple weight tiers increases the self-curation overhead. Given that Protocol Guild's membership has consistently grown, this presents a potential concern for long-term sustainability. However, some members argued that the flexibility of part-time work is beneficial for Ethereum in the long run, as it allows contributors to gain experience and insights from other projects and ecosystems - in addition to avoiding burnout.

While no definitive decision was made regarding this issue in 2024, it is likely to remain a topic of discussion in 2025. Most members agreed that implementing some form of accountability mechanisms would be prudent, even though this could increase governance overhead.

Lastly, in October, the membership agreed to provide a monthly retainer of USDC 12.5k to support one of its operations contributors. This decision was made because the time-weighting allocation mechanism was not provide sufficient funding to support this individual's ongoing work, so the USDC retainer was introduced to enable their continued contributions.

Fundraising
===========

While 2022 marked the pilot phase of Protocol Guild (from May '22 to May '23) and 2023 was dedicated to establishing a legal framework and smart contract architecture to facilitate scaling beyond the pilot, 2024 was the first year where fundraising became our continuous top priority. And what a remarkable year it was!

Our fundraising efforts kicked off in January with Tim Beiko's [announcement](https://x.com/TimBeiko/status/1752458526407139680) of the **Protocol Guild Pledge**. In his own words:

_"Introducing the Protocol Guild Pledge: with a commitment from Ethereum ecosystem projects to donate 1% of their native tokens to @ProtocolGuild, I believe we can     align incentives between L1 R&D work and the rest of the crypto ecosystem ⛓️🛡️_

_My quantitative definition of Protocol Guild's goal is to "make contributing to     Ethereum L1 R&D economically rational on a risk-adjusted basis, while avoiding         capture". The Protocol Guild Pledge is what I believe is sufficient to get us there._

_Core devs don't generally get token upside for their work. By moving a tiny bit out on the risk curve, they can dramatically shift their rewards. The PGP aims to close that gap, and bring the risk/reward levels of L1 work in line with the ecosystem."_

The Protocol Guid Pledge - and in fact, Protocol Guild itself - was inspired by a [Tweet](https://x.com/dannyryan/status/1454065104819916803) from Danny Ryan in late 2021 (see below). However, it didn't make sense to start soliciting projects for 1% of their token supply until we had completed our pilot and hardened the mechanism. With Tim's announcement, we were ready to start doing so!

<img width="732" alt="image" src="https://github.com/user-attachments/assets/a6431a76-f629-4a24-90c0-00c061ec1df0" />

We quickly saw tremendous buy-in, with many different projects across the ecosystem taking the Protocol Guild Pledge. Within just one month of the announcement, we received five pledges from [Ether.fi](https://x.com/ether_fi/status/1752376059394408458), [PWN DAO](https://x.com/pwndao/status/1755597590979367163), [Taiko Labs](https://x.com/taikoxyz/status/1755609928167981330), [Credit Guild](https://x.com/CreditGuild/status/1756408591404384522) and [Member](https://x.com/gamiwtf/status/1757592643884957852). By the end of the year, we added seven more pledges from [EthStorage](https://x.com/EthStorage/status/1765907076029804886), [Sendit](https://x.com/gamiwtf/status/1773901096488153562), [Penjamin Blinkerton](https://x.com/PenCoinBase/status/1790563158181957823), [Re.al](https://x.com/real_rwa/status/1817939526951793113), [Puffer](https://x.com/puffer_finance/status/1844234772274729416), [Aligned](https://x.com/AlignedFndn/status/1867283345861743002) and [EigenLayer](https://x.com/eigenfoundation/status/1867283577093902802).

Incredibly, the donations from three projects alone - [Ether.fi](https://etherscan.io/tx/0xf15494110be78893cb5c60f4c7fc83372f15a1f602ba513ab3cf7e259516c0a4), [Taiko](https://etherscan.io/tx/0x171e22e62d3a8a176de0d0ad60284b9baa56895b662e51a60fc2153bb797709a) and [EigenLayer](https://etherscan.io/tx/0x202bd787112a227293e55931c4f99c1e20791782d8609ecfbbcbc75393884e8f) - totalled almost $150mm (valued at time of donation). While this sets a high benchmark, we believe that the monetary value of pledges is less critical than establishing the norm itself. Some projects that take the pledge will succeed, while others may not, but the goal is to expose Ethereum's core maintainers to the value being generated within the ecosystem. This can only happen if we create a norm where all projects building on Ethereum donate 1% of their token supply to Protocol Guild. Without this ecosystem-wide buy-in, Protocol Guild may struggle to scale its fundraising efforts, relying solely on proactive fundraising from a small number of operations contributors. We are incredibly grateful to all our pledgeoors for their leadership in establishing these norms in 2024 and look forward to onboarding new ones in 2025! If you are a project that is considering taking the pledge, please reach out to us on [Twitter](https://x.com/ProtocolGuild) or [Discord](https://discord.com/invite/HaUhXYsMyC), so we can do our part in celebrating your pledge.
<img width="1472" alt="Group 841" src="https://github.com/user-attachments/assets/e33a6047-c90c-4dfb-9f60-32682a828dea" />
https://dune.com/queries/3428807?sidebar=none

Of course not all projects have tokens to pledge! We were once again amazed by the creativity of projects contributing a portion of their **NFT** or **POAP** sales to Protocol Guild, including [Moving Mondrians](https://x.com/davidryan59/status/1744248815551709224), [Uni Zorb](https://zora.co/collect/zora:0x7e8f28a51471a9a434505ac58ded39c422e73028/1), [Delivery at Dawn](https://stateful.mirror.xyz/DjDK5IqoZOtel8t2pn_DE0WLQEdNXLIEMuD0bNZKR8M), [ETH Investors Club magazine](https://x.com/EICquarterly/status/1773744620054462493), [Bitwise TV spot](https://x.com/BitwiseInvest/status/1803798912114770091), [Ethereum Stories](https://x.com/EthereumFilm/status/1815779118262137224), [Goodbye for Now Danny](https://x.com/superphiz/status/1839023705545957412), [Collectr November Edition](https://x.com/collectrs/status/1849875289775501727) and [$4k](https://x.com/superphiz/status/1865079286283059311).

We also received some unexpected pledges from **tradfi**, with [Coinfund](https://finance.yahoo.com/news/coinfund-announces-pledge-protocol-guild-165000327.html) pledging 1% of net income earned from their CESR financial product, while [Bitwise](https://x.com/BitwiseInvest/status/1815486261337182504) announced that they would donate 10% of profits from the Bitwise Ethereum ETF (split between Protocol Guild and PBS Foundation). As Ethereum continues its journey toward becoming the world computer, it will inevitably intersect with various industries beyond our current ecosystem. It's truly inspiring to see these companies acknowledge this potential and support our mission at such an early stage.

2024 was also a big year for us in terms of allocations from **public goods funding mechanisms**. We received the second-largest $OP allocation in [Optimism's RPGF 5](https://x.com/Optimism/status/1848724879836856351), and we secured the [top allocations](https://dune.com/queries/4577934?sidebar=none) in all 4 Octant rounds (Epoch [2](https://twitter.com/OctantApp/status/1752744706671575343), [3](https://blog.octant.build/octant-epoch-3-projects/), [4](https://x.com/OctantApp/status/1818006254893285635) and [5](https://x.com/ProtocolGuild/status/1851131962192490675)). We are very thankful to both these projects for continuously dedicating themselves (and their treasuries!) to funding our ecosystem's vital public goods.

Finally, we recognize that the Protocol Guild Pledge may not be suitable for all projects, and we still want to acknowledge donations from those that didn't meet the 1% threshold. Shout out to [LayerZero](https://x.com/LayerZero_Fndn/status/1803742303204323494), [ZKsync](https://explorer.zksync.io/address/0xb294F411cB52c7C6B6c0B0b61DBDf398a8b0725d) and [Scroll](https://scrollscan.com/address/0x3b04F9398Ce7aBa9e34a789dC5632002A3Dc9953) for their sizable allocations during their token genesis event! Every donation helps reinforce the norm of funding essential dependencies within the ecosystem.

All told, Protocol Guild [received](https://dune.com/queries/4576927/7631228?sidebar=none) 869 donations from 476 unique donors in 2024, **totalling $162mm at the time of donation**. When compared to the combined total of $14mm raised in [2022 and 2023](https://dune.com/queries/4578053/7632937?sidebar=none), it is clear that 2024 marked a pivotal year for Protocol Guild as we took significant steps toward rebalancing financial incentives for Ethereum's core protocol work. Naturally, we aim to surpass this achievement in 2025!

Since all donations are vested over 4 years, we maintain two donor leaderboards: one for funds [currently vesting](https://dune.com/queries/4561127/7607365?sidebar=none) (left below) and another for [all donations ever](https://dune.com/queries/2670033/4438326?sidebar=none) (right below). Both tables feature **EigenLayer as the leading donor, whose 1% donation totalled $84mm at the time of donation.** But in fact the next three donors are also the same in both tables; Ether.fi, Taiko and LayerZero. On the other hand, the all-time donor leaderboard also includes Arbitrum, Lido, Uniswap and ENS, all of whose donations have already finished vesting.

<img width="844" alt="image" src="https://github.com/user-attachments/assets/59908a95-35e0-41e6-a5c9-3b23f228c20d" />

<img width="527" alt="image" src="https://github.com/user-attachments/assets/4f4254f5-17b2-4f4b-862f-02c64b43d59d" />

We also created a [chart](https://dune.com/queries/4115750/6930070?sidebar=none) specifically to measure our **funding diversity** in anticipation of the EigenLayer donation, knowing how valuable it would be. Protocol Guild's credible neutrality is crucial if we are to be trusted as a potential funder of last resort for Ethereum's core protocol work. Therefore, it is in our best interest to achieve diversified funding across the ecosystem. This diversification will naturally improve as we continue to build norms around dependency funding.

<img width="1478" alt="image" src="https://github.com/user-attachments/assets/728fc1b9-8416-462d-bd96-5ff03074991c" />

This brings us to our final and - in our opinion - most important fundraising metric: the **median vesting per Protocol Guild member over the next 12 months**. At the time of writing, Protocol Guild members can expect to receive ~$77k from Protocol Guild over the next 12 months. However, this amount is highly volatile, as it represents a basket of tokens whose values fluctuate with market conditions. For instance, in [late December](https://x.com/TimBeiko/status/1869738647806992500), the median amount vesting per member was $170k. This volatility highlights the importance of diversifying our funding sources and underscores the necessity of ongoing fundraising efforts, especially considering that funds raised during a "bull market" will hold significantly less value in a "bear market." To ensure that Ethereum's core maintainers can rely on Protocol Guild as their primary source of income, it is essential to establish a dependable financial floor.

<img width="709" alt="image" src="https://github.com/user-attachments/assets/e9eaebf1-a35d-4ae9-81ef-a14555eaeba5" />

https://dune.com/queries/4115750/6930070?sidebar=none

Looking ahead to 2025, we believe that achieving a median of approximately $300k per member by the end of 2025 is a reasonable target. But of course, we can only do so with the support of Ethereum's ecosystem. If you have questions about the Protocol Guild Pledge or otherwise donating to Protocol Guild, please reach out on [Twitter](https://x.com/ProtocolGuild) or [Discord](https://discord.com/invite/HaUhXYsMyC)!

### Marketing

While we still have a considerable distance to cover before Protocol Guild gains "mainstream" recognition within our ecosystem, we made significant strides in 2024. **We presented at most major conferences**, including [EthDenver](https://twitter.com/EthereumDenver/status/1763690444121121200), [EthCC](https://ethcc.io/archives/protocol-guild-funding-core-protocol-stewardship), [Funding the Commons](https://x.com/gitcoin/status/1847676919854100799), [EDCON](https://www.youtube.com/watch?v=ZIXQJmBwSrM), [ETHKL](https://x.com/ProtocolGuild/status/1866172026198646978), and [Devcon SEA](https://www.youtube.com/watch?v=4Hc664qQkV0) (hopefully you managed to visit us at our Devcon [booth](https://x.com/ProtocolGuild/status/1856907308258980346)). We participated in numerous **Twitter Spaces**, including with [Taiko](https://twitter.com/i/spaces/1MnxnMyYwykJO), [LayerZero](https://x.com/i/spaces/1OdJrjjXbjvJX/peek), [Octant](https://x.com/i/spaces/1MnGnDrolZyxO/peek), [Aligned](https://x.com/AlignedFndn/status/1869178770684358748), [Collectr](http://x.com/collectrs/status/1860080823611150559), [LottoPGF](http://x.com/i/spaces/1ypKdpvpXPyKW/peek) and [Eigenlayer](https://x.com/i/spaces/1rmxPoXMgWXJN/peek). We also recorded a **podcast** with [Crypto Altruist](https://x.com/Crypto_Altruism/status/1871645530301841558), and received [media coverage](https://thedefiant.io/news/blockchains/protocol-guild-has-distributed-usd20m-to-support-ethereum-development) from The Defiant.

Our very own Trent Van Epps contributed four [Mirror](https://trent.mirror.xyz/) **posts** throughout the year, discussing Protocol Guild's role in funding the Ethereum commons and providing guidance for new projects looking to adopt similar mechanisms:

1.  [Capital and enclosure in software commons: Linux & Ethereum](https://trent.mirror.xyz/GDDRqetgglGR5IYK1uTXxLalwIH6pBF9nulmY9zarUw)
2.  [Ethereum Guilds: opportunities + challenges](https://trent.mirror.xyz/MsXtV_TGZHp05FN_qmzeT8bBc1lRghR3Y0TPvAd-WrA)
3.  [​Protocol Guild: a funding framework for the Ethereum commons](https://trent.mirror.xyz/Lehny46ZMdxMEow0XE_RgowV2ntkp30chJRWPCEYbGQ)
4.  [Aggregation & atomization: dependency funding round dynamics](https://trent.mirror.xyz/ia1sSXWw6Q_0gseWhPDpt0WbsOadCfQ-23yAxNn4sXA)

We also stepped up our **Twitter** game towards the end of the year (thanks to a [new](https://x.com/ProtocolGuild/status/1847300799501619360) ops contributor), by sharing [member perspectives](https://x.com/ProtocolGuild/status/1840817371831025713) and [video clips](https://x.com/ProtocolGuild/status/1866172026198646978)!

Finally, our [documentation](https://protocol-guild.readthedocs.io/) (which basically doubles as our website today) got a [major update](https://github.com/protocolguild/documentation/pull/171) to reflect all developments following the pilot phase.

In 2025, we plan to continue all of the above marketing efforts, but we'll put a special emphasis on refreshing our branding, including creating a website (i.e. something more digestible than our documentation). If you know someone who can help with this, please have them [get in touch](https://x.com/ProtocolGuild/status/1879604413482045820)! 

### Smart Contract Architecture

Alongside our announcement of the Protocol Guild Pledge at the start of 2024, we also deployed a new [4-year vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/), replacing the [1-year vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) used during our pilot. The reasoning behind this change is simple: anyone familiar with Ethereum's [core protocol development roadmap](https://www.youtube.com/watch?v=8mJDt8TGebc) knows that the next few years will be absolutely critical for Ethereum, and a 4-year vesting period provides strong incentives for Ethereum's core maintainers - who may change over time - to continue their vital work. Additionally, this vesting period aligns with industry norms, such as employee stock options and token grants, and assures donors that their funding will support both current and future active core protocol contributors over the long term. While this extended vesting period means we need to raise four times as much to match the 1-year vesting, our fundraising efforts in 2024 demonstrated a strong appetite within the Ethereum ecosystem to fund Ethereum's core protocol work.

Apart from the change in vesting duration, our current smart contract architecture (right side) looks relatively similar to our pilot (left side):
<img width="1000" alt="PG v1" src="https://github.com/user-attachments/assets/b3d04fbe-d30e-4376-a3c3-bbe7bfda745d" />
![PG Nov 11 - present](https://github.com/user-attachments/assets/8c946e79-ceb5-46e3-b710-ba030cace8ba)

Here's a summary of the key changes:

-   4-year vest replaced 1-year vest
-   Deployed MolochDAO for ratifying membership updates
-   Pass-through wallet between vest and split to trigger arbitrary calls on vested funds
-   Deployed vesting and split contracts on L2s (Optimism so far)

You can read more about our smart contract architecture in our [documentation](https://protocol-guild.readthedocs.io/en/latest/03-onchain-architecture.html). It's worth noting that we invested significant time in developing an [onchain membership registry](https://github.com/HausDAO/protocol-guild-contracts#protocol-guild---networked-member-registry-contracts--) in 2023, which we ultimately decided not to deploy. However, we remain committed to finding the most secure and efficient way to eliminate our off-chain and multisig dependencies. Our short term priorities are to move to [SplitV2.1](https://docs.splits.org/core/split-v2) contracts, which would be controlled by an [Agora DAO](https://www.agora.xyz/) (instead of our multisig). Over the long term, we would love to see a governance module integrated into a split contract directly, so that the split's recipients can govern the list of recipients, with arbitrary calls to automate the calculation of weights onchain. If you have ideas on how to achieve this, we would love to hear from you!

Our Dune dashboard also [tracks](https://dune.com/protocolguild/protocol-guild#gas-fees) gas costs associated with operating our smart contract architecture on mainnet, and in 2024 we spent 3.572 ETH (~$12k) on gas. Given that we [raised](https://dune.com/queries/4576927/7631228?sidebar=none) over $150mm and [vested](https://dune.com/queries/3845181/6467353?sidebar=none) ~$7mm in 2024,this translates to approximately $0.00171 in gas costs for each dollar vested.

As mentioned in our [acknowledgements](https://protocol-guild.readthedocs.io/en/latest/07-resources.html#acknowledgments), we would like to express our gratitude to the teams that contributed to our smart contract architecture, including [Splits](https://splits.org/), [DAOhaus](https://daohaus.club/), [Sigma Prime](https://sigmaprime.io/), [Dedaub](https://dedaub.com/), [Zellic](https://www.zellic.io/) and [Red Guild](https://theredguild.org/).

Legal Entity
============

Following our pilot phase, it became evident that a legal entity was essential for scaling our fundraising efforts. Accordingly, in January 2024, we deployed a legal entity for Protocol Guild.

After consulting with various teams in the ecosystem, we decided to adopt a legal structure similar to that of the ENS Foundation, including the choice of the Cayman Islands as our legal base. We extend our gratitude to ENS for open-sourcing their [legal documents](https://docs.ens.domains/dao/foundation) and for the time they dedicated to consulting with us on this topic.

Despite closely modeling our legal entity on established frameworks, the total cost to set up and incorporate the legal entity, as well as to cover 2024 fixed costs, amounted to $180k. This figure includes approximately $85k in legal fees during the research phase, around $10k for the actual incorporation, and about $75k for fixed costs associated with operating the legal entity in 2024. It is important to note that this cost reflects only the direct expenses incurred, as we received substantial pro-bono support throughout the process.

To cover legal fees without changing our smart contract architecture, the legal entity was added as a recipient to our [split contract](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/). At the time of writing, the legal entity was receiving a 5% share of all vested funds, with the aim of accruing $300k in stablecoins. This amount is intended to cover two years of operational costs and provide $100k in reserves. The legal entity's liquid assets are held in a [multisig](https://app.safe.global/balances?safe=eth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B), and all tokens it receives are converted to USDC on a monthly basis to mitigate market fluctuations.\
For transparency, we are sharing the legal entity's financial statement for 2024 below. It should be noted that funds from the pilot are not owned by the legal entity, which is why donations only start in April (which is when the first donation was received in the 4-year vesting contract), and distributions started thereafter. The value of [donations](https://dune.com/queries/4308402?sidebar=none) and [distributions](https://dune.com/queries/4308470?sidebar=none) are based on their current value.

<img width="1436" alt="image" src="https://github.com/user-attachments/assets/9c0fdcf5-9f12-4dbd-a626-fd89e57fc8a8" />

### 2025 Plans
Our plans for 2025 have already been teased throughout this report, but can be summarized as follows:

1. **Fundraising**: We want to boost the “median annual funding per member” to $300k by the end of the year. This is 2x the funding provided at the end of 2024, and would significantly boost the financial incentives associated with working on Ethereum’s core protocol, making this work more competitive with other opportunities in the ecosystem. Achieving this goal would also enable members to rely on Protocol Guild as their sole source of income if they choose. Targeting “median annual funding per member” accommodates market fluctuations for existing funding and anticipated growth of the membership (from new members joining existing eligible projects or expansions in eligibility), in the same way the 1% pledge is a consistent ask of funders, regardless of project/treasury size, . Using targets like “amount vesting over 4 years (eg. $200mm)” or even “total annual funding (eg. $50mm)” do not take these other considerations into account.

2. **Refine member curation & accountability:** As the number of members and the available funding grows, better structures for accountability will be necessary to avoid free-rider loss, and by extension, the loss of legitimacy in the broader community. This may take the form of automated scripts to review member contributions, sortition based review, or other mechanisms.

3. **Smart contract architecture:** Aside from changes in the length of vesting increasing from 1 year to 4, our smart contracts have remained largely the same since the pilot. We need to continue exploring removing trusted components in our operational processes, manual input and offchain dependencies, as well as seamless integrations with L2s. We’ve tried this in both 2023 and 2024, but ran into a number of challenges. With a clearer scope of what we hope to accomplish, a committed development partner, and funding for any audits, we can iterate towards better onchain infra.

4. **Branding revamp:** Create a proper website, logo, visual branding, and Donor Badge NFT. Since launch in 2022, we’ve made do with very basic branding and no landing page. If someone wanted to learn about PG, they had to read dense documentation or find up-to-date presentations. A landing page + cohesive branding will help us better communicate our ambitious goals.

5. **Evaluate Time-weighting vs. Impact Allocations:** Time weighting is a neutral, but blunt, allocation mechanism. It avoids the political contention inherent in deciding who gets what, but isn’t the best at recognizing contributors which make outsized impacts. We will consider the tradeoffs of incorporating impact allocations, and how they could potentially be implemented in existing processes. 

### Conclusion
2024 was a transformative year for Protocol Guild, marked by significant fundraising achievements and the establishment of important dependency funding norms within the Ethereum ecosystem - the Protocol Guild Pledge. We successfully leveraged the groundwork laid in 2023 to engage in fundraising like never before, and the results speak for themselves: over $150mm raised, approximately $7mm vested, with the median Protocol Guild member expected to receive around $77k annually over the next four years. 

And yet, working on Ethereum’s L1 R&D is still not economically rational when compared to other opportunities in the ecosystem. To ensure that the financial incentives from Protocol Guild are substantial enough to attract and retain Ethereum’s talented core protocol contributors - and to position Protocol Guild as a funder of last resort in the worst-case scenario - we still need to significantly increase our funding. So if you know of a project that is planning a token launch, please let them know that you think they should take the Protocol Guild Pledge!

Lastly, we extend our heartfelt thanks to everyone who supported Protocol Guild. This initiative is truly community-driven, and there are few (if any) ecosystems where an experiment like Protocol Guild could work. We are immensely grateful to every single one of you!

