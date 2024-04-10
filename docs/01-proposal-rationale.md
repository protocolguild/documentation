# 1. Proposal Rationale

How can we give core protocol contributors exposure to the broader success of the projects building on top of Ethereum? This has been a recurring topic for many years in our community. When the latest discussion resurfaced in [Oct 2021](https://twitter.com/dannyryan/status/1454065104819916803?s=20&t=UpzCC7pDSqldgV-TAIMFiA), we started researching existing public goods funding mechanisms, to see if any offered a solution. Ultimately, we concluded that a new mechanism was needed. 

What follows is a description of three main motivations as to why there should be a new mechanism, the individual challenges related to each, and the resulting design objectives for creating a new mechanism.

## 1.1 Curation is Difficult

Apps/L2s want to sponsor, but curation of the contributor set is difficult. Protocol contributors are interested in token upside, but self-organizing is hard.
- There is no existing solution that collects all protocol contributors into one funding mechanism and consistently updates it. Expecting a single organization to curate and maintain this list by themselves is a pretty big ask when they’re not already involved in this work.
- Design objective: Existing contributors should self-curate a list. 
- Existing solutions usually favor teams.
- A meta-goal is to avoid governance and intermediation, giving as much agency to independent contributors as possible.
- Design objective: Avoid intermediation, individuals are the atomic unit.

## 1.2 Incentives are Imbalanced

Financial incentives are skewed towards projects built on top of the protocol.
- As a credibly neutral infrastructure with no block reward, Ethereum doesn’t offer the same token incentives with the same upside as apps/L2s. However, it still needs to attract and retain talent to continue to evolve the protocol.
- As the Ethereum ecosystem continues to grow, competition for talented individuals will only increase. This isn’t to fault individuals for rationally weighting financial incentives, or protocols for leveraging the power of tokens - this is just the reality of our current situation.
- We acknowledge that financial motivations aren’t the only or best motivator for people, it’s just one tool in our toolset that might be underleveraged.
- Design objective: Nudge balance back to the protocol by getting sponsors to send tokens.

## 1.3 Too Much Contributor Turnover is Negative

There's a steep learning curve for contributors to deliver value. It can take a while to be onboarded to a team, understand a client codebase, and start making meaningful contributions.
- Design objective: Protocol contributors must be active for 6 months before becoming eligible for membership.
- Contributor value grows over time, but there is less incentive for them to stay once they are experts.
- Design objective: Assets should vest to reduce churn in the contributor set, to help transfer knowledge between cohorts.
- Design objective: Weight contributor allocations according to time.

## 1.4 Summary

The new funding mechanism must provide autonomous funding and nudge the incentive balance towards the protocol. Sponsors who opt-in will be Ethereum-based applications, protocols, and individuals - this aligns well with our community’s existing voluntaryist mindset towards public goods funding.

Over the course of this ideation process, we realized that we cannot answer the original question (how to give contributors exposure to the success of the application layer), without answering a more general question: what would a mechanism to trustlessly fund protocol contributors look like? We believe the design of the Protocol Guild as described here is a strong approach to addressing both these questions.
