# 1. Proposal Rationale

To increase the long-term sustainability of protocol maintenance, we propose a curated split contract which includes vesting. This mechanism will provide autonomous funding and nudge the incentive balance towards the protocol. Sponsors who opt-in will be Ethereum-based applications, protocols, and individuals - this aligns well with our community's existing voluntaryist mindset towards public goods funding. 

There are three main motivations as to why there should be a new mechanism, the individual challenges related to each prompt, and the resulting design objectives we can use as inspiration.

## 1.1 Incentive Imbalance

Financial incentives are skewed towards projects built on top of the protocol.
- As a credibly neutral, maximally uncapturable institution with no block reward, Ethereum can’t offer token incentives like apps / L2s. However, it still needs to attract and retain talent to continue to evolve the protocol. As the Ethereum ecosystem continues to grow, competition for talented individuals will only increase.
This isn’t to fault individuals for rationally weighting financial incentives, or protocols for leveraging the power of tokens - this is just the reality of the current context. Finally, it's important to acknowledge that financial motivations aren’t the only or best motivator for people, it’s just one tool in our toolset that is currently underleveraged.
- Design objective: Nudge balance back to the protocol by getting sponsors to send tokens.

## 1.2 Existing Solutions are limited

Apps / L2s want to sponsor, but curation is hard.
- There is no existing solution that collects all protocol contributors into one mechanism. Expecting a single organization to curate and maintain this list themselves is big ask, and having it be created outside may reduce the legitimacy.
- Design objective: Self-curate a list: a simple low-cost path for sponsors to regularly share value directly with Protocol Contributors

Protocol Contributors are interested token upside, but self-organizing is hard.
- Importantly, we want to account for the work of many contributors without overly burdening the org with the overhead of tracking many assets, disbursing, etc
- Design objective: Self-curate a list, give form to existing relationships / contributions

Existing Mechanisms naturally favor teams 
- Existing funding mechanisms are purpose built for their context, usually formed around their founding entities. These include Gitcoin Grants, Uniswap Grants Program, Optimism’s Retroactive Public goods Funding. Curation naturally biases towards teams (eg. Prysmatic Labs instead of Preston van Loon) because of the overhead associated with curation. However, an autonomous mechanism shouldn't depend on the organizations taking custody of funds to then disburse to contributors on their own schedule, without the individuals having visibility of the funds, and worst case, they never get them.
- Design objective: Avoid intermediation: individuals are the atomic unit

## 1.3 The Protocol benefits from contributor continuity

It can take a while to be onboarded to a team, understand a client codebase, and start making meaningful contributions. There's a steep learning curve for contributors to deliver value
- Design objective: Protocol Contributors must be active for 6 months before membership

Contributor value grows over time, but there is less incentive for them to stay once they are experts
- Design objective: Assets should vest to reduce churn in the contributor set, to help transfer knowledge between cohorts.
