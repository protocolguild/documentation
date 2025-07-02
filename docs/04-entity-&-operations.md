# 4. Entity & Operations

## 4.1 Legal Structure

Protocol Guild incorporated a Cayman Islands-based legal entity in 2024, to help scale fundraising efforts.

## 4.2 Finances

Protocol Guild's legal entity currently receives 5% (as of Oct 4, 2024 - [tx link](https://etherscan.io/tx/0x8c1836d568fa4e5eca78d8a6e6880b954fd3377e7b538e305fa5d77a7f6c4071)) of vested funds to pay for the entity's legal and operational costs:

- Mainnet
    - [0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=eth:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
    - Prior addresses:
        - [0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=eth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B)
        - [0x69f4b27882eD6dc39E820acFc08C3d14f8e98a99](https://app.safe.global/balances?safe=eth:0x69f4b27882eD6dc39E820acFc08C3d14f8e98a99)
- Optimism
    - [0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF](https://app.safe.global/balances?safe=oeth:0xccccEbdBdA2D68bABA6da99449b9CA41Dba9d4FF)
    - Prior addresses:
        - [0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B](https://app.safe.global/balances?safe=oeth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B)

The entity swaps its share of vested tokens on a monthly basis to maintain a stablecoin reserve. This covers:
- $200k in reserve for 2 years of fixed + variable costs incurred to operate the entity
- $100k in reserve for potential claims against the foundation 
- Compensation for independent operations contributors
    - $12.5k/month to support cheeky-gorilla's contributions
    - $10.5k/month to support Peter Vechiarrelli's contributions

The entity aims to receive sufficient funding to cover the above, but not accumulate beyond that. These amounts are set by the membership, as noted in the [Governance](https://protocol-guild.readthedocs.io/en/latest/02-membership.html#governance) subsection of the docs.

## 4.3 Yearly Reports

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

#### Introduction

The Protocol Guild is a funding collective established in May 2022 to fund Ethereum’s core protocol maintainers. Our mission is to create a sustainable and decentralized funding stream for essential core protocol work, backed by the projects built on Ethereum.

This report highlights our achievements in 2024, showcasing both the progress of Protocol Guild as a funding mechanism, as well as the significant contributions to Ethereum made by our members.

The last report released by Protocol Guild was our [Pilot Retrospective](https://protocol-guild.readthedocs.io/en/latest/07-resources.html#pilot-retrospective) in April 2024. Moving forward, we intend to deliver detailed annual reports like this one to promote transparency and accountability, ensuring that our donors and the wider Ethereum community are well-informed about our progress and initiatives.

#### Donor Acknowledgement

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

#### Core Protocol Development Updates

The stakes for Ethereum’s core protocol development have never been higher, yet the output continues to accelerate despite tackling some of the most challenging issues in the space - scaling a blockchain without compromising on decentralization. Maintaining a stable contributor base is essential to sustain this momentum into 2025 and beyond, enabling Ethereum to effectively execute its core development roadmap and fulfill its potential as the world computer.

It is important to note that not all core protocol maintainers are part of Protocol Guild; Ethereum stewardship ultimately comes from a broader community of teams, projects, and individuals who contribute to the ecosystem's growth and resilience. Nevertheless, we believe that Protocol Guild represents a reasonably accurate snapshot of Ethereum’s core maintainer cohort, and as such, we feel it is appropriate to summarize those achievements in 2024, as well as look to the future.

##### Scaling Ethereum through Blobs

Ethereum's rollup-centric roadmap saw huge payoffs in 2024. The [Dencun upgrade](https://blog.ethereum.org/2024/02/27/dencun-mainnet-announcement) launched in March 2024, reducing L2 gas fees by 10-100x. This was achieved through the introduction of ephemeral data blobs (EIP-4844 or "proto-danksharding"), which can be utilized for data availability instead of calldata. Since the Dencun upgrade, we have seen onchain costs plummet (over [$380mm blob fee savings](https://dune.com/queries/3583807/6035165) to date), alongside a significant uptick in onchain activity. Rollups are Ethereum, and users on rollups are Ethereum users, so this is very encouraging progress!

![Onchain Costs](https://github.com/user-attachments/assets/aaafeddc-2387-4bce-8ec3-cca62424dc4b)
<small>[https://l2beat.com/scaling/costs](https://l2beat.com/scaling/costs)</small>

![Daily Average](https://github.com/user-attachments/assets/955d1af5-d320-41d1-a956-4ac7c6d7b09b)
<small>[https://l2beat.com/scaling/activity](https://l2beat.com/scaling/activity)</small>

##### Pectra

Even before the successful implementation of Dencun, work was already in progress on Pectra, the next Ethereum upgrade. [Pectra](https://eips.ethereum.org/EIPS/eip-7600) is set to be the largest upgrade in terms of EIP inclusions, and includes exciting features for stakers, node operators, end-users, smart contract developers, wallets, rollups, and ZK systems. Users will benefit from [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702), which will allow wallet and application developers to significantly enhance the way people interact with Ethereum, by granting smart contract-like capabilities to every single Ethereum address. At the same time, rollups will benefit from a [twofold increase](https://eips.ethereum.org/EIPS/eip-7691) in Ethereum's blob capacity, helping them to achieve further scale. Stakers will be able to merge existing validators together (up to 2048 ETH per validator), also enabling the compounding of their stake. For a full overview of Pectra, see [this Mirror post](https://tim.mirror.xyz/emiQJfRCb5sdnY018t-CeFDIye_Ehn4mieXI6kn5aXA).

##### Fusaka

Work continues in parallel for the upgrade *after* Pectra, Fusaka. The two headline features of this upgrade are PeerDAS and EOF. PeerDAS will lower bandwidth requirements and further reduce transaction costs for users, while [EOF](https://evmobjectformat.org/) will significantly enhance the Ethereum developer experience by streamlining smart contract development and deployment.

You can read more about Ethereum's core protocol development in 2024 and 2025 in [Tim Beiko's Mirror post](https://tim.mirror.xyz/CuRtFjkujKBqVsdvCGvthiPIYaZyzNc5sWIaExw2UpE). 

#### Membership

At the start of 2024, Protocol Guild had 161 members, concluding the year with [187](https://protocol-guild.readthedocs.io/en/latest/02-membership.html#active-members). This increase resulted from the addition of 41 new members and the removal of 15. Of the 187 members, 154 (83%) were engaged in Ethereum's core protocol work on a full-time basis, while the rest (15 members or 17%) contributed on a part-time basis.

![Membershio](https://github.com/user-attachments/assets/e916aeb2-6dbf-408c-8f47-534ce7e95208)
<small>[https://dune.com/queries/2665887/4430654?sidebar=none](https://dune.com/queries/2665887/4430654?sidebar=none)</small>

As during the pilot, [self-curation](https://protocol-guild.readthedocs.io/en/latest/02-membership.html#self-curation) was at the heart of any membership changes, i.e. Protocol Guild members themselves coming to consensus on who to add or remove from the membership. To minimize governance overhead, self-curation was split into first curating a list of [eligible teams or projects](https://protocol-guild.readthedocs.io/en/latest/01-eligibility.html#eligibility), after which individuals from those teams / projects can be admitted.

In 2024, two new projects were added to Protocol Guild; [Reth](https://github.com/protocolguild/documentation/pull/135) and [Grandine](https://github.com/protocolguild/documentation/pull/246). The introduction of Grandine came after they [open-sourced](https://medium.com/@grandine/grandine-is-open-sourced-b1815cf0ae39) their client, prompting a [refinement](https://github.com/protocolguild/documentation/pull/231) of our eligibility criteria to clarify the "open source" requirement.

Another update related to curation was the addition of "Primary Contributions" in our documentation's [membership table](https://protocol-guild.readthedocs.io/en/latest/02-membership.html). This [change](https://github.com/protocolguild/documentation/pull/173) aims to provide more insightful information by showcasing contributions to e.g. GitHub repositories, rather than just team or organization names. Although still a work in progress, the goal is for the "Primary Contributions" column to eventually replace the "Team" column. In 2025, we plan to refine and potentially automate the updating of this new column to enhance accountability and streamline self-curation.

Additionally, we engaged in extensive discussions regarding the potential removal of partial weight (i.e. part-time) contributors, who currently make up 17% of our membership. The main arguments for this consideration include evidence suggesting that part-time contributors are more likely to exit core protocol work, and that having multiple weight tiers increases the self-curation overhead. Given that Protocol Guild's membership has consistently grown, this presents a potential concern for long-term sustainability. However, some members argued that the flexibility of part-time work is beneficial for Ethereum in the long run, as it allows contributors to gain experience and insights from other projects and ecosystems - in addition to avoiding burnout.

While no definitive decision was made regarding this issue in 2024, it is likely to remain a topic of discussion in 2025. Most members agreed that implementing some form of accountability mechanisms would be prudent, even though this could increase governance overhead.

Lastly, in October, the membership agreed to provide a monthly retainer of USDC 12.5k to support one of its operations contributors. This decision was made because the time-weighting allocation mechanism was not provide sufficient funding to support this individual's ongoing work, so the USDC retainer was introduced to enable their continued contributions.

#### Fundraising

While 2022 marked the pilot phase of Protocol Guild (from May '22 to May '23) and 2023 was dedicated to establishing a legal framework and smart contract architecture to facilitate scaling beyond the pilot, 2024 was the first year where fundraising became our continuous top priority. And what a remarkable year it was!

Our fundraising efforts kicked off in January with Tim Beiko's [announcement](https://x.com/TimBeiko/status/1752458526407139680) of the **Protocol Guild Pledge**. In his own words:

_"Introducing the Protocol Guild Pledge: with a commitment from Ethereum ecosystem projects to donate 1% of their native tokens to @ProtocolGuild, I believe we can     align incentives between L1 R&D work and the rest of the crypto ecosystem ⛓️🛡️_

_My quantitative definition of Protocol Guild's goal is to "make contributing to     Ethereum L1 R&D economically rational on a risk-adjusted basis, while avoiding         capture". The Protocol Guild Pledge is what I believe is sufficient to get us there._

_Core devs don't generally get token upside for their work. By moving a tiny bit out on the risk curve, they can dramatically shift their rewards. The PGP aims to close that gap, and bring the risk/reward levels of L1 work in line with the ecosystem."_

The Protocol Guid Pledge - and in fact, Protocol Guild itself - was inspired by a [Tweet](https://x.com/dannyryan/status/1454065104819916803) from Danny Ryan in late 2021 (see below). However, it didn't make sense to start soliciting projects for 1% of their token supply until we had completed our pilot and hardened the mechanism. With Tim's announcement, we were ready to start doing so!

![Tweet](https://github.com/user-attachments/assets/a6431a76-f629-4a24-90c0-00c061ec1df0)

We quickly saw tremendous buy-in, with many different projects across the ecosystem taking the Protocol Guild Pledge. Within just one month of the announcement, we received five pledges from [Ether.fi](https://x.com/ether_fi/status/1752376059394408458), [PWN DAO](https://x.com/pwndao/status/1755597590979367163), [Taiko Labs](https://x.com/taikoxyz/status/1755609928167981330), [Credit Guild](https://x.com/CreditGuild/status/1756408591404384522) and [Member](https://x.com/gamiwtf/status/1757592643884957852). By the end of the year, we added seven more pledges from [EthStorage](https://x.com/EthStorage/status/1765907076029804886), [Sendit](https://x.com/gamiwtf/status/1773901096488153562), [Penjamin Blinkerton](https://x.com/PenCoinBase/status/1790563158181957823), [Re.al](https://x.com/real_rwa/status/1817939526951793113), [Puffer](https://x.com/puffer_finance/status/1844234772274729416), [Aligned](https://x.com/AlignedFndn/status/1867283345861743002) and [EigenLayer](https://x.com/eigenfoundation/status/1867283577093902802).

Incredibly, the donations from three projects alone - [Ether.fi](https://etherscan.io/tx/0xf15494110be78893cb5c60f4c7fc83372f15a1f602ba513ab3cf7e259516c0a4), [Taiko](https://etherscan.io/tx/0x171e22e62d3a8a176de0d0ad60284b9baa56895b662e51a60fc2153bb797709a) and [EigenLayer](https://etherscan.io/tx/0x202bd787112a227293e55931c4f99c1e20791782d8609ecfbbcbc75393884e8f) - totalled almost $150mm (valued at time of donation). While this sets a high benchmark, we believe that the monetary value of pledges is less critical than establishing the norm itself. Some projects that take the pledge will succeed, while others may not, but the goal is to expose Ethereum's core maintainers to the value being generated within the ecosystem. This can only happen if we create a norm where all projects building on Ethereum donate 1% of their token supply to Protocol Guild. Without this ecosystem-wide buy-in, Protocol Guild may struggle to scale its fundraising efforts, relying solely on proactive fundraising from a small number of operations contributors. We are incredibly grateful to all our pledgeoors for their leadership in establishing these norms in 2024 and look forward to onboarding new ones in 2025! If you are a project that is considering taking the pledge, please reach out to us on [Twitter](https://x.com/ProtocolGuild) or [Discord](https://discord.com/invite/HaUhXYsMyC), so we can do our part in celebrating your pledge.

![Pledges](https://github.com/user-attachments/assets/e33a6047-c90c-4dfb-9f60-32682a828dea)
<small>[https://dune.com/queries/3428807?sidebar=none](https://dune.com/queries/3428807?sidebar=none)</small>

Of course not all projects have tokens to pledge! We were once again amazed by the creativity of projects contributing a portion of their **NFT** or **POAP** sales to Protocol Guild, including [Moving Mondrians](https://x.com/davidryan59/status/1744248815551709224), [Uni Zorb](https://zora.co/collect/zora:0x7e8f28a51471a9a434505ac58ded39c422e73028/1), [Delivery at Dawn](https://stateful.mirror.xyz/DjDK5IqoZOtel8t2pn_DE0WLQEdNXLIEMuD0bNZKR8M), [ETH Investors Club magazine](https://x.com/EICquarterly/status/1773744620054462493), [Bitwise TV spot](https://x.com/BitwiseInvest/status/1803798912114770091), [Ethereum Stories](https://x.com/EthereumFilm/status/1815779118262137224), [Goodbye for Now Danny](https://x.com/superphiz/status/1839023705545957412), [Collectr November Edition](https://x.com/collectrs/status/1849875289775501727) and [$4k](https://x.com/superphiz/status/1865079286283059311).

We also received some unexpected pledges from **tradfi**, with [Coinfund](https://finance.yahoo.com/news/coinfund-announces-pledge-protocol-guild-165000327.html) pledging 1% of net income earned from their CESR financial product, while [Bitwise](https://x.com/BitwiseInvest/status/1815486261337182504) announced that they would donate 10% of profits from the Bitwise Ethereum ETF (split between Protocol Guild and PBS Foundation). As Ethereum continues its journey toward becoming the world computer, it will inevitably intersect with various industries beyond our current ecosystem. It's truly inspiring to see these companies acknowledge this potential and support our mission at such an early stage.

2024 was also a big year for us in terms of allocations from **public goods funding mechanisms**. We received the second-largest $OP allocation in [Optimism's RPGF 5](https://x.com/Optimism/status/1848724879836856351), and we secured the [top allocations](https://dune.com/queries/4577934?sidebar=none) in all 4 Octant rounds (Epoch [2](https://twitter.com/OctantApp/status/1752744706671575343), [3](https://blog.octant.build/octant-epoch-3-projects/), [4](https://x.com/OctantApp/status/1818006254893285635) and [5](https://x.com/ProtocolGuild/status/1851131962192490675)). We are very thankful to both these projects for continuously dedicating themselves (and their treasuries!) to funding our ecosystem's vital public goods.

Finally, we recognize that the Protocol Guild Pledge may not be suitable for all projects, and we still want to acknowledge donations from those that didn't meet the 1% threshold. Shout out to [LayerZero](https://x.com/LayerZero_Fndn/status/1803742303204323494), [ZKsync](https://explorer.zksync.io/address/0xb294F411cB52c7C6B6c0B0b61DBDf398a8b0725d) and [Scroll](https://scrollscan.com/address/0x3b04F9398Ce7aBa9e34a789dC5632002A3Dc9953) for their sizable allocations during their token genesis event! Every donation helps reinforce the norm of funding essential dependencies within the ecosystem.

All told, Protocol Guild [received](https://dune.com/queries/4576927/7631228?sidebar=none) 869 donations from 476 unique donors in 2024, **totalling $162mm at the time of donation**. When compared to the combined total of $14mm raised in [2022 and 2023](https://dune.com/queries/4578053/7632937?sidebar=none), it is clear that 2024 marked a pivotal year for Protocol Guild as we took significant steps toward rebalancing financial incentives for Ethereum's core protocol work. Naturally, we aim to surpass this achievement in 2025!

Since all donations are vested over 4 years, we maintain two donor leaderboards: one for funds [currently vesting](https://dune.com/queries/4561127/7607365?sidebar=none) (first picture below) and another for [all donations ever](https://dune.com/queries/2670033/4438326?sidebar=none) (second picture below). Both tables feature **EigenLayer as the leading donor, whose 1% donation totalled $84mm at the time of donation.** But in fact the next three donors are also the same in both tables; Ether.fi, Taiko and LayerZero. On the other hand, the all-time donor leaderboard also includes Arbitrum, Lido, Uniswap and ENS, all of whose donations have already finished vesting.

![Donor Leaderboard by Vesting](https://github.com/user-attachments/assets/59908a95-35e0-41e6-a5c9-3b23f228c20d)

![All Time Donor Leaderboard](https://github.com/user-attachments/assets/4f4254f5-17b2-4f4b-862f-02c64b43d59d)

We also created a [chart](https://dune.com/queries/4115750/6930070?sidebar=none) specifically to measure our **funding diversity** in anticipation of the EigenLayer donation, knowing how valuable it would be. Protocol Guild's credible neutrality is crucial if we are to be trusted as a potential funder of last resort for Ethereum's core protocol work. Therefore, it is in our best interest to achieve diversified funding across the ecosystem. This diversification will naturally improve as we continue to build norms around dependency funding.

![Diversity](https://github.com/user-attachments/assets/728fc1b9-8416-462d-bd96-5ff03074991c)

This brings us to our final and - in our opinion - most important fundraising metric: the **median vesting per Protocol Guild member over the next 12 months**. At the time of writing, Protocol Guild members can expect to receive ~$77k from Protocol Guild over the next 12 months. However, this amount is highly volatile, as it represents a basket of tokens whose values fluctuate with market conditions. For instance, in [late December](https://x.com/TimBeiko/status/1869738647806992500), the median amount vesting per member was $170k. This volatility highlights the importance of diversifying our funding sources and underscores the necessity of ongoing fundraising efforts, especially considering that funds raised during a "bull market" will hold significantly less value in a "bear market." To ensure that Ethereum's core maintainers can rely on Protocol Guild as their primary source of income, it is essential to establish a dependable financial floor.

![Median Vest](https://github.com/user-attachments/assets/e9eaebf1-a35d-4ae9-81ef-a14555eaeba5)
<small>[https://dune.com/queries/4115750/6930070?sidebar=none](https://dune.com/queries/4115750/6930070?sidebar=none)</small>

Looking ahead to 2025, we believe that achieving a median of approximately $300k per member by the end of 2025 is a reasonable target. But of course, we can only do so with the support of Ethereum's ecosystem. If you have questions about the Protocol Guild Pledge or otherwise donating to Protocol Guild, please reach out on [Twitter](https://x.com/ProtocolGuild) or [Discord](https://discord.com/invite/HaUhXYsMyC)!

#### Marketing

While we still have a considerable distance to cover before Protocol Guild gains "mainstream" recognition within our ecosystem, we made significant strides in 2024. **We presented at most major conferences**, including [EthDenver](https://twitter.com/EthereumDenver/status/1763690444121121200), [EthCC](https://ethcc.io/archives/protocol-guild-funding-core-protocol-stewardship), [Funding the Commons](https://x.com/gitcoin/status/1847676919854100799), [EDCON](https://www.youtube.com/watch?v=ZIXQJmBwSrM), [ETHKL](https://x.com/ProtocolGuild/status/1866172026198646978), and [Devcon SEA](https://www.youtube.com/watch?v=4Hc664qQkV0) (hopefully you managed to visit us at our Devcon [booth](https://x.com/ProtocolGuild/status/1856907308258980346)). We participated in numerous **Twitter Spaces**, including with [Taiko](https://twitter.com/i/spaces/1MnxnMyYwykJO), [LayerZero](https://x.com/i/spaces/1OdJrjjXbjvJX/peek), [Octant](https://x.com/i/spaces/1MnGnDrolZyxO/peek), [Aligned](https://x.com/AlignedFndn/status/1869178770684358748), [Collectr](http://x.com/collectrs/status/1860080823611150559), [LottoPGF](http://x.com/i/spaces/1ypKdpvpXPyKW/peek) and [Eigenlayer](https://x.com/i/spaces/1rmxPoXMgWXJN/peek). We also recorded a **podcast** with [Crypto Altruist](https://x.com/Crypto_Altruism/status/1871645530301841558), and received [media coverage](https://thedefiant.io/news/blockchains/protocol-guild-has-distributed-usd20m-to-support-ethereum-development) from The Defiant.

Our very own Trent Van Epps contributed four [Mirror](https://trent.mirror.xyz/) **posts** throughout the year, discussing Protocol Guild's role in funding the Ethereum commons and providing guidance for new projects looking to adopt similar mechanisms:

1.  [Capital and enclosure in software commons: Linux & Ethereum](https://trent.mirror.xyz/GDDRqetgglGR5IYK1uTXxLalwIH6pBF9nulmY9zarUw)
2.  [Ethereum Guilds: opportunities + challenges](https://trent.mirror.xyz/MsXtV_TGZHp05FN_qmzeT8bBc1lRghR3Y0TPvAd-WrA)
3.  [​Protocol Guild: a funding framework for the Ethereum commons](https://trent.mirror.xyz/Lehny46ZMdxMEow0XE_RgowV2ntkp30chJRWPCEYbGQ)
4.  [Aggregation & atomization: dependency funding round dynamics](https://trent.mirror.xyz/ia1sSXWw6Q_0gseWhPDpt0WbsOadCfQ-23yAxNn4sXA)

We also stepped up our **Twitter** game towards the end of the year (thanks to a [new](https://x.com/ProtocolGuild/status/1847300799501619360) ops contributor), by sharing [member perspectives](https://x.com/ProtocolGuild/status/1840817371831025713) and [video clips](https://x.com/ProtocolGuild/status/1866172026198646978)!

Finally, our [documentation](https://protocol-guild.readthedocs.io/) (which basically doubles as our website today) got a [major update](https://github.com/protocolguild/documentation/pull/171) to reflect all developments following the pilot phase.

In 2025, we plan to continue all of the above marketing efforts, but we'll put a special emphasis on refreshing our branding, including creating a website (i.e. something more digestible than our documentation). If you know someone who can help with this, please have them [get in touch](https://x.com/ProtocolGuild/status/1879604413482045820)! 

#### Smart Contract Architecture

Alongside our announcement of the Protocol Guild Pledge at the start of 2024, we also deployed a new [4-year vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/), replacing the [1-year vesting contract](https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/) used during our pilot. The reasoning behind this change is simple: anyone familiar with Ethereum's [core protocol development roadmap](https://www.youtube.com/watch?v=8mJDt8TGebc) knows that the next few years will be absolutely critical for Ethereum, and a 4-year vesting period provides strong incentives for Ethereum's core maintainers - who may change over time - to continue their vital work. Additionally, this vesting period aligns with industry norms, such as employee stock options and token grants, and assures donors that their funding will support both current and future active core protocol contributors over the long term. While this extended vesting period means we need to raise four times as much to match the 1-year vesting, our fundraising efforts in 2024 demonstrated a strong appetite within the Ethereum ecosystem to fund Ethereum's core protocol work.

Apart from the change in vesting duration, our current smart contract architecture (second picture below side) looks relatively similar to our pilot (first picture below):

![PG Pilot](https://github.com/user-attachments/assets/b3d04fbe-d30e-4376-a3c3-bbe7bfda745d)

![PGv2](https://github.com/user-attachments/assets/8c946e79-ceb5-46e3-b710-ba030cace8ba)

Here's a summary of the key changes:

-   4-year vest replaced 1-year vest
-   Deployed MolochDAO for ratifying membership updates
-   Pass-through wallet between vest and split to trigger arbitrary calls on vested funds
-   Deployed vesting and split contracts on L2s (Optimism so far)

You can read more about our smart contract architecture in our [documentation](https://protocol-guild.readthedocs.io/en/latest/03-onchain-architecture.html). It's worth noting that we invested significant time in developing an [onchain membership registry](https://github.com/HausDAO/protocol-guild-contracts#protocol-guild---networked-member-registry-contracts--) in 2023, which we ultimately decided not to deploy. However, we remain committed to finding the most secure and efficient way to eliminate our off-chain and multisig dependencies. Our short term priorities are to move to [SplitV2.1](https://docs.splits.org/core/split-v2) contracts, which would be controlled by an [Agora DAO](https://www.agora.xyz/) (instead of our multisig). Over the long term, we would love to see a governance module integrated into a split contract directly, so that the split's recipients can govern the list of recipients, with arbitrary calls to automate the calculation of weights onchain. If you have ideas on how to achieve this, we would love to hear from you!

Our Dune dashboard also [tracks](https://dune.com/protocolguild/protocol-guild#gas-fees) gas costs associated with operating our smart contract architecture on mainnet, and in 2024 we spent 3.572 ETH (~$12k) on gas. Given that we [raised](https://dune.com/queries/4576927/7631228?sidebar=none) over $150mm and [vested](https://dune.com/queries/3845181/6467353?sidebar=none) ~$7mm in 2024,this translates to approximately $0.00171 in gas costs for each dollar vested.

As mentioned in our [acknowledgements](https://protocol-guild.readthedocs.io/en/latest/07-resources.html#acknowledgments), we would like to express our gratitude to the teams that contributed to our smart contract architecture, including [Splits](https://splits.org/), [DAOhaus](https://daohaus.club/), [Sigma Prime](https://sigmaprime.io/), [Dedaub](https://dedaub.com/), [Zellic](https://www.zellic.io/) and [Red Guild](https://theredguild.org/).

#### Legal Entity

Following our pilot phase, it became evident that a legal entity was essential for scaling our fundraising efforts. Accordingly, in January 2024, we deployed a legal entity for Protocol Guild.

After consulting with various teams in the ecosystem, we decided to adopt a legal structure similar to that of the ENS Foundation, including the choice of the Cayman Islands as our legal base. We extend our gratitude to ENS for open-sourcing their [legal documents](https://docs.ens.domains/dao/foundation) and for the time they dedicated to consulting with us on this topic.

Despite closely modeling our legal entity on established frameworks, the total cost to set up and incorporate the legal entity, as well as to cover 2024 fixed costs, amounted to $180k. This figure includes approximately $85k in legal fees during the research phase, around $10k for the actual incorporation, and about $75k for fixed costs associated with operating the legal entity in 2024. It is important to note that this cost reflects only the direct expenses incurred, as we received substantial pro-bono support throughout the process.

To cover legal fees without changing our smart contract architecture, the legal entity was added as a recipient to our [split contract](https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/). At the time of writing, the legal entity was receiving a 5% share of all vested funds, with the aim of accruing $300k in stablecoins. This amount is intended to cover two years of operational costs and provide $100k in reserves. The legal entity's liquid assets are held in a [multisig](https://app.safe.global/balances?safe=eth:0x0cDF1a78f00f56ba879D0aCc0FDa1789e415f23B), and all tokens it receives are converted to USDC on a monthly basis to mitigate market fluctuations.\
For transparency, we are sharing the legal entity's financial statement for 2024 below. It should be noted that funds from the pilot are not owned by the legal entity, which is why donations only start in April (which is when the first donation was received in the 4-year vesting contract), and distributions started thereafter. The value of [donations](https://dune.com/queries/4308402?sidebar=none) and [distributions](https://dune.com/queries/4308470?sidebar=none) are based on their current value.

![Finances](https://github.com/user-attachments/assets/9c0fdcf5-9f12-4dbd-a626-fd89e57fc8a8)

#### 2025 Plans
Our plans for 2025 have already been teased throughout this report, but can be summarized as follows:

1. **Fundraising**: We want to boost the “median annual funding per member” to $300k by the end of the year. This is 2x the funding provided at the end of 2024, and would significantly boost the financial incentives associated with working on Ethereum’s core protocol, making this work more competitive with other opportunities in the ecosystem. Achieving this goal would also enable members to rely on Protocol Guild as their sole source of income if they choose. Targeting “median annual funding per member” accommodates market fluctuations for existing funding and anticipated growth of the membership (from new members joining existing eligible projects or expansions in eligibility), in the same way the 1% pledge is a consistent ask of funders, regardless of project/treasury size, . Using targets like “amount vesting over 4 years (eg. $200mm)” or even “total annual funding (eg. $50mm)” do not take these other considerations into account.

2. **Refine member curation & accountability:** As the number of members and the available funding grows, better structures for accountability will be necessary to avoid free-rider loss, and by extension, the loss of legitimacy in the broader community. This may take the form of automated scripts to review member contributions, sortition based review, or other mechanisms.

3. **Smart contract architecture:** Aside from changes in the length of vesting increasing from 1 year to 4, our smart contracts have remained largely the same since the pilot. We need to continue exploring removing trusted components in our operational processes, manual input and offchain dependencies, as well as seamless integrations with L2s. We’ve tried this in both 2023 and 2024, but ran into a number of challenges. With a clearer scope of what we hope to accomplish, a committed development partner, and funding for any audits, we can iterate towards better onchain infra.

4. **Branding revamp:** Create a proper website, logo, visual branding, and Donor Badge NFT. Since launch in 2022, we’ve made do with very basic branding and no landing page. If someone wanted to learn about PG, they had to read dense documentation or find up-to-date presentations. A landing page + cohesive branding will help us better communicate our ambitious goals.

5. **Evaluate Time-weighting vs. Impact Allocations:** Time weighting is a neutral, but blunt, allocation mechanism. It avoids the political contention inherent in deciding who gets what, but isn’t the best at recognizing contributors which make outsized impacts. We will consider the tradeoffs of incorporating impact allocations, and how they could potentially be implemented in existing processes. 

#### Conclusion
2024 was a transformative year for Protocol Guild, marked by significant fundraising achievements and the establishment of important dependency funding norms within the Ethereum ecosystem - the Protocol Guild Pledge. We successfully leveraged the groundwork laid in 2023 to engage in fundraising like never before, and the results speak for themselves: over $150mm raised, approximately $7mm vested, with the median Protocol Guild member expected to receive around $77k annually over the next four years. 

And yet, working on Ethereum’s L1 R&D is still not economically rational when compared to other opportunities in the ecosystem. To ensure that the financial incentives from Protocol Guild are substantial enough to attract and retain Ethereum’s talented core protocol contributors - and to position Protocol Guild as a funder of last resort in the worst-case scenario - we still need to significantly increase our funding. So if you know of a project that is planning a token launch, please let them know that you think they should take the Protocol Guild Pledge!

Lastly, we extend our heartfelt thanks to everyone who supported Protocol Guild. This initiative is truly community-driven, and there are few (if any) ecosystems where an experiment like Protocol Guild could work. We are immensely grateful to every single one of you:

- <small>Eigen Foundation (0x51fbef303428f689151efda9a6cb4eb3668b05b8)</small>
- <small>Ether.fi Foundation (0x7a6a41f353b3002751d94118aa7f4935da39bb53)</small>
- <small>Taiko Labs (0x363e846b91af677fb82f709b6c35bd1aafc6b3da)</small>
- <small>Optimism RPGF (0x19793c7824be70ec58bb673ca42d2779d12581be)</small>
- <small>ZKsync Association (0x0000000000000000000000000000000000000000)</small>
- <small>LayerZero Foundation (0x77b2043768d28e9c9ab44e1abfc95944bce57931)</small>
- <small>SAFE DAO (0xf6cbdd6ea6ec3c4359e33de0ac823701cc56c6c4)</small>
- <small>Scroll Foundation (0x3b04f9398ce7aba9e34a789dc5632002a3dc9953)</small>
- <small>Delivery at Dawn (0x2ed6c4b5da6378c7897ac67ba9e43102feb694ee)</small>
- <small>Octant / Golem Foundation (0xf6cbdd6ea6ec3c4359e33de0ac823701cc56c6c4)</small>
- <small>LambdaClass (0x267be1c1d684f78cb4f6a176c4911b741e4ffdc0)</small>
- <small>0xa29744b745800ccd814e6f59271ecd74682eccb0</small>
- <small>Heroglyphs (0x888d768764a2e304215247f0ba3457ccb0f0ab4f)</small>
- <small>Sismo (0xe84bda21856ab6cca7902b7d04beae55563fd539)</small>
- <small>Gitcoin Grants (PGN) (0x3250c2cee20fa34d1c4f68eaa87e53512e95a62a)</small>
- <small>0x35b7718e8afa146de9c8afd7cb5fe17ef9b6f372</small>
- <small>drips-network.eth (0x3250c2cee20fa34d1c4f68eaa87e53512e95a62a)</small>
- <small>Other Split Contracts (0x2ed6c4b5da6378c7897ac67ba9e43102feb694ee)</small>
- <small>Polygon Ecosystem (0x4a27ac91c5cd3768f140ecabde3fc2b2d92edb98)</small>
- <small>Uni Zorb (0x2ed6c4b5da6378c7897ac67ba9e43102feb694ee)</small>
- <small>0x800fb13c41e1228be1ee404396e28ac900772954</small>
- <small>lefteris.eth (0x2b888954421b424c5d3d9ce9bb67c9bd47537d12)</small>
- <small>Disperse: Disperse (0xd152f549545093347a162dce210e7293f1452150)</small>
- <small>PoolTogether (0x6ce6986ff28bfed84a911682cdb127becb9fc88a)</small>
- <small>hildobby.eth (0x09a5943a6d10919571ee2c9f63380aea747eca97)</small>
- <small>okinamicommunity.eth (0x92459b295a6187df79bc685df1a88eaba3835aed)</small>
- <small>0x8fb66f38cf86a3d5e8768f8f1754a24a6c661fb8</small>
- <small>sscatala.eth (0xd5652e441bd5427bfb8277b62d9890c7b2d11d80)</small>
- <small>0x61f839515f1b4567061d1adda009627ba4e5796a</small>
- <small>0x6bd199e68c80be5ed0276761b1b96da36b75abfe</small>
- <small>0x7777777f279eba3d3ad8f4e708545291a6fdba8b</small>
- <small>stephenmilone.eth (0x2bff28a82bc4166d535bc9b803f77c09d47fb370)</small>
- <small>0x3bb9a018be66ac8ddab18cdde0c51c61ac6eecfa</small>
- <small>meshif.eth (0x96b8520f156fb053e12a5b992475c94491536ee6)</small>
- <small>0xc0723c8d2656ec43a8f921da803fa2dbb551dfaa</small>
- <small>snoopdoug.eth (0xfa43b254584c0edae92e57db903e0eac695908e9)</small>
- <small>brendanc.eth (0x00000000051cbce3fd04148cce2c0adc7c651829)</small>
- <small>0xc5c96c291fb634653c0cd3160c649f94ffa6090c</small>
- <small>efp.eth (0xe2cded674643743ec1316858dfd4fd2116932e63)</small>
- <small>0x32b6d1ccbfb75aa0d52e036488b169597f0fe3d0</small>
- <small>nicoa.eth (0x797bc498edee4357a16a1054db0323cbd04c84c3)</small>
- <small>0xexa.eth (0xb9e7601f972c04636d64175c5c03415de6cc810b)</small>
- <small>0xefe00901234f51820d7ceb4ad323e25827a7853c</small>
- <small>tokendude.eth (0xba0c565110f65d181b9ff1d8a9f787b52857bb0c)</small>
- <small>0xa459d10b51b7e78fed6abfc9935fda67265eeeee</small>
- <small>0xebe80f029b1c02862b9e8a70a7e5317c06f62cae</small>
- <small>0x3c71b5f82492b335ab060de7edaeae8c30981a7c</small>
- <small>capa1993.eth (0x6ad0f7e6f008fadcde9cf73b6819ed42359bbca7)</small>
- <small>fenya.eth (0xdac7a91516112703448b5d1fbc8b679fce838e8a)</small>
- <small>endman.eth (0x0a251df99a88a20a93876205fb7f5faf2e85a481)</small>
- <small>ikben.eth (0x70db6ba00197d1e7d19ac294791228ff5949290c)</small>
- <small>0x60727a92b8b6052b999afbe72806efe3592090c3</small>
- <small>0x772f9781c61301d0a931652d654ae6260c188f76</small>
- <small>0xlwi.eth (0xf8f213c60d9588373e6055c6bf8c8a16538a20c8)</small>
- <small>0xd5fb9cf3c22fdd80645bbf15993760c3387534a4</small>
- <small>leo888.eth (0x701b64892860ea8c84881be1e21c8b3ea635206d)</small>
- <small>al0shka.eth (0xd97ce1650610592bab3e50d7a994a7cbf1dc92fa)</small>
- <small>heatwave.eth (0x80a1d0169b14602269d3ac3c05f30ac9f8b1250b)</small>
- <small>zhask.eth (0x49f63b254ea9043e57678c13e06aef257fab45c1)</small>
- <small>harp3r.eth (0x43b7ea3ebcdd8133be85bee435b06a3a2db6cbcc)</small>
- <small>catch-22.eth (0x8330a84d3c16a55302f921c36979b1067418053a)</small>
- <small>0x97a8a3e7d2be38599121661f616501a332279a49</small>
- <small>pipe.eth (0x1084b55cb63de549806a521036f7dad2d37e3fae)</small>
- <small>fria.eth (0x3fed71848b74b9f3ff26544cad368c082cb31961)</small>
- <small>jmjaw.eth (0x7e5f937231a654f6816ca364de5ac60c36b065c5)</small>
- <small>obavct.eth (0x7c6915b02cef07e86b5ac1bb3e5f40f228929ecd)</small>
- <small>depths.eth (0xe61520fb67a76ec88488a96858bb6a054f482c4c)</small>
- <small>minimalgravitas.eth (0x7899d9b1181cbb427b0b1be0684c096c260f7474)</small>
- <small>0xbb54eb60f10074e4389602364c1e307138e5218f</small>
- <small>0xea241a2bf34bfd4385da1dc70dba31861e914880</small>
- <small>timbeiko.eth (0x10f5d45854e038071485ac9e402308cf80d2d2fe)</small>
- <small>cardenas.eth (0x841ad0abab2d33520ca236a2f5d8b038addc12ba)</small>
- <small>simsaladrop.eth (0xc4a5a54657c961740aeb0b053224544b249311a0)</small>
- <small>viralvector.eth (0xaecac6407cda3185791946d5a422b9210ace8ce8)</small>
- <small>0x11cfa24a5a1b7cd9cd40be53c2ef0fab892e47a6</small>
- <small>ethereumvalidator.eth (0xf692450103d37fbed3f50348e9a8518a92bb21ee)</small>
- <small>0x275ccc1e2a614d7e35308274f270cc0c8919dc15</small>
- <small>stammtischdao.eth (0xbd20eb0341aeb3de2bc417d607faca515122868a)</small>
- <small>almacantar.eth (0x6c53bdf34aa69380e92d3b316959ee336f88e1f8)</small>
- <small>OpenSea (Seaport) (0x9e05fa34b8e609f70bf71ebaca215986a15d80e0)</small>
- <small>hememix.eth (0xcb15649d7b7a1eb01fb1acd14809de6cf82aa1a0)</small>
- <small>0x49c0b9f9dc74d7a29082506dd24599b8b8fd5765</small>
- <small>0x242bc81b7fcda78dfa5c4a9afea724895c968a45</small>
- <small>rohitmalekar.eth (0x2dd2036c9db2ada2739509af0047c00c8b9291ef)</small>
- <small>hartel.eth (0xf9e1d1e9f22c96752356adfd377231528c7e851e)</small>
- <small>kiwi.eth (0x08d816526bdc9d077dd685bd9fa49f58a5ab8e48)</small>
- <small>0x0247373d3c8d132f84c9f2e0b5c04005fb64cdce</small>
- <small>0xgiamma.eth (0xcf2e03786fbfe7dfdbe4f379e4e46363563f4b03)</small>
- <small>insomniak.eth (0x98479e6d18580052e1ed593d5fb2f3353c10f10a)</small>
- <small>mangoshake.eth (0x599c3de66527a8c6c6938732d3bbd39e6b35a1a3)</small>
- <small>nft7771.eth (0x644bf2c24623e5c14ec611183a8124e348667d8c)</small>
- <small>0x82a083c761ee45fe010cac6a61609469abdb833e</small>
- <small>dna41.eth (0x2b0068ffb8d5eba939c3656213da9b06d9b246d3)</small>
- <small>newcastlefan.eth (0xc22f4752852274c6dd01a3c7bcc03fd690dab80c)</small>
- <small>avocrypt.eth (0x531b59d34edc86ec823fbced488b7f733639ec6a)</small>
- <small>0x6e9994e5ba0b67d236f0860ae0b5fe1826d464b3</small>
- <small>daclaw.eth (0x8a2ec4cc1d731bbace15fc5d234690a0788610a7)</small>
- <small>knakamoto.eth (0x0ca1b52abea96d048509e107376ea78424c3a938)</small>
- <small>0x9743f723c8cbd9eea522e9feb2656a0db8457497</small>
- <small>antoinew.eth (0xac4ddaf8fbffba0f1e8c7619720335fd4f03eacd)</small>
- <small>bpinnyc.eth (0x1341df844780b66af4ccc98ae0f34be87eabe1d5)</small>
- <small>parlamentulcrypto.eth (0xc1d51f0594cf70620ad19daecc01fbb2d40fd0ec)</small>
- <small>0xdce2c724d7ac1f668938b459510cbf461511a533</small>
- <small>0x725c219bd321bfd404b240f4b5fe2672bc5f4dc2</small>
- <small>0x5db57b0c0e4a917604ee88110f5a347ad381cadd</small>
- <small>thomas87.eth (0x1d4e1317d147aec6c28eee3d9abbf6a8b9f8e99c)</small>
- <small>el-baghodler.eth (0xe062b15b567083486769c8c65ffb0d6c10f40ac3)</small>
- <small>pipercucu.eth (0x7ccc9481fbca38091044194982575f305d3e9e22)</small>
- <small>ttcompany.eth (0x26ef3689bf05e05ab15728fbc7863a12eb62d2fd)</small>
- <small>supermaro.eth (0x66084506aa68d6607994496c02cbc671bac59141)</small>
- <small>natweller.eth (0xa0edfc6adb23f6abba4f1813db3f3be22e94bf5e)</small>
- <small>axisb.eth (0xfb40932271fc9db9dbf048e80697e2da4aa57250)</small>
- <small>varbal.eth (0xc10fcdcd22482a9b864f7e2835da3cf642cf1adf)</small>
- <small>0x7865a9f3ad5654a2c8c8ab94459b976b69b19e11</small>
- <small>carvalan.eth (0x207b7641073d9d029951994f1e1beaf26898f938)</small>
- <small>logarithmicrex.eth (0x6c46f3f23ed4a070da8d7c1af302d09394efb79f)</small>
- <small>btoast777.eth (0x2fd26e4afc3a6e075090d88ef477fcad01a213ea)</small>
- <small>aviationdoctor.eth (0xfbd39c29dbbbe1f3e563e2a8233262c29040efef)</small>
- <small>0x38c2328264247b46181b0a4f22304bf7f234822b</small>
- <small>lolclark.eth (0x7f2049f69eabc4bd865fe8edf21cb8019cc7ec8f)</small>
- <small>0x77a4731050a13c61765db21a9d557282b111708f</small>
- <small>dropxtor.eth (0xf8378bfb1e38d1d8b9799342aaef9016fc52137a)</small>
- <small>0x744a3be37446576e9bc95966a170e65a32cf40c0</small>
- <small>ljoses.eth (0xb657201092ff87993101f3d009184b004e16ac52)</small>
- <small>dzbtceth2008.eth (0x9c7fbad18b1b87f49aef35aa59ecc3d20431a539)</small>
- <small>spb465.eth (0x5ab21bc4947881a74bb51f4d93e3463613fce420)</small>
- <small>fuiny7.eth (0x586cfe79e3bea3830c0a1874273ed563ab23c64c)</small>
- <small>alec.eth (0x049569adb8a1e8a9349e9f1111c7b7993a4612eb)</small>
- <small>0xfb441a232d4adbff67d4c2f07c4054d38c45dcd6</small>
- <small>omg676.eth (0xff1075a7a5a66eb5f137800bee6e4b7dc6a0851e)</small>
- <small>0xa4bfa0d02f902cc605f62cd8ff5bf8ea76b46cb7</small>
- <small>rizzn.eth (0x7bfca252bff95f218eca93f5d042b85d7195fa6a)</small>
- <small>rizfam.eth (0x57ed4352d28fd437e86fc9bd54ba13594f9d75c5)</small>
- <small>onlyfan.eth (0xa2113f1e9a66c3b0a75bb466bbbfeeec987ac92e)</small>
- <small>emiliosilva.eth (0xac1c5131f0a85eafaa637a1ab342ed8e7771212d)</small>
- <small>dukeboles.eth (0x65062a40a475fdcff211d3a32a1a66aab3613196)</small>
- <small>88bet.robots.farm (0xfd7bd29e1050932829c1fc080ea42d7394c42847)</small>
- <small>0x9db0fdf95162af34f1c62dfd529c9e026daf4c00</small>
- <small>fognft.eth (0x7138bf61b28f0ed9b40af7ef58e4e8a1e4018a60)</small>
- <small>0x0199a080786b40bac724b3b2d7c24b0e853c1eec</small>
- <small>brunitob.eth (0x7ff8b020c2ecd40613063ae1d2ee6a2a383793fa)</small>
- <small>spacepunk.eth (0x2f34dfb91116c5f56aeb444fd18e7ef0d8158f7b)</small>
- <small>31310.eth (0x579187e891ff94fc7401d71110abd193409a1671)</small>
- <small>osmium.eth (0x852d85c6e64872d684007c173092cffbaa332373)</small>
- <small>tim-clancy.eth (0xbe4f0cdf3834bd876813a1037137dcfad79acd99)</small>
- <small>cedwards.eth (0x7e9a5f016e1673334352c2906ba23d425f5db896)</small>
- <small>thibauld.eth (0xb81e88279f3208001aeda20689d3e5d818758dbf)</small>
- <small>macchiavelli.eth (0x9a80b66902b2053fee6d3afbef84d9cc0bd5c563)</small>
- <small>jamescarnley.eth (0xacf4c2950107ef9b1c37faa1f9a866c8f0da88b9)</small>
- <small>0x3f978fee9c9af54257dd52b754ae5167d842a109</small>
- <small>uisce.eth (0xb2b9bc63d475009ccc34956f1c733342be60a6b6)</small>
- <small>freetib.eth (0x4d0fbd8714b3a6eb073f13adef0f3774fbac8a98)</small>
- <small>payonir.eth (0x2cea91416b0a752bf9a4b407ff46206d67ccd413)</small>
- <small>grooverbr.eth (0x9067a7a6112ed0af234685745bf110739dd44e29)</small>
- <small>monem.eth (0x0a7b367ee82e8a77fb2273f37848d4b8ad77bb57)</small>
- <small>electrodiva.eth (0x6f0e489bf330bbda917d23bdc1f584b49f42322d)</small>
- <small>rexkirshner.com (0x3ef3bea86796294c03af8ecacb7edebe1c1bd273)</small>
- <small>robinhoodd.eth (0xe8a312c5842406b2060c36c52a375472183b9505)</small>
- <small>poap.eth (0xf6b6f07862a02c85628b3a9688beae07fea9c863)</small>
- <small>leighm.eth (0x4af2470530bcf0a46c26fe4ff1deff2449d547e1)</small>
- <small>fsangui.eth (0x40f750dc45baf5591af9364c498dbe55eac8f0d6)</small>
- <small>gyunikuchan.eth (0x07726d7e4ed80c8c64a8dd27e64f876bd4225744)</small>
- <small>0x26113b026cc51fe50a7db7991c6dd42a61b5876b</small>
- <small>npiscopo.eth (0xbba140ea9688c318f26c45cf0670bacc79ede9f2)</small>
- <small>stragos.eth (0xcb895dfa8808d0c5a900ced39da485ddc0bf31e9)</small>
- <small>tocatlian.eth (0x150232706e0957b94b5f6540d877ce213b45646f)</small>
- <small>brechy.eth (0xd17fdba23ced5983483f70cceef5fd53e0869ac3)</small>
- <small>wuestenigel.eth (0x2cf84928261f655a47d04ec714d3bedf9375de46)</small>
- <small>0x3e0327b8ab0c674960c7b96fc70b8e07c20da265</small>
- <small>burner.logrex.eth (0x787c4335d9ced27172dd9bc8ac8d54ad4b3e3672)</small>
- <small>frogatars.eth (0xb6bfdaf36a2a74992e52eb8843675f36c83cd838)</small>
- <small>spartansolutions.eth (0x69da95d6a8139508c2053e7bd07628f83d3f9d60)</small>
- <small>xoreaxeaxeax.eth (0x244fb89ed818fd08c1cd468e904a6ed065f25121)</small>
- <small>peopleyun.eth (0x4b886d3eea50f46624953935adc0414008888888)</small>
- <small>0xmhan.eth (0x16f5cccfd730157f1f1758822af04a970004896f)</small>
- <small>newshop.eth (0x37ea22d0f551aa66d54605592b672f385b713dc4)</small>
- <small>bayc8898.eth (0x82bce1f54740f242a4a432384d356a67ec9314a5)</small>
- <small>0xb5ee21786d28c5ba61661550879475976b707099</small>
- <small>ninjahattori.eth (0x5b8eba0b8fafa9d92ec667d7440d5ac3e9d574ce)</small>
- <small>0x097a877ef27b1d7d0c63d10db3eefc3753aaca7c</small>
- <small>guide42.eth (0x4ccc2acdd43811ce928cef7371fc95daf7418631)</small>
- <small>0x50344c33a67eef4d56a48d3ee5ed40c1908cf756</small>
- <small>0x23410b4c3f038205ddb464092779439f06644a29</small>
- <small>fegen.eth (0xbe51437cab7360182ac04f64189ce28f6d69f355)</small>
- <small>wiseadvise.eth (0x43d24481877e99b4cab78102eb37441c60701674)</small>
- <small>elena7.eth (0x6ecd2bdfed2f9468433d23728d4ee6ff0b162040)</small>
- <small>katarin.eth (0x95b46e01d39227bc927a43f10edbf5d5de38946f)</small>
- <small>kajtjohn.eth (0x585246b49266ce8be0904762a405a73591d8ac8a)</small>
- <small>0x269ba7cb7421b63b87439fef1d1ee52262234926</small>
- <small>britten.eth (0xf6868a79e20a48eff2bd7688402cc5ea40133883)</small>
- <small>atomiks.eth (0x83e88b10f8344eb62b64d681d75353f818731118)</small>
- <small>andre5.eth (0xff8002ee7175c56e096d824e3525d0a8f4b0b4a5)</small>
- <small>atom3.eth (0x1907353f971aae5a0f8407b02928da80671f7ed2)</small>
- <small>0x3fc45ecaaeca795717dc031eb15ca15d8ae93f6d</small>
- <small>oleg5.eth (0xcf063e688c615e8b99a24b8d2dd36206d42ccb9d)</small>
- <small>hugo-dc.eth (0xa41aa923a21600a918c99bf94d34bb10758b995c)</small>
- <small>0x153e0d2b8433b4afe01aa22d7837d8df31bec3aa</small>
- <small>0x65268d4fb73544b6056fa4f4bf20fc90e0b12a80</small>
- <small>0x314d2dc617c77b76eacea2e3c28466979069f7f9</small>
- <small>shokus.eth (0xf4721923947359e21256c9bd2768c6fd7b471ec1)</small>
- <small>taylorhaun.eth (0xa92e8d7667faf4527476d12e042399607b974637)</small>
- <small>0x1f62dadfb5995c1355c23c5ac3bc4bd1a9130897</small>
- <small>velmart.eth (0x0299c0efefd4425f0dec33a2946d485abcf95812)</small>
- <small>virdam.eth (0x75dedcad80f38df7f990aad7132129b0968bf613)</small>
- <small>aceofrare.eth (0x7f37cb4e1ff71193175b11c16faa7d97aa851876)</small>
- <small>0xe4f499a49ce43f9bdae885f9b9deb0a58df2db05</small>
- <small>zhaoyilin.eth (0xd291749fd9097bd3bc64846824e40aea1109fbb8)</small>
- <small>highplains.eth (0xb4845049cf818dccd320eb715c1a475b0cffa1c3)</small>
- <small>highflyer.eth (0x5f561eb8b4380886bd3bbdc87fb4c28c0353b71a)</small>
- <small>0xf1cf3dc0114bde6c7ee116a0db862e9a9e924431</small>
- <small>mrchin.eth (0x9d24ffae911f1f84f3fc9243e908ad7108b6ce59)</small>
- <small>superphiz.eth (0x399e0ae23663f27181ebb4e66ec504b3aab25541)</small>
- <small>woh.eth (0xe7b69c2263932289748b322a597ebf93208b61ed)</small>
- <small>tenobrus.eth (0x6e9011b8dfe86e2ae8a886d432e4a4c78c85648e)</small>
- <small>xelor.degen.eth (0x7d7bc314a053752425e3e019a1c6c5b5b428d699)</small>
- <small>0xf3d04143249f96ae002d24f5d1f4e41318b14736</small>
- <small>lumpi.eth (0x21cec6f17223f7fda84fc08e54d70072c656f508)</small>
- <small>ieperen.eth (0x2bc2ca2a7b3e6edef35223a211ac3b0b9b8d4346)</small>
- <small>yeysus.eth (0x74839f2ff3bb6f98e5f120329a76a89f52b95dcc)</small>
- <small>0x775ff530193cc17f916dbcf94037ca441ad1f0a5</small>
- <small>timbalanb.eth (0x87b7f62ce23a8687eaf0e2c457ad0c22ca3554bf)</small>
- <small>ipmy5.eth (0x4a24fd841e74c28309bca5730b40679e18c5fca0)</small>
- <small>harchy.eth (0x71ea92992a66d8f82b31893ca46beeb169b8650b)</small>
- <small>xofee.eth (0xff141bfc450c57ad84ebafbd09ffa94a268a7aae)</small>
- <small>bo55bitttt.eth (0x8fa3aca9c712f3f582c8c6053e465c3f4db3cb83)</small>
- <small>nixorokish.eth (0x04c0cd38b8c203b14ef2b7b8d736d69b938aff71)</small>
- <small>0x1e00000000cf8ba83e0005c59c1bf1c4682c8e00</small>
- <small>validator.eth (0x82eb45562f991329ed2867f43fc60f0ba52c3dab)</small>
- <small>jorrian.eth (0x528d3cf64e11786a7cca7a540af59fd2d51b08f6)</small>
- <small>web3isneat.eth (0xfb3cf0144a4951d066c608f71cff389dda7d6f8c)</small>
- <small>coincashew.eth (0xcf83d0c22dd54475cc0c52721b0ef07d9756e8c0)</small>
- <small>ktlxv.eth (0xa270f5649a42fedfe66ddb3b0b50bebae1e3ddb0)</small>
- <small>lucas-poapfr.eth (0x14fc0be8e90ab768226cccf952506ce00bde5029)</small>
- <small>austonst.eth (0xbd56efc637f8cb7133e304b3f929df9a6fa35468)</small>
- <small>ipetkov.eth (0xe6b5a31d8bb53d2c769864ac137fe25f4989f1fd)</small>
- <small>frenchy.eth (0x08f7fd04e76dac7e4d9e343e0b5510379f5bba48)</small>
- <small>0x7245f40e9d4193be5c15510f6f7677735a9a2b63</small>
- <small>0xyfy.eth (0xe36bd8c15a83b89e2e49806d7312846069755c63)</small>
- <small>afo-wefa.eth (0x2aa64e6d80390f5c017f0313cb908051be2fd35e)</small>
- <small>seamonkey.eth (0xa721da3d06813e764e94a23e377cc3e1729fcfd5)</small>
- <small>jaybuidl.eth (0x74199ddac9607a3a694011793f674fa1e0d0fe2d)</small>
- <small>rajeev.eth (0x7e026a0c061382b0f5935a90bc7324ab0a5a3acc)</small>
- <small>waqwaqattack.eth (0x2600846f4401ae10ca760604036a891bb896649e)</small>
- <small>gettingsats.eth (0xfb7397832cadaf2685c7704012648e7cde23ce60)</small>
- <small>lakersgirl.eth (0xb6e6a1b40fea980f67d77c095e0249936b4a394a)</small>
- <small>tricky.eth (0x368a2c0060f76b965f184a6d280a82a53b6434f8)</small>
- <small>0x-ql.eth (0x3c7676976600c90c8d106786d84bda4369f872a8)</small>
- <small>illogicalmountain.eth (0x7747ecc4a8022b08c94fde95ea4fd41f0a38f586)</small>
- <small>ultrasoundmonkey.eth (0xf2c16ae7887450ce0018cdbad26cfdbab183ffee)</small>
- <small>0x51318c2f3e7d9735eae7e9c9838bb972742470e5</small>
- <small>ericdefi.eth (0xf505ca986070c2dbd4e46b74ac04be85a18a0766)</small>
- <small>d0ck3r.eth (0xc0f6bd9f0be7e08b51f65b82fc95a19df826f0fe)</small>
- <small>davidcann.eth (0x587e56d974988ab20e118d429e22113f7913aec0)</small>
- <small>norin.eth (0x3a63717548f60eec71bfe86eec55cb1ba1f554ab)</small>
- <small>pawelpokrywka.eth (0x4eb9eabd74d2077cb2016a65a435cff7508a3795)</small>
- <small>vetinary.eth (0xf6210b4bb2fe841630eb50001e688c4bc058b602)</small>
- <small>blask.eth (0xa7d03101a0024a6ce3d094076535b15c0915e23d)</small>
- <small>thewizardbehindthecurtain.eth (0x1200eb4fa3df9903fc6eff1d7a4a5d17502329b2)</small>
- <small>meytab.eth (0x002153708f11f2651215059eea30820ee4d49ff3)</small>
- <small>birck.eth (0xb170a41f2523220a12f84f17a54bd31953d98027)</small>
- <small>ferostabio.eth (0x9b29b5fc995b7f724f6fe0b0f78b78767d32dca4)</small>
- <small>grandad777.eth (0xa4cf2fbdb8c86492467787628dfa351c8d432929)</small>
- <small>hanniabu.eth (0x0194325bf525be0d4fbb0856894ced74da3b8356)</small>
- <small>schibbol.eth (0x5d787c33a3c7293e563d0586d06e84e83ea69e05)</small>
- <small>dentonino.eth (0x0479ed62f95dc25cdb874dd54a17cf31f30321b7)</small>
- <small>wearealldegens.eth (0x8d580b7c67a055656a4d23bb8d3f647855156585)</small>
- <small>cryptoreumd.eth (0xa8f0048a0d1a04663ca5010d0beac5bcaeea0eef)</small>
- <small>pecunia.eth (0x95ad8360fe25bc9fb573d10b42f76f1bf34669af)</small>
- <small>morepoaps.eth (0xf36700ff798394c4a58fe861a4661f5489d90735)</small>
- <small>sandiforward.eth (0xf0b919d83e22a9faa8d3277855eef3245daedfad)</small>
- <small>leahgrace.eth (0x7adede034b87cd1daa69ae14deb3999c4a534013)</small>
- <small>abra.consulting (0xf1659a2fd5007192314f9676e6a4a39fd1202160)</small>
- <small>santteegt.eth (0x224aba5d489675a7bd3ce07786fada466b46fa0f)</small>
- <small>0xf909a844a76b62c8fa422f81ce219fcde95990c1</small>
- <small>fufuprophet.eth (0x56c09caf7a77d5d254dae3438bb843a1ffd06aa2)</small>
- <small>danr.eth (0xcd9ac538f57d19aeebdc563905ae05fb828ab36e)</small>
- <small>michaeldepetrillo.eth (0x53f54b3fc66831aff6900a92c787809d7adbe91b)</small>
- <small>0x9214538de3a30e479df950923bd6bff9b835c619</small>
- <small>0ywallet.eth (0x9c79ec067e6b61a5f9dc70007a8197984dec542c)</small>
- <small>flyguy.eth (0x23fc0a44b875790d4efd7e785495c556ca4c815c)</small>
- <small>mysticryuujin.eth (0x8ae6422631292c31aeeb2efe154d6326f703f46b)</small>
- <small>dolfen.eth (0x0b8e5bdbb5b8d83af32d3984ba9bfae635edf156)</small>
- <small>thaslim.eth (0x3d68bcbc90d45d2e37bf751cb839b9182049b483)</small>
- <small>fredhead.eth (0xfc340dd7e40dffdd47e513652ca4bb51131a1689)</small>
- <small>haurog.eth (0x1c0accc24e1549125b5b3c14d999d3a496afbdb1)</small>
- <small>egk10.eth (0xc513f38b2a6457e75c6de1f95b60f9f318a34ed4)</small>
- <small>rsrosabio.eth (0xb3313b023e68cda95d7b625200e1b0fe6335a0c2)</small>
- <small>andres.avalle.eth (0x945836b8345764cbde363b9209d3e0338cb83ffe)</small>
- <small>keyso.eth (0x43930ff04d18a5b59805151c1eb403c55870641e)</small>
- <small>shufro.eth (0x599abe13e88f1045e3aefe02a07f7bafc0c76b76)</small>
- <small>greywizard.eth (0xfa731c3f64bf97f528292b137faf0abb14da3b42)</small>
- <small>zhardi.eth (0xcdef2a2e16027f7fd6b3cf1f5b8ea66b0a5762ab)</small>
- <small>cypherr.eth (0x0df5ba52e8c055950aaaf5fcfe829020e898ee60)</small>
- <small>arthursw.sismo.eth (0xdf29ee8f6d1b407808eb0270f5b128dc28303684)</small>
- <small>bbroad.eth (0xdd31db93082a3a71b98d37ba26230f8734bd63c3)</small>
- <small>cardno.eth (0xdb5dd352527539b7c3382bd4b5693e116d09fb9b)</small>
- <small>jonathanmeyer.eth (0x252eaf4e79410f7d67a3869585fc7b6336c825db)</small>
- <small>0x581b3d2cdcd3911d9bbf503550c3f6c1f3c997b1</small>
- <small>endpoint.eth (0x42725a485c4dd073a3c15895c216acb15872abb8)</small>
- <small>calamenium.eth (0x37efa76d983911e833d1ba9044d682a96a6c0eee)</small>
- <small>mrdan.eth (0x47f80003f5dfa14c12d25dd52c2bbab9f206504e)</small>
- <small>0x6263eecb3db6f28f96377786c017623bd53bb2a2</small>
- <small>hannesrohde.eth (0x3769092dbfa6eb34434fb5b7cf0eb06e710728f3)</small>
- <small>greenonions.eth (0x9f679ef626b341afe058b40058e115ce208a3d2b)</small>
- <small>a-p-p.eth (0x69220592ac4b00784d3c0af497e261b4cd722aaf)</small>
- <small>nokcha.eth (0xcc634ad49a8685d5247313fa26e961215c0bbf7f)</small>
- <small>italoa.eth (0x66805d8b82664acab4cbe0c0498889dde9af7841)</small>
- <small>glorylab.eth (0x5afc7720b161788f9d833555b7ebc3274fd98da1)</small>
- <small>hekmat.eth (0xd5c9c9679879f4f0e5b1ac254f7ac7fe2416654f)</small>
- <small>kvnryn.eth (0xc91a5bc46be45ab8db7a76d69a8d5c8c15cffff6)</small>
- <small>octogene.eth (0x299c8c6d973506fbf9245d95773d6ca1c5ccbfb3)</small>
- <small>gmanarg.eth (0x78189aa4f41926dc29f9fc155abd48705dc7d734)</small>
- <small>nnnnicholas.eth (0x6877be9e00d0bc5886c28419901e8cc98c1c2739)</small>
- <small>ephemeral.eth (0x0d801699678375e43d14f67453e24f17ebbaef8a)</small>
- <small>pandaelephant.eth (0x121ac669e4c99ef4673b22d57431b3a521292f2c)</small>
- <small>acl77.eth (0x8a8c879d39a74fce0593714956bb7ed048a5c1bf)</small>
- <small>kevinvitale.eth (0x38d8c4703bc5bf24d493fcdc4e52b12ec71b655f)</small>
- <small>eream.eth (0x59822bfbdbb179ef2be0ca35c44d9cf58af964bd)</small>
- <small>thetickeriseth.eth (0xda0b5b93c5b559cd8231cc831c7823a1f3935acb)</small>
- <small>0x95d2ba09182101f577fb21d080fd9bc0d916011c</small>
- <small>beastincarnate.eth (0xa1d5d2d931b532a0503e97f540f65ed256f374e6)</small>
- <small>0xfornax.eth (0xc9ca2ba9a27de1db589d8c33ab8edfa2111b31fb)</small>
- <small>0xbfe4c9d3235475c138a61f62e9e72fad94a3303b</small>
- <small>bxpana.eth (0x09d8270a1de38b53df1f47dec27f377ce145115c)</small>
- <small>pepesza.eth (0x76273dcc41356e5f0c49bb68e525175dc7e83417)</small>
- <small>legac.eth (0xe64113140960528f6af928d7ca4f45d192286a7a)</small>
- <small>salmanneedsajob.eth (0x4df83971f6f1bfd8d33a2e79584bdfde75f4df60)</small>
- <small>0x3200a0e2b4b22552da86fa759c4b01f961032751</small>
- <small>0xceaacf83cb06a301e27def91c35e0db1370e11b7</small>
- <small>0x6432bf02a54975500ee3924dfe504351e27b968b</small>
- <small>solanafdn.eth (0x6b2b94b69f03f3b3a917778e610f41f1318a5bf0)</small>
- <small>nanwang1988.eth (0x0dd95f64dfa712bba1bbf49da4db03ffa16f0f69)</small>
- <small>0x40f564a83190c27411d08a82ebaac584e585d86d</small>
- <small>dissention.eth (0x3db21da49c538d7de068fa36b3928de7bb819230)</small>
- <small>ex-mortis.eth (0xdaa9acec36f82c3c67ccc77c2ce070910ce87f6b)</small>
- <small>0x54a57e8cee1c443d3090f901e85741e4e3cadba1</small>
- <small>siempre-lo-mejor.eth (0x45bb0aff58536c3bc50e33cf1056573533ece369)</small>
- <small>galeazzi.eth (0x74c9cc52748c079290fc53bb131dd5f1d415e0f6)</small>
- <small>0xeffaef1626c95428834937577bcdce064e20edee</small>
- <small>0x4272b98842dd446809d349c8bd5804c23ec50547</small>
- <small>0x7c150ee04e8b4f0920e2d6c02215f538e8c8da9b</small>
- <small>0x6a4f343b17d5f4e9827f88b09a4dc8504d6fc8d1</small>
- <small>0x6f677c86b67e02de806c8bff847c19e8f2e0dbe6</small>
- <small>0xc6cfaba87137f6bb41d2d83933ca5e861a8aed49</small>
- <small>0x332f1310ffb2e72792511d95f3085295a7784b41</small>
- <small>0xbcb5f95758fee1a28c24a4c4f8473896f57f6a56</small>
- <small>degendemon.eth (0x7196fb7f9f1dda42b142db8cfebc28ec77a3f2a5)</small>
- <small>0xc5ee54cc6ca3cd83de98151c3d686ee43baa54d3</small>
- <small>0x0d9ae6856e9dd356487a5641888bd16b0217d0c0</small>
- <small>0xab9367cc5af6712068fed0323b595c4f153eb050</small>
- <small>0xeb79bf1c0b55d2b852a8ad8b8fa5e8128a209e0b</small>
- <small>beiyu.eth (0x3bcd6a2d7215605e87f792472681c0b1a9f6662f)</small>
- <small>0xboniex.eth (0x972351f4ece9b2f8b2f19ea98355014d66969fe0)</small>
- <small>0xdaefeefbef7b69d258ccfead4e909fe174ad69be</small>
- <small>0xgery.eth (0xc68f177ac0465c51e6cf37cb4068142802f69a78)</small>
- <small>0x7578060f71e71a5788783272d82339859cf71754</small>
- <small>chuaken.eth (0x3c4ab48a4d03d04df10f34098bee869e5495aaf5)</small>
- <small>olgali.eth (0x0be73f8c1246496b0c5c17ec74d4b19a474e995b)</small>
- <small>0x397f304389fbd691fee524a2e5b2b31b243fa407</small>
- <small>0x5645017bab3703da3899a5c072a1f4dbcde1c78c</small>
- <small>0xhumain.eth (0x4c1aabab6bdc1f3fd3b0e28f83a8ec5ce344ef93)</small>
- <small>mase1153.eth (0xd3e480bc04d49c2bb46fa2052cac8422409af517)</small>
- <small>kargolek.eth (0x8d56349fe9096d4c1327c29973c5a1031f8c316c)</small>
- <small>0xdb27c6ce790bbb013f8345e71a83981d6444c14b</small>
- <small>dizzyharison.eth (0x75801f900f7c29fa57a192c4854f38ff9749b0b4)</small>
- <small>0x7f3c168dd11379748eef71bea70371eba3327ca5</small>
- <small>469469.eth (0xc509d36fa17bae3417f2e85aa5ff1a20ff91f945)</small>
- <small>imhari.eth (0x0816293e80b95c10ad22e69125f106b2e4aad960)</small>
- <small>0x3a46a31cfb49c8af3372bb7d86a4230f688f50d8</small>
- <small>ryngo.eth (0xf918b7c74d9716958cc8a0756b0400975da5d4c4)</small>
- <small>og-wallet.eth (0x2c65341c510298b486506039d73d9880c4d49083)</small>
- <small>0xe906c99fb03bbddd92652ee9a0e5655dcc389d98</small>
- <small>c3939.eth (0x9929485d855048f49d518457fb9980a57139bc39)</small>
- <small>grp28.eth (0xf3ba4250c3a2fc5b4dd5a1b394f76037f1fdc28f)</small>
- <small>0x59b503b031ea38d0d6f1625467c44106f392bdf8</small>
- <small>sumit6767.eth (0x3cb227235d1aea15ae11ad6d537dc2cdd3fae7b7)</small>
- <small>boogeyman.robots.farm (0x588351063df2a1a392af0145f43ee42143636bd9)</small>
- <small>amrsaad.eth (0x071fb19eb2d0b1da6fe0a1fa05883b7e159df756)</small>
- <small>0xzktriumph.eth (0xb6f3ad44d393ac801ed6ad6a6740f79353890645)</small>
- <small>0x6c3f9bb9f9b2d812965d7ccb27ac319179e826f4</small>
- <small>0xe6311102aa151f7d290d516e66385ca4bd6f066f</small>
- <small>0x1771d6e9688a40397bec49d1730dfd5cc43c9c6e</small>
- <small>0x06301d579bb635dce97c02aaf189b5ad0196fe9f</small>
- <small>dogemission.eth (0xe74b630b560f9e7b476f27da02c89825d59173fe)</small>
- <small>0xnhlanhla.eth (0x6a765f761588e00c6a1b2b4e5bab33c55e9c239a)</small>
- <small>0xf4ccadc7a560cf0c09a2cdb46200b483b6927d17</small>
- <small>0x2abf56020a9a21d3335e6137796fb3211d31e259</small>
- <small>0x1b5a9c87152518f8577827c00741606019a0a07c</small>
- <small>0x6d9ce5e4bd9083f2d9172280f320453f2bb241f0</small>
- <small>0x665c8347b2b8d545e77344f41f2645daf8c9fa79</small>
- <small>iabhishek777.eth (0xb01bcfbf86c2beb15b40728e7cea062c2200c87c)</small>
- <small>0x37e0eacffec078bb6c9f940988b8f4676ef5739a</small>
- <small>0x185877050ccfda4d1d28cff047fe84237c97405e</small>
- <small>vergielicious.eth (0xb3677f6f3d2f529824a021db5d94b61ebbce8563)</small>
- <small>0x62aa42b94246f87a8c8b60f2f59eac3e7115988a</small>
- <small>0x90d600bd3e4173fb662a9229c4eaa7b4c25611d2</small>
- <small>0xdb8ed29858afe4b7b0f79e3bd9e221432658e297</small>
- <small>0x14ebf38aed8c976d709f645fb1888a66881482b5</small>
- <small>saso999.eth (0x4efa859a120a893d4c34637b5d00262e45bdd76b)</small>
- <small>maxkomori.eth (0x64739640e38f55e6bf1e72a3b10405395f71fb45)</small>
- <small>0x24f391d3d059af33ab1fbdb978171f535d5b0f39</small>
- <small>cp1314.robots.farm (0x45d3d8cf40eb6371e8649d6b87d4dddd932098d7)</small>
- <small>0x7f598401a62a6a9730c9e3b36b83b3742a59f288</small>
- <small>nhy8823.eth (0x300588b284f30439bcb32e8ac85321410074e31b)</small>
- <small>ez360noscope.eth (0x8ddc004131bf9aa59dd14289d33495552bf02b28)</small>
- <small>0x95b49c3935d53d305a47168712c2bb8bfddbabc8</small>
- <small>fathun8803.eth (0xeb92cfdf747b1b18586903aeccb661d15d96a731)</small>
- <small>jojino.eth (0x7f2193f1c47d38f8c49a4643027dd2085d9b353c)</small>
- <small>solidworld.eth (0x70df3db3f2ad7fd503268be338a721e3b265ce51)</small>
- <small>0xbc3c5ca50b6a215edf00815965485527f26f5da8</small>
- <small>0x2a01d9b6de7bcfc41924bc5aeb260dafca1417bb</small>
- <small>0x50002cdfe7ccb0c41f519c6eb0653158d11cd907</small>
- <small>0xd2bc401be1d62b4c8c4ef6618ff1cb93520c2457</small>
- <small>0xc8013a8c09774eb2a008fdcbedb5f640d1dbec00</small>
- <small>0x9e039001566d5675462965752816d3995891d45b</small>
- <small>abuchtela.eth (0x0b58857708a6f84e7ee04beaef069a7e6d1d4a0b)</small>
- <small>hansam.eth (0x5b6df178dc58763327a7ee97c362f55caf96f65d)</small>
- <small>compusophy.eth (0x1964923a14701b45f2e36ff39fb19f40749eb011)</small>
- <small>0xdef131bbcbd1252d12f5441c8fb68048cc29894d</small>
- <small>0x6ea3b97e28f6d65034fb814cda9770a92bea4bf2</small>
- <small>0xca698e19280dfb59084a15f7e891778c483be0dc</small>
- <small>0xab70db05730b5d2cdc033376f3f5edd7b811aea6</small>
- <small>0x8415114de22d159707df61ca345db5f0344fbad4</small>
- <small>0xbae72325e4c05fd398e9876f04189127f808cd79</small>
- <small>0x572c9f24f52f4724f603677d5b4b0fd50c17fa8c</small>
- <small>0x7197e31b6a391ad74c18943ab446c5be93c2d11a</small>
- <small>0xa717cf98256c42d10fed07a372448ef0c75a37d6</small>
- <small>0x0e8f01be57eb52a32679516d77e13f9ca2834f90</small>
- <small>0x069e139ec723eacae4f00be6441a78ad3b76cd13</small>
- <small>0xf52251b188d9968708053456b841fccc40f410af</small>
- <small>0x9c897dcb60c3d23b6bc05cbefd152a4541614fe0</small>
- <small>0xbc0e74f81d8f9b5492697b9d923dc539cc76e084</small>
- <small>0xcb8eaca6c39312ebac05fa8a4a507cede950fbaa</small>
- <small>0x5ba79becb8cd2e82a23f1c4804a73abedb12679a</small>
- <small>0x3210b5fa47d2bb8189033d84ba3a83f235766475</small>
- <small>0xa26fe09f940244cfe432309c1d4d5a64ea54a9dd</small>
- <small>0x9b0d24c7b7383242711a1ce55ded917d272e5fe7</small>
- <small>0x31d2737adf35a6981546b4da644ee64973cd4fd8</small>
- <small>0x1130742327c7f79bb686bb2e1850bbfa717771d0</small>
- <small>0x20ac4ed3fc91ab0403f3dbfab70acc2d4a390948</small>
- <small>0xd47dee5fd620ecbaad4c26fb7b78315f85c6b20e</small>
- <small>0x717ca332674e97d12ed92406d74d4db244779992</small>
- <small>0x9923f6026d95e6b17ed09237d25dae2c71e6ee39</small>
- <small>0x09350f89e2d7b6e96ba730783c2d76137b045fef</small>
- <small>0xf4153be482582e4cd542e2214745a5d3ce5db128</small>
- <small>thebasilisksherald.eth (0x759a159d78342340ebacffb027c05910c093f430)</small>
- <small>0x6ed6a30f2c731f92742dd91971f3bf4626a02b97</small>
- <small>0xa750f74cc4e31072637a7f3713470b722f4df445</small>
- <small>0x4d1208ffcf80c8a9f3258d2fdc32bb19d7f631bd</small>
- <small>0x33357cb52f970e18c62f7d3d060a1b3a7e27329e</small>
- <small>0xe155e73a7653daa34ece4bac00284fd55e3562d8</small>
- <small>0x0d98f710c1cc870b23e4b95e3d2f80f85e33c317</small>
- <small>0x5a40c978e37d889bdc545e90dfa6cf3e18fab1f9</small>
- <small>0x4678b3a2297480a1555464e9df8e2d3896e65cb8</small>
- <small>0x190fb7ead87698569f43dc40dc63b73e7b2dba12</small>
- <small>0xb5e4c990e8d9e87e336da7666fd527df71da9cc7</small>
- <small>0x7e70ca092167cee7bb0753dcba32eb77513e5d0b</small>
- <small>0x8fdc70015562f288cddcafee5dfbc9218a695e9a</small>
- <small>0x41bf11e307426c750b84a160891d09a2751cbaa5</small>
- <small>0x48663b195e8e1d89c9fbb490143310eecffba59b</small>
- <small>0x6eaa212593a47be5b340ceca27f99b71c69db69c</small>
- <small>0xbd965811e81d09bf0b61998985a37a0cd04a816f</small>
- <small>0xbc7331256ef9a520a9fd3752450f96d0db87f78b</small>
- <small>0xede46dcf3ce3273c8ff532458950d1a8c6ea23fa</small>
- <small>0x504c7d5da407acbc9b707ecef98ffa2849b2bd0c</small>
- <small>0xbd0c8c81a47a16d28e25445b0125a5f99cdbe2ef</small>
- <small>0xdd7f998ce5eb2864ef13625027b34d457040e5a1</small>
- <small>0x05f99b98549b4feca2b3e5c57ade08e9aa543405</small>
- <small>0x35e8fc7706f4a856159007a255ee957972098658</small>
- <small>0x7ba02ea2ccc80c4f523ee8186a342077507dabcf</small>
- <small>0x562bd66f6bfcb9cb95e8477f7fcdae650c2b9d98</small>
- <small>gami.eth (0x387a161c6b25aa854100abaed39274e51aaffffd)</small>
- <small>0x13143a131b89a51f7211e6bd2ce04540c453c68e</small>
- <small>0x35a559e1e41b1137c02a6d683663a5564fb9570c</small>
- <small>donation.eth (0x6e8873085530406995170da467010565968c7c62)</small>
- <small>0x32e89580e6173f0c447c1e1bf73b645a66f36743</small>
