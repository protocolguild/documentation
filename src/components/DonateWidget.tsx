import { FC, useState } from 'react'
import { donationChains, DonationChain } from '../content/donation-addresses'

interface Eip1193Provider {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>
}

const getProvider = (): Eip1193Provider | undefined =>
  typeof window !== 'undefined'
    ? (window as unknown as { ethereum?: Eip1193Provider }).ethereum
    : undefined

// "0.25" -> 250000000000000000n, without floating point rounding
const toWei = (amount: string): bigint | null => {
  if (!/^\d*\.?\d+$/.test(amount.trim())) return null
  const [whole, fraction = ''] = amount.trim().split('.')
  if (fraction.length > 18) return null
  return BigInt(whole || '0') * 10n ** 18n + BigInt(fraction.padEnd(18, '0'))
}

const ChainIcon: FC<{ chain: DonationChain; size?: string }> = ({ chain, size = 'h-6 w-6' }) =>
  chain.logo ? (
    <img src={chain.logo} alt="" className={`${size} rounded-full`} />
  ) : (
    <span
      className={`${size} rounded-full bg-[var(--gray-dark)] text-white text-[10px] font-bold flex items-center justify-center`}
    >
      {chain.name[0]}
    </span>
  )

const DonateWidget: FC = () => {
  const [chain, setChain] = useState<DonationChain>(donationChains[0])
  const [amount, setAmount] = useState('')
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState<{ kind: 'idle' | 'pending' | 'done' | 'error'; message?: string }>({
    kind: 'idle',
  })

  const selectChain = (next: DonationChain) => {
    setChain(next)
    setCopied(false)
    setStatus({ kind: 'idle' })
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(chain.address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const sendFromWallet = async () => {
    const provider = getProvider()
    const wei = toWei(amount)
    if (!provider) return setStatus({ kind: 'error', message: 'No browser wallet found. Copy the address instead.' })
    if (!wei || wei === 0n) return setStatus({ kind: 'error', message: `Enter an amount of ${chain.nativeSymbol}.` })

    try {
      setStatus({ kind: 'pending', message: 'Confirm in your wallet…' })
      const [from] = (await provider.request({ method: 'eth_requestAccounts' })) as string[]
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chain.chainId.toString(16)}` }],
      })
      const hash = (await provider.request({
        method: 'eth_sendTransaction',
        params: [{ from, to: chain.address, value: `0x${wei.toString(16)}` }],
      })) as string
      setStatus({ kind: 'done', message: `Sent. Thank you! Tx ${hash.slice(0, 10)}…` })
    } catch (err) {
      const message = (err as { message?: string })?.message || 'Transaction was not sent.'
      setStatus({ kind: 'error', message })
    }
  }

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-[var(--gray-light)] bg-white shadow-lg p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gray-mid)]">Donate</p>
        <span className="text-xs text-[var(--gray-mid)]">{donationChains.length} chains</span>
      </div>

      {/* Chain picker */}
      <div className="flex justify-between gap-1">
        {donationChains.map((c) => {
          const active = c.id === chain.id
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => selectChain(c)}
              title={c.name}
              aria-label={c.name}
              className={`flex items-center justify-center rounded-full p-1 border-2 transition-colors ${
                active
                  ? 'border-[var(--brand-primary)] !bg-white'
                  : 'border-transparent !bg-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <ChainIcon chain={c} />
            </button>
          )
        })}
      </div>

      {/* Destination */}
      <div className="rounded-xl bg-[var(--gray-lightest)] px-3 py-3 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-sm font-semibold text-[var(--gray-dark)]">
            <ChainIcon chain={chain} size="h-5 w-5" />
            {chain.name}
          </span>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-[var(--gray-light)] text-[var(--gray-mid-dark)]">
            {chain.type}
          </span>
        </div>
        {chain.ens && <p className="text-sm font-semibold text-[var(--gray-dark)]">{chain.ens}</p>}
        <div className="flex items-center gap-1">
          <p className="font-mono text-[11.5px] tracking-tight leading-snug break-all text-[var(--gray-dark)]">{chain.address}</p>
          <button
            type="button"
            onClick={copyAddress}
            title={copied ? 'Copied' : 'Copy address'}
            aria-label="Copy address"
            className="shrink-0 p-1 rounded-md !bg-transparent text-[var(--gray-mid-dark)] hover:text-[var(--gray-dark)] hover:!bg-white transition-colors"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xs text-[var(--gray-mid)] leading-snug">
          {chain.type === '1-year vesting contract'
            ? 'Vests to active contributors over 1 year. Accepts ETH and ERC20 tokens only.'
            : 'Funds are periodically bridged into vesting contracts.'}
        </p>
      </div>

      {/* Send from wallet */}
      <div className="flex gap-2">
        <div className="flex-1 flex items-center rounded-lg border border-[var(--gray-light)] px-3 focus-within:border-[var(--brand-primary)]">
          <input
            inputMode="decimal"
            placeholder="0.1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full py-2 text-sm outline-none bg-transparent"
            aria-label={`Amount in ${chain.nativeSymbol}`}
          />
          <span className="text-sm text-[var(--gray-mid)]">{chain.nativeSymbol}</span>
        </div>
        <button
          type="button"
          onClick={sendFromWallet}
          disabled={status.kind === 'pending'}
          className="!bg-[var(--brand-primary)] text-[var(--gray-dark)] text-sm font-semibold rounded-lg px-4 py-2 hover:opacity-80 transition-opacity disabled:opacity-50"
        >
          Donate
        </button>
      </div>
      {status.message && (
        <p
          className={`text-xs leading-snug ${
            status.kind === 'error' ? 'text-red-600' : 'text-[var(--gray-mid-dark)]'
          }`}
        >
          {status.message}
        </p>
      )}
      <a href="/docs/donate" className="text-xs text-[var(--gray-mid)] underline">
        Pledge donations, other tokens and full details
      </a>
    </div>
  )
}

export default DonateWidget
