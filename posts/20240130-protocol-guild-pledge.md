---
title: 'Protocol Guild Pledge'
excerpt: 'A rough, quantitative framing of Protocol Guild’s mission is to make contributing to Ethereum L1 R&D economically rational on a risk-adjusted basis'
coverImage: '/emojicover.png'
date: '2024-01-30'
---

*Reposted with permission by Tim Beiko, original [here](https://tim.mirror.xyz/srVdVopOFhD_ZoRDR50x8n5wmW3aRJIrNEAkpyQ4_ng)*

*Important caveats:* *This piece assumes context about Protocol Guild and narrowly focuses on its economic implications. For an introduction to PG, see [Cheeky Gorilla's EDCON talk](https://www.youtube.com/watch?v=ZhopXK6haL8). For a more philosophical read on its role, see Trent Van Epps's article on [Capital and Enclosure in Software Commons.](https://trent.mirror.xyz/GDDRqetgglGR5IYK1uTXxLalwIH6pBF9nulmY9zarUw)*

* * * * *

A rough, quantitative framing of Protocol Guild's mission is to make contributing to Ethereum L1 R&D economically rational on a risk-adjusted basis, while avoiding capture. With our [pilot concluded](https://protocol-guild.readthedocs.io/en/latest/5-initial-pilot.html#) and[ PGv2 launching soon](https://github.com/HausDAO/protocol-guild-contracts?tab=readme-ov-file#protocol-guilds-v2-architecture-wip), now feels like a good time to articulate how and why we can and should get there. Let's call this the Protocol Guild Pledge!

In the first part of this post, I'll unpack what I mean by "Ethereum L1 R&D", "economically rational", "risk adjusted basis" and "avoiding capture". Then, I'll expand on the Protocol Guild Pledge (PGP, for short), arguing that a norm of projects with native tokens donating 1% of them to Protocol Guild is sufficient to provide sustainable funding for Ethereum L1 R&D long-term.

* * * * *

### Ethereum L1 R&D

Ethereum is developed and maintained by a large set of core contributors, with expertise ranging from distributed systems, to cryptography, devops, cat herding and more. They collaborate in the open to define & deliver Ethereum's complex technical roadmap, while ensuring the security of the network is never compromised. Participation is permissionless --- anyone can just show up and start contributing! --- which has many benefits, but makes defining the set of "core contributors" a notoriously hard problem.

Organizations are at best proxies with (often worthwhile!) overhead, and individuals "doing the work" often have the least bandwidth for and interest in self-promotion. Protocol Guild (PG) thus aims to make the set of Ethereum L1 R&D contributors directly legible onchain. Using a time-weighted list and clear membership criteria, PG provides an continually up-to-date view of who is currently contributing to the protocol, and for how long they have been doing it.

### Economically Rational

Working on Ethereum is incredibly exciting and, in my experience, a deep sense of mission permeates the core development community. Funding for protocol R&D work is also in a much healthier place than it was a few years ago. That said, Ethereum core devs and researchers are in high demand: everyone working on Ethereum L1 could likely earn significantly more by doing something else. Even with a reasonable salary, as the opportunity cost of continuing to work on L1 grows, maintainers rationally start considering other options. Relying exclusively on passion, or [status](https://twitter.com/josephdelong/status/1235979765879844864), as a long term strategy to attract and retain core contributors puts Ethereum at risk of ending up in a ["guy from Nebraska"](https://www.explainxkcd.com/wiki/index.php/2347:_Dependency) situation, where only a small set of (relatively) underpaid maintainers are responsible for infrastructure securing billions in value.

### Risk-Adjusted Basis

While there are a number of more lucrative opportunities for Ethereum core contributors out there, an important caveat is that many of them involve higher risk! This is an important distinction: rewards for contributing to Ethereum L1 should be calibrated to the relative risk of doing so. Starting a successful company as a founding engineer will always be more profitable than being one of X00 Ethereum L1 contributors, but the odds of that company failing are much higher.

Protocol Guild should *not* aim to match the expected rewards of riskier endeavors, but instead close the "gap" that currently exists between working on Ethereum L1 and projects slightly farther out on the risk curve, which can offer disproportionately higher rewards. Visually, PG can be thought of as the yellow arrow below, "lifting" the Ethereum L1 R&D cloud on the Reward axis, to bring it back in line with everything else:

![](https://images.mirror-media.xyz/publication-images/m6lzeTOnQP8oIu6KFzits.png)

### Avoiding Capture

Aligning the risk/reward of L1 R&D work with the rest of the ecosystem is necessary to attract and retain high quality contributors. However, it's critical to consider the impact of additional funding on incentive alignment. We want to prevent scenarios where a deep-pocketed actor can single handedly exert influence over a large portion of maintainers.

While this risk can never be fully eliminated and Protocol Guild isn't necessary for external actors to try and influence protocol maintainers, PG being fully onchain at least provides transparency. Anyone can audit who sent what to its contracts to assess whether a single donor or asset is overrepresented. In such a scenario, other donors can then step in to equalize things :-)

By sharing funding expectations across the ecosystem, we reduce both potential influence from, and excessive reliance on, a small number of donors. As Trent explained in [a recent article](https://trent.mirror.xyz/GDDRqetgglGR5IYK1uTXxLalwIH6pBF9nulmY9zarUw), with a diverse donor set, Protocol Guild may even be able to shield protocol development from the pressures of commercial entities who currently employ most maintainers.

Lastly, while this should go without saying, let me be explicit: donors should never expect anything beyond the continued support and development of the Ethereum protocol as a result of their contribution. In other words, donating to Protocol Guild is not a way to shift core contributors' focus to a specific initiative.

With definitions out of the way, let's now dive into the Protocol Guild Pledge!

* * * * *

Protocol Guild Pledge: 1% of Native Tokens to Fund Core Development
===================================================================

### Why Tokens?

In the earlier diagram, most of the gap in rewards between the white "Ethereum L1 R&D" cloud and others is due to the expected value of tokens in compensation packages, not differences in base salary.

While no token is guaranteed to appreciate in value (that's the "risk" part!) Ethereum contributors generally do not get exposure to the assets secured by the network as part of their job. By switching to a role with an only slightly larger risk profile that offers token compensation, they can often materially increase their expected rewards, even if their base salary remains constant.

Protocol Guild being an onchain registry is perfectly positioned to close that gap. Token donations are often suboptimal due to recipients' need to cover fiat-denominated expenses. But, in this case, given the risk/reward gap is primarily composed of such assets, their volatility is a feature, not a bug!

In a way, these tokens represent the surplus value of the Ethereum ecosystem. If a broad enough subset of projects contribute their tokens to PG, core contributors end up with a basket providing diversified exposure to the value created by the ecosystem they support. In many cases, these tokens also confer rights, such as participation in governance, to holders. Projects donating their tokens then ensure these end up in the hands of valuable contributors, both today and in the future.

### Why 1%?

First, why a percentage at all? Denominating the Protocol Guild Pledge in "percentage of supply" rather than "fiat equivalent value" has a few advantages:

-   It puts all projects on an equal footing. A small project donating 1% of their tokens should be celebrated to a similar degree as a large one, as they are making the same proportional commitment.

-   It abstracts volatility from donations. Funds sent to PG are vested for years. By the time they are fully received by members, the price of tokens could have shifted dramatically. A large fiat-denominated bull-market donation may end up less valuable when fully vested than a smaller fiat-denominated bear market one.

-   It enables pre-token commitments. Projects may not want to signal specific timelines for the introduction of a token, but may want to commit to supporting PG early on. A public commitment to reserve 1% of a future (hypothetical) token is then an easy thing for the community to hold a project accountable to.

Now, why 1%? Why not 10%? 0.1%? Something else? Well, for one thing, it's less than [1.5%](https://twitter.com/dannyryan/status/1454065104819916803)!  More seriously, though, here are some metrics to provide context for the amount:

-   Protocol Guild currently has 163 members. Members' share of total donations is proportional to the (square root of) the amount of time they have been contributing to Ethereum. Members' shares [currently vary between 1.16% and 0.27%](https://explorer.splits.org/accounts/0x84af3D5824F0390b9510440B6ABB5CC02BB68ea1/).

-   Ethereum currently secures roughly [200b$ of non-ETH assets on L1](https://ultrasound.money/#tvs). Removing LSTs & stablecoins/RWAs, leaves slightly less than 100b$. Including [L2-native assets](https://l2beat.com/scaling/tvl) to this brings the total back to roughly 100b$ of native tokens whose security depends on L1.

-   Protocol Guild's v2 contracts will have a multi-year vesting period. The exact duration is TBD, but will likely be between 3-5 years, with a minimum contribution period required before maintainers can join PG. For simplicity, let's use 4 years.

Now, let's imagine a hypothetical world where all Ethereum projects with a native token that exist today have contributed to Protocol Guild. 1% of their 100b$ native token market cap would represent 1B$ in total contributions, or 250m$ vesting per year. Across 163 members, this currently averages to ~1.5m$/yr, ranging between 675k$ and 2.9m$/yr.

At first glance, these numbers seem within the right order of magnitude. High-six / low-seven figure yearly compensation isn't unheard of in the tech industry, especially in roles that are critical to the handling of hundreds of billions in value.

However, this hypothetical makes many simplifying and optimistic assumptions. First, it only looks at a fixed point in time. Projects come and go, and maintaining a 250m$ distribution year over year assumes the total value of native assets secured by Ethereum grows by 25b$/yr.

Second, it holds the number of contributors constant. At a certain reward level, Protocol Guild reward may attract a larger number of contributors, diluting rewards for existing members.

Third, and most importantly, it assumes 100% of projects donate a full 1% of their native token. Going down by an order of magnitude, if 10% of projects contribute to PG, or 100% donate 0.1% of their tokens, we end up at 150k$/yr for the average PG member. This is unlikely to shift incentives enough to retain them.

All of this considered, 1% feels like the right number for the Protocol Guild Pledge. A strong norm of projects donating 1% of their token supply, adopted by 33-66% of projects would have this hypothetical at a 500k-1m/yr per member on average. At these levels, the risk/reward gap that exists today would almost certainly be closed.

### Why now?

Protocol Guild is roughly two orders of magnitude away from the numbers hypothesized above. The pilot has been an amazing spark of initial validation and has allowed the guild to lay the technical, legal, and governance groundwork for a longer lasting collective. In other words, [it works](https://protocol-guild.readthedocs.io/en/latest/5-initial-pilot.html#mid-pilot-update-dec-7-2022), but it's now time to scale up!

To get through the [Surge, Scourge, Verge, Purge, and Splurge](https://twitter.com/VitalikButerin/status/1741190491578810445/photo/1), it's paramount that Ethereum retains its best contributors and continues attracting new talented ones. To broaden both the number and the kinds of people who are able to participate as core developers, we need to rely on economic incentives over passion or status.

Additionally, as we scale the reach and impact of the Ethereum ecosystem, we should also strive to scale its values. Values are hard to scale because labels get co-opted and diluted to near-meaninglessness as they gain popularity (see "decentralization", "alignment", and, I fear, "public goods"). Luckily, the Ethereum ecosystem can still coordinate on new ones!

Projects who adopt the Protocol Guild Pledge will help seed a meme whose quantitative component ("1% of native tokens") makes it harder to dilute. If you're reading this, you likely have an overall sense of what, and who, it means for Ethereum L1 R&D to be sustainably supported. It's not guaranteed that this remains the case as the space grows. A future where most notable projects have a "Protocol Guild Pledge" badge on their Github or Etherscan token page is one where it's more likely we'll see organic, continuing support for both core development as well as a public goods more generally from new projects entering the space.

Conclusion
----------

Protocol Guild is currently Ethereum's most promising tool to sustainably incentivise Ethereum L1 R&D. It complements existing funding infrastructure by aggregating the set of core contributors, keeping it updated over time, and funding these people directly.

In order to provide strong enough incentives for talented contributors to work on mainnet long term, Protocol Guild needs to scale roughly 100x. If as a community we instill a norm for projects to contribute to the Protocol Guild Pledge, I believe we'll get there!

* * * * *

*Many thanks to everyone who provided direct feedback on this piece, or with whom I've had conversations about this topic. I've tried to distill all of it into a coherent whole, but what remains are my personal views, and shouldn't be attributed to Protocol Guild, AllCoreDevs, or the Ethereum Foundation. Full disclosure, I am a member of Protocol Guild. Last but not least, a special shout out to ether.fi, who [committed 1% of their token supply](https://twitter.com/ether_fi/status/1752376059394408458) to Protocol Guild ahead of this post even being published!*
