import { FC, useEffect, useState } from 'react'

interface DuneStatProps {
  queryId: string
  theme?: 'light' | 'dark'
  title: string
  variableName: string
  type?: 'currency' | 'number'
  formatValue?: (value: any) => string
  suffix?: string
}

interface DuneData {
  result: {
    rows: any[]
    metadata: {
      column_names: string[]
    }
  }
}

const formatNumber = (value: number | string, type?: 'currency' | 'number') => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat('en-US', {
    style: type === 'currency' ? 'currency' : 'decimal',
    currency: type === 'currency' ? 'USD' : undefined,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

const DuneStat: FC<DuneStatProps> = ({ queryId, theme = 'light', title, variableName, type = 'number', formatValue, suffix }) => {
  const [data, setData] = useState<DuneData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

    const fetchData = async () => {
      try {
        // Check cache first
        const cacheKey = `dune-stat-${queryId}`;
        const cachedData = localStorage.getItem(cacheKey);
        
        if (cachedData) {
          const { data, timestamp } = JSON.parse(cachedData);
          const age = Date.now() - timestamp;
          
          if (age < CACHE_DURATION) {
            setData(data);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh data if cache miss or expired
        const response = await fetch(`https://api.dune.com/api/v1/query/${queryId}/results`, {
          headers: {
            'x-dune-api-key': import.meta.env.VITE_DUNE_API_KEY || '',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch cached results')
        }

        const result = await response.json()
        
        // Update cache
        localStorage.setItem(cacheKey, JSON.stringify({
          data: result,
          timestamp: Date.now()
        }));

        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [queryId])

  if (loading || error || !data?.result?.rows?.[0]) {
    return (
      <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm p-6`}>
        <div className="h-4 w-1/3 mb-4 rounded animate-shimmer"></div>
        <div className="h-8 w-2/3 rounded animate-shimmer"></div>
      </div>
    )
  }

  const value = data.result.rows[0]?.[variableName]
  
  if (value === undefined) {
    return (
      <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)] text-gray-400' : 'border-gray-200 bg-white text-gray-500'} border rounded-xl shadow-sm p-6`}>
        {`Variable '${variableName}' not found in data`}
      </div>
    )
  }

  // Format the value and append the suffix
  const formattedValue = formatValue ? formatValue(value) : formatNumber(value, type);
  const displayValue = suffix ? `${formattedValue} ` : formattedValue;

  return (
    <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm p-6`}>
      <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
        {title}
      </h3>
      <div className={`text-2xl md:text-3xl font-medium ${theme === 'dark' ? 'text-white' : 'text-[var(--gray-dark)]'}`}>
        {formattedValue} {/* Display the formatted value */}
        {suffix && <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-[var(--gray-dark)]'} ml-1`}>{suffix}</span>} {/* Change suffix font */}
      </div>
    </div>
  )
}

export default DuneStat;
