# 1. Proposal Rationale

To increase the long-term sustainability of protocol maintenance, we propose a curated split contract which includes vesting. This mechanism will provide autonomous funding and nudge the incentive balance towards the protocol. Sponsors who opt-in will be Ethereum-based applications, protocols, and individuals - this aligns well with our community's existing voluntaryist mindset towards public goods funding. 

There are three main motivations as to why there should be a new mechanism, the individual challenges related to each prompt, and the resulting design objectives we can use as inspiration.

## 1.1 Curation is difficult

Apps / L2s want to sponsor, but curation of the contributor set is difficult. Protocol Contributors are interested token upside, but self-organizing is hard
- There is no existing solution that collects all protocol contributors into one mechanism and consistently updates it. Expecting a single organization to curate and maintain this list themselves is a pretty big ask when they’re not already involved in this work
- Design objective: existing contributors should self-curate a list
Existing solutions usually favor teams
- a meta-goal is to avoid governance and intermediation, giving as much agency to independent contributors as possible
- Design objective: Avoid intermediation: individuals are the atomic unit

## 1.2 Incentives are Imbalanced

Financial incentives are skewed towards projects built on top of the protocol
- As a credibly neutral infrastructure with no block reward, Ethereum doesn’t offer the same token incentives with the same upside as apps / L2s. However, it still needs to attract and retain talent to continue to evolve the protocol
- As the Ethereum ecosystem continues to grow, competition for talented individuals will only increase. This isn’t to fault individuals for rationally weighting financial incentives, or protocols for leveraging the power of tokens - this is just the reality of our current context
- We acknowledge that financial motivations aren’t the only or best motivator for people, it’s just one tool in our toolset that might be underleveraged
- Design objective: Nudge balance back to the protocol by getting sponsors to send tokens.

## 1.3 Too much contributor turnover is negative

There's a steep learning curve for contributors to deliver value. It can take a while to be onboarded to a team, understand a client codebase, and start making meaningful contributions.
- Design objective: Protocol Contributors must be active for 6 months before membership

Contributor value grows over time, but there is less incentive for them to stay once they are experts
- Design objective: Assets should vest to reduce churn in the contributor set, to help transfer knowledge between cohorts.
- Design objective: Weight contributor allocations  according to time
