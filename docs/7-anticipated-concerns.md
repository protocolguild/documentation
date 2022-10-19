# 7. Anticipated Concerns

While we can't conceive of every scenario, we've tried to think critically about deficiencies when they've presented themselves. If you see a devious edge case, an organizational pitfall - please join the [**Stateful Works Discord**](https://discord.gg/t8zSZCvf3y) to discuss, and hopefully add it here!

## 7.1 Related to Operations

**What happens in the case of stolen/exploited funds being sent to the mechanism?**
- To the best of our knowledge this has not happened to any other public goods project or individual, but that doesn't mean it wont happen, however unlikely. While the membership will ultimately decide how to handle each scenario individually, each should be carefully considered. It might play out something like this: Contract receives illicit funds > Membership collectively decides to claim/burn the specific funds in the contract > The affected parties deploy a recovery contract with a snapshot at each exploit and restore the funds via said contract.

**Shouldn't one-off contributions be considered for membership?**
- Every mechanism has its limit. The Protocol Guild may meet its at the edges of contribution, where someone has meaningfully contributed to a project, but does not work on it consistently, or produces something as a one-off. This remains an open question, and might be considered for a future weighting scheme if there are no major issues.

**Why are weightings not more granular?**
- While it's true that some people are objectively more productive in their work / valuable to the protocol, adding a weighting scheme to a membership this large would introduce complexity with each membership update. There would also be unknown, probably negative social dynamics related to valuing contributions of peers.
- It's worth a note of caution against heading too far down the path of data and hyper-specificity when it comes to evaluating contributions. We suspect this would lead to the introduction of a public facing component, which would privilege people who have previously been working on the protocol. Such individuals would have the benefit of additional time to form themselves into the shape the political and social structures are looking to latch onto. Metrics, rubrics breed subtle exploits, entrench power.
- Ideally, under any weighting scheme, the margin between contributor profile should not be overly large relative to the others.

**How can curators or signers abuse their position of trust?**
- Fundamentally, this is a political tool. In negative outcomes, whoever maintains the member eligibility can influence research areas and interests people have in certain sections of the protocol. Want to get the merge done? Add more client implementers at the expense of other ecosystem categories. This kind of manipulation is unlikely to actually happen as it would harm the mechanism's legitimacy.
- Or worse, the existing signers decide not to honor the agreed upon outcomes from weighting deliberations, go slightly rogue. In this case, we can imagine some contributors deciding to ride it out until vesting has completed. In other situations, a significant portion of the members could collectively abandon the stream in solidarity. Or, they could claim and send the wrapped tokens to the burn address as a gesture of protest.

**How can this be gamed?**
- As the mechanism scales, it's inevitable that the amount of attention given by a core group of Guild members will eventually fall, become less thorough. At a sufficiently high number of members, unscrupulous developers might invent phantom co-workers and redirect the split shares to themselves. This is one area where the mechanism relies on mutual trust to avoid abuse. 

**What happens if a large percent of infrastructure contributors decide not to participate? Or, what if a significant number of contributors join and then decide to leave the split?**
- The mechanism's legitimacy is predicated on broad participation. If enough contributors decline, this may not be an appropriate tool for incentivizing work on public goods. In the latter case, the vesting would still continue but it may be difficult to solicit additional donations.

**How will members handle conflicts about list inclusion, eg. when someone starts doing well-intentioned but poorly executed work?**
- Eligibility criteria should be given special care, as much as the contract or the outreach to donating entities. These should be communicated publicly and frequently with change history, eg. Github. Any decisions which sidestep transparent processes undermines the mechanism's legitimacy.

**What other failure modes have not been explored in-depth yet?**
- The membership is updated to only include addresses controlled by the attackers.
- More cleverly, they only dilute the existing membership a little bit, or adjusting the weights just enough to favor certain set of contributors. 
- Members selling early access to their shares to capitalize early into a stream, or taking a loan against them and committing to stay at least as long as their agreements dictate. 

**What happens when enough signers get compromised?**
- This would damage the trust donating entities put into the members, as well as any future efforts to restart something similar. 

**What are the tax implications of participation?**
- We are not tax lawyers, each participant should seek experts for their jurisdiction.

**What use cases can you anticipate wanting in the future that Astrodrop can’t facilitate today?**
- Lending markets built into the vesting stream
- Programmatically dripping membership
- Extensions that let users automate a custom functions like "claim and sell to DAI"
- Anyone who donates would eventually be airdropped a social token which unlocks a token-gated core devs Discord /jk

