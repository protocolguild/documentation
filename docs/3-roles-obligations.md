## 3. Roles & Obligations

There are four unique roles (3.1, 3.2, 3.3, 3.4) that this mechanism requires to operate. We outline any obligations expected as well as recommendations for conduct and operation.

### 3.1 Members

#### 3.11 Members as Beneficiaries

→ 150-200 individuals who have qualified for slots on the split contract. 

This is just an estimate, the actual number may be higher or lower. There is no cap or target for number of slots. Slots can be set to any address, including the beneficiary's, a charity, or another split contract (make sure it can be claimed from).

#### Obligations

Participating individuals have an obligation to notify organizers when their contributing status changes, or the project they are working on breaks one of the guidelines above. Further, participants should commit to semi-regularly withdrawing vested funds or signing a message from their listed address to prove access to the private key. This limits the impact of compromised wallets or lost keys.

While it is encouraged, members are not required to participate in governance.

#### 3.12 Members as Curators

#### Qualifications

All members should agree to participate in curation.

#### Obligations & Guidelines

Given the ambitious scope of this mechanism and the trust afforded by the community/donators, the expectations are relatively minor: make sure the membership accurately reflects active contributors.

The Guild should be a garden which tends itself. Each of its members should be peer stewards of this self-regulating plot. When the allocation of nutrients, sunlight or water become imbalanced, it's up to the membership to recognize and adjust. Members should only commit if they are aligned with this expectation.

In the context of the initial weighting scheme being used (total eligible quarters), this is very straightforward. Members should self-report when their eligibility changes so that their weighting can be updated. The backstop is each team/project, who only need to confirm when a contributor has been added or removed. In this way, regular operations distribute curation responsibilities evenly around the network graph. The alternative should be avoided at all costs, ie. dependence on a centralized few for quarterly check-ins with the entire membership. One member of each team/project (eg. Lighthouse) should agree to be the point of contact responsible for ensuring other members are aware of any significant developments like:

- explaining membership obligations to new team members
- collecting addresses and signatures for inclusion in the eligible set
- migration to a new smart contract
- a change to the weighting scheme

Members should have regular contact with new beneficiaries they propose. Any bias or conflicts of interest should be disclosed - eg. where one is an advisor (paid or otherwise) to the other's side project.

It will be up to members to decide the exact processes for deciding membership and the tradeoffs that exist between these design. To consider: 

- Is there quorum requirement?
- Should members even vote on new joiners? 
- Could there be a vouching mechanism instead? eg. 3-5 current members need to vouch for a prospective beneficiary. If it's found that there is any abuse of the referral system, or the person doesn't exist, or the person doesn't actually contribute then the nominating individuals should be removed from the set.

It should be part of the founding mandate to surface the widest variety of contributor backgrounds, and help them meet the eligibility requirements. As global internet infrastructure, Ethereum would be a disappointment if it forever remained the domain of a small homogeneous set of developers.

When onboarding new contributors, it's important that split addresses always refer to an individual's personal wallet and *not* their employer's. If teams were the atomic unit, all team members would have to agree on whether to accept or decline membership, likely decreasing the number of participants.

#### Other Considerations

Effectively, curators are gatekeepers for the project. Other public goods funding mechanisms use external councils (eg. Optimism's RPG) or the donors (eg. Gitcoin) to curate the beneficiary set. We believe it is incentive compatible that curators are drawn from the same pool because:

- adding ineligible beneficiaries removes future vested value from existing members
- the mechanism *must* accept all legitimate contributors which fit established guidelines in order to maintain credible neutrality to participants and donators. If donators think that the set is not inclusive enough, they will not feel obligated to begin or continue their contributions.

There are edge cases which should be considered. For example,  where the marginal legitimacy lost by excluding a given  contributor is too low to get curators to push for their inclusion. Or, the initial set of curators fails to expand beyond outside of their social graphs, but accumulates enough members to accomplish a state of "good enough" legitimacy. Or, the social norms that build up around the mechanism are sufficiently powerful to draw in continued donations even though it just barely hits the "good enough" threshold. These are all partial failure modes of the mechanism.

#### 3.13 Members as Signers

→ Beneficiaries who act as key holders for the multisig which can update the list of beneficiaries and their weights in the Astrodrop contract.
 
##### Qualifications & Obligations
 
These should be well regarded Ethereum community members. They should agree to follow strong security practices, and make themselves available to sign and deploy membership updates when needed, eg. quarterly.

Overlapping signers and beneficiaries allows for more efficient self-governance vs. the overhead that comes with a set of external signers. 

### 3.2 Sponsors

![](https://i.imgur.com/LP1jvBg.png)
→ *[Kei's tweet](https://twitter.com/keikreutler/status/1461646035491692550)*

Ethereum has a rich culture of experimenting and nuturing radical new ideas. It's what makes our community one of the most vibrant in the space. Many Defi, NFT, DAO, and L2 projects have built amazing things on top of Ethereum's credibly neutral public infrastructure. However, none of what we know as Ethereum today would have been possible without the consistent efforts of committed protocol maintainers. Therefore, it would be ideal for current and future contributors should have a stake in the successes of these projects. This produces a powerful incentive alignment between maintainers and those that depend on their work.

To accomplish this, we invite contributing entities to donate:
-  governance tokens
-  recurring protocol fee revenue
-  interest bearing tokens
-  NFTs that have been fractionalized into ERC20s

We suggest that 1% of total project tokens should be allocated to this mechanism.

### 3.3 The Community

Even when the mechanism is deployed, it will require consistent efforts from the broader community to make this a long-term success. This includes application developers, users, investors, enthusiasts, and builders of all kinds. They will be instrumental in:

- introducing and maintaining public norms about contributions through regular advocacy for the initiative
- writing governance proposals to get protocols to donate: even if protocols are aware of the split contract and on board with the norms, there may additional work needed to shepherd each proposal over the finish line
- ensuring the curators are responsibly neutral in their management of the protocol and its quarterly updates. If this is not the case, it is the responsibility of the community to call this out and advocate for change
