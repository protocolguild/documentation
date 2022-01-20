## 6. Anticipated Concerns

While we can't conceive of every scenario, we've tried to think critically about deficiencies when they've presented themselves. If you see a devious edge case, an organizational pitfall- please join the [**Stateful Works Discord**](https://discord.gg/t8zSZCvf3y) to discuss, and hopefully add it here!

### 6.1 Related to Operation

**Shouldn't one-off contributions be considered for membership?**
- Every mechanism has its limit. The Protocol Guild may meet its at the edges of contribution, where someone has meaningfully contributed to a project, but does not work on it consistently, or produces something  This remains an open question, and might  be considered for a future weighting scheme if there are no major issues.

**Why are weightings not more granular?**
- While it's true that some people are objectively more productive in their work / valuable to the protocol, adding a weighting scheme to a membership this large would introduce complexity with each membership update. There would also be unknown, probably negative social dynamics related how to value the contributions of your peers.
- It's worth a note of caution against heading too far down the path of data and hyper-specificity when it comes to evaluating contributions. We suspect that at least a few possible futures would end up including a public facing component, which privilege people who have previously been working on the protocol.
- They have had additional time to form themselves into the shape the political and social structures are looking to latch onto. Metrics, rubrics breed subtle exploits, entrench power
- Ideally, under any weighting scheme, the margin between contributor profile should not be overly large relative to the others.

**How can members as curators or signers abuse their position of trust?**
- Fundamentally, this is a political tool. In negative outcomes, whoever maintains the member eligibility can influence research areas and interest people have in certain sections of the protocol. Want to get the merge done? Add more client implementers at the expense of other ecosystem categories. This kind of manipulation is unlikely to actually happen as it would harm the mechanism's legitimacy.
- Or worse, the existing signers decide not to honor the agreed upon outcomes from weighting deliberations, go slightly rogue. In this case, we can imagine some contributors deciding to ride it out until the vesting has completed. In other situations, a significant portion of the membership would collectively abandon the stream in solidarity. Or, they could claim and send the wrapped tokens to the burn address as a gesture of protest.

**How can this be gamed?**
- As the mechanism scales, it's inevitable that the amount of attention given by a core group of Guild members will eventually fall, become less thorough. At a sufficiently high number of members, unscrupulous developers might invent phantom co-workers and redirect the split shares to themselves. This is one area where the mechanism relies on mutual trust to avoid abuse. 

**What happens if a large percent of infrastructure contributors decide not to participate? Or, what if sufficient number of contributors join and then decide to leave the split?**
- The mechanism's legitimacy is predicated on broad participation. If enough contributors decline, this may not be an appropriate tool for incenting work on public goods. In the latter case, the vesting would still continue but it may be difficult to solicit additional donations.

**How will members handle conflicts about list inclusion, eg. when someone starts doing well-intentioned but poorly executed work?**
- Eligibility criteria should be given special care, as much as the contract or the outreach to donating entities. These should be communicated publicly and frequently with change history, eg. Github. Any decisions which sidestep transparent processes undermines the mechanism's legitimacy.

**What other failure modes have not been explored in-depth yet?**
- the membership is updated to only include addresses controlled by the attackers. 
- More cleverly, they only dilute the existing membership a little bit, or adjusting the weights just enough to favor certain set of contributors. 
- Members selling early access to their shares to capitalize early into a stream, or taking a loan against them and committing to stay at least as long as their agreements dictate. Web3 "permissionless vibes" maximalist might 

**What happens when enough signers get compromised? **
- This would damage the trust donating entities put into the members, as well as any future efforts to restart something similar. 

**What are the tax implications of participation?**
- We are not tax lawyers, each participant should seek experts for their jurisdiction.

**What's use case you can anticipate wanting in the future that Astrodrop can't facilitate today?**
- lending markets built into the vesting stream available for lending
- programmatically dripping membership
- extensions that let users automate a custom functions like "claim and sell to DAI"
- anyone who donates would eventually be airdropped a social token which unlocks a token-gated core dev discord /jk

**What are some ways that curation can fail?**
- There are edge cases which should be considered. For example, where the marginal legitimacy lost by excluding a given contributor is too low to get curators to push for their inclusion. 
- The initial set of curators fails to expand beyond outside of their social graphs, but accumulates enough members to accomplish a state of "good enough" legitimacy. 
- The social norms that build up around the mechanism are sufficiently powerful to draw in continued donations even though it just barely hits the "good enough" threshold.