**What are some ways that curation can fail?**
- There are edge cases which should be considered. For example, where the marginal legitimacy lost by excluding a given contributor is too low to get curators to push for their inclusion. 
- The initial set of curators fails to expand beyond their social graphs, but still accumulates enough members to accomplish a state of "good enough" legitimacy.
- The social norms that build up around the mechanism are sufficiently powerful to draw in continued donations even though it just barely hits the "good enough" threshold.

## 7.2 Related to the Broader Community

**Will this replace existing salaries?**
- No, this should be perceived as a bonus on top of current pay: employers/DAOs should pretend as though it doesn't exist. Furthermore, employers/DAOs won't be able to tell whether members have submitted their own address, or that of a charity. It would not be ethical to compel charity disclosures.

**What if this ends up being a significant amount?**
- If this mechanism *doesn't* accrue significant funds, then it's not really working properly. Vested donations should be significant enough to inspire new contributors to join core development. However, there should be deeper incentive analyses and the thresholds at which they get funky.

**Why don't contributors ask for some multiple of their current salary?**
- As discussed in "[2. Broader Context](https://hackmd.io/ANe-MBCgTFSN6qG7drn3zg?both#2-Broader-Context)," traditional orgs will never be able to match the upside that comes from working on a novel tokenized application or L2.

**Aren't donated assets a form of bribe?**
- No. This would be a very inefficient form of bribing, as the large membership distribution dilutes any targeted intent. It would be much more effective to bribe individuals, which can already happen today without a split contract. It could even be argued that this mechanism makes bribes less effective, because bribes are most effective in situations of relative wealth inequality. By raising the holdings of core developers, they are less likely to be swayed by individual financial offers. Of course, this is completely opt-in and protocol contributors are welcome to redirect their share to e.g. other public goods projects. Only when there are relatively few donating entities could the mechanism become more susceptible to bribes. Or, if the relative amount donated by one entity dwarfs that given by others.

**What about including past protocol contributors?**
- Not advisable, as this would complicate inclusion decisions. The split is supposed to incentivize current and future contributors.

**Will this compete with Gitcoin or other similar efforts?**
- We feel that this mechanism is differentiated enough (ie. forward looking, core protocol focused, vested, biases towards native tokens as opposed to USD) that the overlap may appear larger than it actually is. However, there may be some donating entities that feel like they are already "doing their part" with donations to one initiative and may not feel obligated to contribute to the other. We believe that it's healthy to have a number of autonomous & differentiated funding approaches towards public goods.

## 7.3 Culture / Big Questions

**How long should the Protocol Guild exist?**
- It's unclear when, but at some point it should probably cease to exist. It may end up no longer being an effective draw to retain talent, or may become corrupted or otherwise coopted, or may even become unnecessary if (when) the protocol completes its evolutionary course. However, members present in the lead up to that possible future should be attentive to the signs of negative outcomes. The inertia to maintain itself will be self-animating, an egregore harnessed by the mystic capabilities of core Ethereum development. Inasmuch, the egregore desires to continue living and will therefore recognize attempts to curtail its growth. Members would do well to remember that this has been the case from the beginning, and remind new cohorts of developers of this reality as they are onboarded.

**Why hasn't anyone built this before?**
- It's unlikely that one project from the ecosystem would have the capacity to take responsibility for all the coordination efforts related to collecting and maintaining a list of contributors. If it did happen, the project would eventually find themselves with an immense amount of power as the gatekeeping curator.
- The tech did not exist until now (Astrodrop).
- Core devs are largely too focused on other things to coordinate such an effort

**Broadly, how will this design fail?**
- If voluntaryism and donation-based funding does not scale sufficiently to the levels this mechanism needs in order to be effective.
- If developers reject the responsibilities and pressures associated with self-governing an asset stream.

**Will long-term vesting lead to stagnation in core development roles?**
- In the sense of gatekeeping/groupthink/capture, we sincerely hope not. There's certainly a possibility that previously effective people may get stuck in a position if the incentive is significant enough. However, this is no different from any other job with performance requirements, crypto or otherwise. If someone is not performing adequately, they will be removed from their job and then from the list. If anything, the infusion of new perspectives as the set grows will be a healthy process.
- With the conclusion of each vesting period, everyone starts at 0 again, having to convince other members (and more broadly, the public), that they are legitimate heirs to the Protocol Guild name and legacy. Competition for scarce political purchase means there will be alliances, intrigue, rebalances. Anyone can copy this blueprint and create their own competing versions. We anticipate that even the initial cohort now will unavoidably have its own political undercurrents! A blooming society actively  evolves their systems to avoid settling into patterns too soon. So we should continue - see the approaching Leviathan peeking over the horizon, pull ourselves towards well considered implementations, norms, visions. Subtle frameworks like this interface between the social and the economic resources a group traffics in. They are dense confluences of swirling power - what we're doing is preempting inevitability.
