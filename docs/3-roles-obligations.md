## 3. Roles & Obligations

There are five unique roles that the Guild will require to operate, each with their own obligations.

### 3.1 Members

#### 3.11 Members as slot holders

→ 150-200 individuals who have qualified for placement on the split contract. This is just an estimate, the actual number may be higher or lower. There is no cap or target for number of slots. Slots can be set to any address, including their own, a charity, or another split contract (make sure it can be claimed from).

##### Qualifications

Members should be committed to Ethereum and its ethos of decentralization. The contributions of qualifying individuals should be:

- fully open source, ie. available for forking, modification and redistribution
- continuous for at least 6 months ahead of inclusion
- released under permissive licenses
- part of the protocol, not built on top of it, eg. a specific client implementation vs. an application
- a benefit to the broader Ethereum community 
- dedicated to permissionless, open access to Ethereum

It is possible that eligible individuals may work on a team which has a token, has VC backing or gives equity. Members should expect these guidelines to change over time, to get more explicit in some places and more permissive in others.

##### Obligations

Members will notify organizers when their contributing status changes, or when the work that afforded eligibility breaks one of the guidelines above. At least once per year, members will prove ownership of the supplied address: members can claim vested funds or sign a message with their private key. This limits the impact of compromised wallets or lost keys.

Members are strongly encouraged to participate in the Guild beyond the two requirements above. Without deeper member engagement, the Guild will not reach its full potential as a voice for core developers and the protocol broadly. The Guild may have trouble growing the membership or evolving norms if only a small minority are engaged in consensus building. Other modes of participation include:

- suggesting Guild improvements
- refining eligibility requirements
- vetting specific potential members 
- managing the discord
- helping with comms
- outreach and awareness to potential/continuing sponsors

#### 3.12 Members as Curators

##### Qualifications

All members are qualified and encouraged to participate as curators: members who maintain the list and weights of eligible members.

##### Obligations

Given the ambitious scope of this mechanism and the significant trust afforded by sponsors and the community, the associated obligations are quite modest: make sure the membership accurately reflects active contributors. This ensures the legitimacy of the mechanism is maintained, and increased, in the eyes of non-member participants. The Guild is a garden which tends itself. Each of its members are peer stewards of a self-regulating plot. When the allocation of nutrients, sunlight or water become imbalanced, it's up to the membership to recognize and adjust. Members should only commit if they are aligned with this expectation.

Self-curation is a crucial component of the project. While other public goods funding mechanisms have used external councils (eg. Optimism's RPG) or the donors (eg. Gitcoin) to curate the beneficiary set, this wouldn't work for our purposes. Any external council would have to be deeply embedded within the core protocol sphere in order to properly curate, to the extreme degree that it would become impractical to do much else. Similarly, Gitcoin donors wouldn't have Instead, we will leverage the perspectives and daily interactions of people that are already embedded, the core contributors themselves.

Practically, this means signalling to the broader membership when they, a team member, or an independent contributor have changed contributing status, eg. joining or leaving core protocol work. Members should have regular contact with new beneficiaries they propose. Bias or conflicts of interest should be disclosed, if they exist, eg. where one is an advisor to the other's side project. 

In addition to curating existing contributors, members should consider mentoring through something like the Core Developer Apprenticeship Program (CDAP) to surface a wide variety of contributor backgrounds, and help them on their journey. As global internet infrastructure, it would be a disappointment if Ethereum forever remained the domain of a small, homogeneous set of developers.

Finally, we believe it is incentive compatible that curators are drawn from the beneficiaries because:

- adding ineligible beneficiaries removes future vested value from existing members, ie. they will more carefully consider potential members and their contributions. An external council would not feel this constraint so directly.
- the mechanism *must* accept all legitimate contributors, which prevents the set from ossifying or getting captured. Potential members which fit established guidelines need to be added to maintain credible neutrality to participants and sponsors. If sponsors think that the set is not inclusive enough, they will not feel obligated to begin or continue their contributions.

#### 3.13 Members as Signers

Signers are members who act as key holders for the multisig which can update the membership and their weights in the Astrodrop contract. These should be well regarded Ethereum community members. They should agree to follow strong security practices, and make themselves available to sign and deploy membership updates at the agreed upon cadence, eg. quarterly. Similarly to curatorship, overlapping signers and beneficiaries allows for more efficient self-governance vs. the overhead that comes with a set of external signers. It should be noted that signers never have custody over an vesting or vested funds. To learn more about how the multi-sig and the Astrodrop contract interact, see section **4. Smart Contract Architecture**.

### 3.2 Sponsors

![](https://i.imgur.com/LP1jvBg.png)
*[Kei's tweet](https://twitter.com/keikreutler/status/1461646035491692550)*

This group includes any project which depends on the continued maintenance and evolution of Ethereum to be successful, and is interested in aligning their capital in celebration of the sometimes thankless work of core protocol.

Ethereum has a rich culture of experimenting and nuturing radical new ideas. It's what makes our community one of the most vibrant in the space, and we've seen many DeFi, NFT, DAO, and L2 projects build amazing things on top of Ethereum's credibly neutral public infrastructure. However, none of what we know as Ethereum today would have been possible without the consistent efforts of committed protocol maintainers. Therefore, it would be ideal for current and future contributors should have a stake in the successes of these projects. This produces a powerful incentive alignment between maintainers and those that depend on their work. To accomplish this, we invite sponsors to contribute:
-  governance tokens
-  recurring protocol fee revenue
-  interest bearing tokens
-  NFTs that have been fractionalized into ERC20s

In order to be effective, we suggest that 1% of total project tokens should be allocated to the Protocol Guild - see **7. Case Studies** for more information on this.

Finally, it should be noted that just as protocol maintenance is an ongoing effort, so too is sponsor support. New Astrodrop contracts will need to be deployed and sponsored periodically to maintain the future incentive to contribute to the protocol. 

### 3.3 The Community

Even when the Guild is live, it will require consistent efforts from the broader community to ensure its long-term success. This includes application developers, users, investors, enthusiasts, and builders of all kinds. They will be instrumental in:

- introducing and maintaining public norms about contributions through regular advocacy for the initiative
- writing governance proposals to get protocols to sponsor the Guild: even if protocols are aware of the split contract and on board with the norms, there may additional work needed to follow each community's process.
- ensuring the curators are responsibly neutral in their management of the protocol and its quarterly updates. If this is not the case, it is the responsibility of the community to call this out and advocate for change