### 6.2 Related to the Broader Community

**Will this replace existing salaries?**
- No, this should be a bonus on top of current pay: employers/ DAOs should pretend as though it doesn't exist. Given that an employer won't be able to tell whether they have submitted their address or that of a charity. It would not be ethical to compell charity disclosures.

**What if this ends up being a significant amount?**
- If this mechanism *doesn't* accrue significant funds, then it's not really working properly. Vested donations should be significant enough to inspire new contributors to join core development. However, there should be deeper incentive analyses and the thresholds at which they get funky.

**Why doesn't people just ask for some multiple of their current salary?**
- As discussed in "[2. Broader Context](https://hackmd.io/ANe-MBCgTFSN6qG7drn3zg?both#2-Broader-Context)," traditional orgs will never be able to match the upside that comes from working on a novel tokenized application or L2.

**Aren't donated assets a form of bribe?**
- No. this would be a very inefficient form of bribing, as the large membership distribution dilutes any targeted intent. It would be much more effective to bribe individuals, which can already happen today without a split contract. It could even be argued that this mechanism makes bribes *less* effective because bribes are most effective in situations of relative wealth inequality. By raising the holdings of core developers, they are less likely to be swayed by individual financial offers. Of course, this is completely opt-in and protocol contributors are welcome to redirect their share to another public good organization. Only when there are relatively few donating entities could the mechanism arguably edge towards bribe territory, as it's very clear where benefits come from. Or, if the relative amount donated by one entity dwarfs that given by others.

**What about including past protocol contributors?**
- Not advisable, this would complicate inclusion decisions. The split is supposed to incentivise current and future contributors.

**Will this compete with Gitcoin or other similar efforts?**
- We feel that this mechanism is differentiated enough (ie. forward looking, core protocol focused, vested, biases towards native tokens as opposed to USD) that the overlap may appear larger than it actually is. However, there may be some donating entities that feel like they are already "doing their part" with donations to one initiative and may not feel obligated to contribute to the other. We believe that it's healthy to have a number of autonomous & differentiated funding approaches towards Public Goods.

### 6.3 Culture / Big Questions

**Why hasn't anyone built this before?**
- It's unlikely that one project from the ecosystem would take up the coordination efforts to collect and maintain a list of contributors. If it did happen, the project would eventually find themselves with an immense amount of power as the gatekeeping curator.
- the tech did not exist until now (astrodrop)
- core devs are largely focused on other things to coordinate 

**Broadly, how will this design fail?**
- Believing that voluntaryism and donation-based funding scales sufficiently to the levels this mechanism needs in order to be effective.
- Assuming that developers even want to "self-govern" an asset stream, including its responsibilities and pressures.

**Will long-term vesting lead to stagnation in core development roles?**
- In the sense of gatekeeping/groupthink/capture, we sincerely hope not. There's certainly a possibility that previously effective people may get stuck in a position if the incentive is significant enough. However, this is no different from any other job with performance requirements, crypto or otherwise. If someone is not performing adequately, they will be removed from their job and then from the list. If anything, the infusion of new perspectives as the set grows will be a healthy process.
- With the conclusion of each vest, everyone starts again at 0 convincing the public that they are the legitimate heir to the Protocol Guild name and legacy. Competition for scarce political purchase means there will be alliances, intrigue, rebalances. Any one can copy this blueprint and create their own competing versions. We anticipate that even the initial cohort now will unavoidably have its own political undercurrents! A blooming society actively actively evolve their systems periodically to avoid settling into patterns too soon. So we should continue - see the approaching Leviathan peeking over the horizon, pull ourselves towards well considered implementations, norms, visions. Subtle frameworks like this interface between the social and the economic resources a group traffics in. They are dense confluences of swirling power - what we're doing is preempting inevitability.

**Other than the amount of vested/vesting funds, what are some measures of success?**
- the frequency that someone joins or remains in core protocol work and citing the Guild as a compelling benefit.
- the number of former core devs in defi we can recruit back
- the number of completely retired former devs we can recruit back 
- favorable Gini coefficient of the donator set
- onboarding a diverse array of contributors 
