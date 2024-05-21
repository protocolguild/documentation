# 6. Design Principles

- A commons of peers, not employees
  - Individuals contribute their own effort to the commons. They should engage with each other as peers, and entitled to the rights and benefits unlocked by membership.
  - Expands the types of social relations available to core contributors (recognize collective agency, if you want to go far, go together. mutual aid)
  - APPEARS AS
    - Curation of members, by members (no external council)
    - Weighting + gov. is assigned per individual, not team or company

- Minimize the need for decision-making, action-taking
  - Governance should only produce sufficient contention for something worth
  - Restricting the membership to control only a limited number of parameters. the operating procedures are 
  - APPEARS AS
    - Explicit eligibility
    - Design of the smart contracts (permissionless weight updates, )
    - Time weighting cedes what would be a contentious and labor-intensive allocation process
    - Smart contracts 
    - Self-curation * breaks this design pattern..?
    
- Locals know best (design around time)
  - Stabilizes contributor sets over time
  - APPEARS AS
    - Time-weighting: get people to show up early
    - Self curation by members - not an external council
    - Time weighting recognizes this accumulation of local knowledge
    - Vesting keeps local knowledge around

- Membership should be valuable 
  - Provides a neutral, consistent source of funding, a credible worst case alternative
  - Redirects accumulation back into the commons circuit
  - Expands the kinds and size of incentives available to contributors
  - "Create something worth governing"
  - APPEARS AS
    - Embedded fundraising roles
    - Protocol guild pledge

- Membership should be accessible
  - Porous edges create external and internal legitimacy
  - High bar for membership 
  - Reduces overhead
  - Attracts meaningful contributions
  - APPEARS AS
    - Explicit eligibility

## 6.1 Self Curation

Membership comes with the obligation to participate in curation. Consider these examples:

- An individual updating their personal profile
- A colleague making updates on behalf of their team
- Members giving input to the addition/removal process

Self-curation is an important part of the mechanism, which is different from other public goods funding mechanisms in Ethereum. Optimism's Retro program uses a curated set of reviewers/allocators (badgeholders), while Gitcoin uses donors and quadratic weighting to curate the beneficiary set. External curation mechanisms have their own tradeoffs (both positive + negative), and aren't suited for Protocol Guild.

-  Less local knowledge, and therefore less accurate
  - Protocol Guild stakes its claim to legitimacy on the accuracy of its membership. This emerges from the perspectives and daily interactions of people that are already embedded: the core contributors themselves.
  - Any external council is definitionally outside of core protocol stewardship. To approximate the local knowledge that core contributors naturally already have (e.g. who is doing what work, at what level of contribution, with what team), an external council would have to be embedded in the same work.
-  New class of actors
  - The core protocol, its governance, and funding should be held to the highest institutional standards. An external council places the operational onus on a set of individuals who have a different incentive-set than members. In the degenerate case, their goal is to maintain their position as curators, 
  - Additional governance processes would need to be set up for the membership to nominate and remove council members - more time, overhead, and bandwidth removed from core protocol stewardship.

### 6.2 Incentive compatibility

It is incentive compatible that curators (Guild members) are drawn from the beneficiaries (Guild members).

- Adding beneficiaries removes future vested value from existing members
  - They will more carefully consider potential members and their contributions. An external council would not feel this constraint so directly.
- The mechanism must accept all legitimate contributors
  - This prevents the set from ossifying or getting captured. Potential members which fit established guidelines need to be added to maintain credible neutrality to participants and sponsors. If sponsors think that the set is not inclusive enough, they will not feel incentivized to contribute.

Why is stability important?
- Maintain group cohesion, social norms, shared culture
- Develop trust between collaborators
- Pass on niche local knowledge on to subsequent generations
- Avoid repeating mistakes, frustrating contributors, and making meaningful progress towards long term goals

For Ethereum, there's a steep learning curve for contributors to deliver value. It can take a while to understand a client codebase and start making meaningful contributions. Additionally, contributor value grows over time, but there is less incentive for them to stay once they are experts.

1. Developers, researchers, coordinators
2. Open Source Licenses, All Core Devs Call, ethresear.ch forum, the EIP process
3. Freely available open source software, chain history, chain state, blockspace, mempool history

It structures the labor of **peers** (1) within **shared constraints** (2) in order to produce **shared resources** (3), and the emergent use of these resources suggesting what should be worked on next -- completing the feedback loop.

## 6.3 Why Fundraise

Financial incentives are skewed towards projects built on top of the protocol.
- As a credibly neutral infrastructure with no block reward, Ethereum doesn’t offer the same token incentives with the same upside as apps/L2s. However, it still needs to attract and retain talent to continue to evolve the protocol.
- As the Ethereum ecosystem continues to grow, competition for talented individuals will only increase. This isn’t to fault individuals for rationally weighting financial incentives, or protocols for leveraging the power of tokens - this is just the reality of our current situation.
- We acknowledge that financial motivations aren’t the only or best motivator for people, it’s just one tool in our toolset that might be underleveraged.
- Design objective: Nudge balance back to the protocol by getting sponsors to send tokens.

No native source (eg. token mint) so need embedded advocates
“Incentives are imbalanced”
“Exposes upside”

Incentives are Imbalanced

Financial incentives are skewed towards projects built on top of the protocol.
- As a credibly neutral infrastructure with no block reward, Ethereum doesn’t offer the same token incentives with the same upside as apps/L2s. However, it still needs to attract and retain talent to continue to evolve the protocol.
- As the Ethereum ecosystem continues to grow, competition for talented individuals will only increase. This isn’t to fault individuals for rationally weighting financial incentives, or protocols for leveraging the power of tokens - this is just the reality of our current situation.
- We acknowledge that financial motivations aren’t the only or best motivator for people, it’s just one tool in our toolset that might be underleveraged.
- Design objective: Nudge balance back to the protocol by getting sponsors to send tokens.

## 6.4 Curation

Apps/L2s want to sponsor, but curation of the contributor set is difficult. Protocol contributors are interested in token upside, but self-organizing is hard.
- There is no existing solution that collects all protocol contributors into one funding mechanism and consistently updates it. Expecting a single organization to curate and maintain this list by themselves is a pretty big ask when they’re not already involved in this work.
- Design objective: Existing contributors should self-curate a list. 
- Existing solutions usually favor teams.
- A meta-goal is to avoid governance and intermediation, giving as much agency to independent contributors as possible.
- Design objective: Avoid intermediation, individuals are the atomic unit.

Too Much Contributor Turnover is Negative

There's a steep learning curve for contributors to deliver value. It can take a while to be onboarded to a team, understand a client codebase, and start making meaningful contributions.
- Design objective: Protocol contributors must be active for 6 months before becoming eligible for membership.
- Contributor value grows over time, but there is less incentive for them to stay once they are experts.
- Design objective: Assets should vest to reduce churn in the contributor set, to help transfer knowledge between cohorts.
- Design objective: Weight contributor allocations according to time.

The new funding mechanism must provide autonomous funding and nudge the incentive balance towards the protocol. Sponsors who opt-in will be Ethereum-based applications, protocols, and individuals - this aligns well with our community’s existing voluntaryist mindset towards public goods funding.

Over the course of this ideation process, we realized that we cannot answer the original question (how to give contributors exposure to the success of the application layer), without answering a more general question: what would a mechanism to trustlessly fund protocol contributors look like? We believe the design of the Protocol Guild as described here is a strong approach to addressing both these questions.
