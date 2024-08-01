Protocol Guild
---------------

Protocol Guild is a collective funding mechanism for Ethereum's layer 1 R&D maintainers. It has three components:

1. An eligibility framework
2. A member registry
3. Onchain donation contracts

The eligibility framework determines which projects' contributors should receive a share of the funding. This framework can then be used to maintain an active member registry. The registry addresses and weights are regularly published onchain to a `split contract <https://app.splits.org/accounts/0xd4ad8daba9ee5ef16bb931d1cbe63fb9e102ec10/>`_, where funding (`vested <https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9/>`_ over 4 years) can be claimed.

Protocol Guild is only concerned with managing the aforementioned components and soliciting funding to support the eligible work. The day-to-day stewardship discussions surrounding the Ethereum protocol continue to happen in other existing venues (All Core Devs calls, `ethresear.ch <https://ethresear.ch>`_, `Magician's forum <https://ethereum-magicians.org>`_ etc.), with the participation of a much broader set of contributors. Donations to the Protocol Guild have no bearing on stewardship decisions taking place in those existing venues.

Protocol Guild is a simple but powerful mechanism which allows Ethereum's layer 1 R&D to be funded in the same way it is produced: a commons of peers and their collaborative effort over time.

*"And, Ebling, there's another, greater purpose. Hari Seldon founded two Foundations three centuries ago; one at each end of the Galaxy. You must find that Second Foundation."* Foundation, Isaac Asimov

Donate
==================
+----------------------+----------------------------------------------------------------------+
| **Ethereum Mainnet** | `theprotocolguild.eth / 0x25941dC771bB64514Fc8abBce970307Fb9d477e9`_ |
+----------------------+----------------------------------------------------------------------+
| **Arbitrum**         | `arb1:0x32e3C7fD24e175701A35c224f2238d18439C7dBC`_                   |
+----------------------+----------------------------------------------------------------------+
| **Base**             | `base:0x32e3C7fD24e175701A35c224f2238d18439C7dBC`_                   |
+----------------------+----------------------------------------------------------------------+
| **Optimism**         | `oeth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC`_                   |
+----------------------+----------------------------------------------------------------------+
| **Polygon**          | `matic:0x32e3C7fD24e175701A35c224f2238d18439C7dBC`_                  |
+----------------------+----------------------------------------------------------------------+
| **re.al**            | `re-al:0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120`_                  |
+----------------------+----------------------------------------------------------------------+
| **zkSync**           | `zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8`_                 |
+----------------------+----------------------------------------------------------------------+
| **Zora**             | `zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC`_                   |
+----------------------+----------------------------------------------------------------------+

.. _theprotocolguild.eth / 0x25941dC771bB64514Fc8abBce970307Fb9d477e9: https://app.splits.org/accounts/0x25941dc771bb64514fc8abbce970307fb9d477e9
.. _arb1:0x32e3C7fD24e175701A35c224f2238d18439C7dBC: https://app.safe.global/balances?safe=arb1:0x32e3C7fD24e175701A35c224f2238d18439C7dBC
.. _base:0x32e3C7fD24e175701A35c224f2238d18439C7dBC: https://app.safe.global/balances?safe=base:0x32e3C7fD24e175701A35c224f2238d18439C7dBC
.. _oeth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC: https://app.safe.global/balances?safe=oeth:0x32e3C7fD24e175701A35c224f2238d18439C7dBC
.. _matic:0x32e3C7fD24e175701A35c224f2238d18439C7dBC: https://app.safe.global/balances?safe=matic:0x32e3C7fD24e175701A35c224f2238d18439C7dBC
.. _re-al:0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120: https://safe.re.al/balances?safe=re-al%3A0x0E140Adb0a70569f0A8b3d48ab8c8c580939a120
.. _zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8: https://app.safe.global/balances?safe=zksync:0x9fb5F754f5222449F98b904a34494cB21AADFdf8
.. _zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC: https://safe.optimism.io/balances?safe=zora:0x32e3C7fD24e175701A35c224f2238d18439C7dBC

Table of Contents
===================

The Protocol Guild is a mechanism that learns and adapts - this documentation is regularly updated.

.. toctree::
  :maxdepth: 2
  
  01-eligibility
  02-membership
  03-onchain-architecture
  04-donate
  05-design-principles
  06-resources
