# 6. Operating Guidelines

What follows is an outline for how we plan to start, recommendations, and guidelines for regular operation scenarios.

The Guild should transition to regular operations before the end of the initial pilot, but only after the summary report has made meaningful progress in assessing the Guild's evolving characteristics. Activities during regular operations should map directly to the obligations described in **3. Roles & Expectations**. Some things will change regularly, like the current set of sponsors at a specific time, or the membership over time.

## 6.1 Comms
- Broadcast to the community and prospective sponsors when vesting periods are set to start and end

## 6.2 Parameter Setting

  - Length of each new vesting period
  - How much of a raise to target for each vesting pool
  - Number of months contributing to core development before being eligible for membership
  - Number of multisig signers, whether it should be proportional to number of members
  - How often signers should be required to prove address control
  - How frequently membership will be updated

## 6.3 Weighting

Antifragility and non-gameability emerge from simple frameworks. This limits the time spent deciding appropriate categories, the methods for collecting and verifying  as well as the time spent weighting contributors. Additionally, this should limit cases of ambiguity gaming that might come up in complicated weighting schemes. Based on member feedback, we've settled on these guidelines: SQRT((`eligibleMonths` - `monthsOnBreak`) * `timeWeighting`)

  - Historic contributions are considered in weightings
  - `timeWeighting` can be either 1.0 for full-time or .5 for part-time contributors
  - Existing contributors get "diluted" as newcomers come in
  - Continuing contributors get additional weight per month they are active. This means historic contributors don't maintain their split weighting if they leave protocol development
  - Anyone who stops contributing should remove themselves from the membership, and may be removed via periodic curation reviews

## 6.4 Modifying Projects and Members

Modifying eligible projects and active membership should be proposed separately in the case both are being considered. Both should be shared with the membership at least two weeks in advance of any onchain update.

### Adding/removing Projects

Changing the list of [eligible projects](https://protocol-guild.readthedocs.io/en/latest/4-roles-expectations.html#qualifications) can be made through a PR to the docs repo. This PR should add the project in the appropriate section, along with the following info:

- Name of project/research area
- Summary of why this project/research area should be considered eligible 

### Adding Members

Changing the current membership can be done by an existing member making a PR in the membership repo (currently private to members only). 

When adding a new member, the PR should add the individual to the member list, along with the accompanying info:

- Name / Identifier
- Project
- Discord handle 
- Link to relevant work, eg. GitHub, research
- Summary of their work and eligibility

Discussion should be open for at least one week to give members time to review and discuss. This can be with reacts on the proposal 👍 / 👎 or written thoughts on why the proposed member fits the eligibility or not.

Once one week has passed, if no objections, the PR can be merged.

### Removing Members/adjusting weights/changing project affiliation

Ideally this PR should come from the member themselves, in keeping with the spirit and mutual trust of self-curation. Where this isn't possible, the member should be notified or tagged on the PR so they are aware of the changes.

## 6.5 Onboarding new members

Eligible and confirmed members should be given an onboarding form link to be added to the split contract at the next quarterly update. They should also be added to the Protocol Guild's Discord and given the proper `Guild Member` / Team roles.

When introducing the concept to potential members or onboarding accepted ones, it should be noted that the submitted address should refer to an individual's personal wallet and *not* their employer's. If teams were the atomic unit, all team members would have to agree on whether to accept or decline membership, likely decreasing the number of participants.
