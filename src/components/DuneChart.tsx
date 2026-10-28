
import { FC, useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface DuneChartProps {
  queryId: string
  theme?: 'light' | 'dark'
  title: string
  xAxisKey: string
  yAxisKey: string
  height?: number
  formatCurrency?: boolean
  formatDate?: boolean
}

interface DuneData {
  result: {
    rows: Array<{
      [key: string]: any
    }>
    metadata: {
      column_names: string[]
    }
  }
  execution_id: string
  state: string
}

const formatDateString = (dateStr: string) => {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateStr);
    return 'Invalid Date';
  }
  
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear().toString().slice(-2);
  return `${month} '${year}`;
}

const formatNumber = (value: number | string) => {
  const num = typeof value === 'string' ? parseFloat(value) : value
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toFixed(1)
}

const formatCurrencyValue = (value: number | string) => {
  return `$${formatNumber(value)}`
}

const DuneChart: FC<DuneChartProps> = ({
  queryId,
  theme = 'light',
  title,
  xAxisKey,
  yAxisKey,
  height = 200,
  formatCurrency = false,
  formatDate = false
}) => {
  const [data, setData] = useState<DuneData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

    const fetchData = async () => {
      try {
        // Check cache first
        const cacheKey = `dune-chart-${queryId}`;
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
        
        if (!result?.result?.rows?.length) {
          throw new Error('No data returned from query')
        }

        // Sort the data chronologically (oldest to newest)
        result.result.rows.sort((a: Record<string, any>, b: Record<string, any>) => {
          // Parse dates based on format
          let dateA: Date, dateB: Date;
          
          // Handle the special time2 format (DD-MMM-YYYY)
          if (xAxisKey === 'time2') {
            const strA = a[xAxisKey];
            const strB = b[xAxisKey];
            
            if (typeof strA === 'string' && strA.includes('-')) {
              const [dayA, monthA, yearA] = strA.split('-');
              dateA = new Date(`${monthA} ${dayA} ${yearA}`);
            } else {
              dateA = new Date(strA);
            }
            
            if (typeof strB === 'string' && strB.includes('-')) {
              const [dayB, monthB, yearB] = strB.split('-');
              dateB = new Date(`${monthB} ${dayB} ${yearB}`);
            } else {
              dateB = new Date(strB);
            }
          } else {
            // Standard date formats
            dateA = new Date(a[xAxisKey]);
            dateB = new Date(b[xAxisKey]);
          }
          
          // Sort chronologically
          return dateA.getTime() - dateB.getTime();
        });
        
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

  // Render loading state, error message, or the chart
  if (loading) {
    return (
      <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm p-6`}>
        <div className="h-4 w-1/3 mb-4 rounded animate-shimmer"></div>
        <div className="h-[200px] rounded animate-shimmer"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm p-6`}>
        <h3 className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'} mb-2`}>
          Error: {error}
        </h3>
      </div>
    )
  }

  if (!data?.result?.rows?.length) {
    return (
      <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm p-6`}>
        <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
          No data available
        </h3>
      </div>
    )
  }

  console.log('Rendering chart with:', {
    data: data.result.rows,
    xAxisKey,
    yAxisKey,
    theme,
    height,
    samplePoint: {
      x: data.result.rows[0]?.[xAxisKey],
      y: data.result.rows[0]?.[yAxisKey],
      raw: data.result.rows[0]
    }
  })

const dataLength = data?.result?.rows.length || 0; // Calculate data length

return (
  <div className={`${theme === 'dark' ? 'border-[var(--gray-dark)] bg-[var(--gray-darker)]' : 'border-gray-200 bg-white'} border rounded-xl shadow-sm p-4`}>
    <h3 className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
      {title}
    </h3>
    <div style={{ width: '100%', height, minHeight: '200px', maxHeight: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data?.result?.rows || []}
          margin={{ top: 5, right: 5, left: 0, bottom: 20 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={theme === 'dark' ? 'var(--gray-dark)' : '#f0f0f0'}
            vertical={false}
          />
          <XAxis 
            dataKey={xAxisKey} 
            stroke={theme === 'dark' ? 'var(--gray-light)' : 'var(--gray-dark)'}
            tick={{ fontSize: 12, fontFamily: 'Inter' }}
            tickFormatter={(value) => formatDate ? formatDateString(value.toString()) : value}
            tickLine={false}
            axisLine={false}
            interval={Math.ceil(dataLength / 6)} // Show a maximum of 6 ticks
            dy={8}
            type="category"
          />
          <YAxis 
            stroke={theme === 'dark' ? 'var(--gray-light)' : 'var(--gray-dark)'}
            tickFormatter={(value) => formatCurrency ? formatCurrencyValue(value) : value.toString()}
            tick={{ fontSize: 12, fontFamily: 'Inter' }}
            tickLine={false}
            axisLine={false}
            dx={0}
          />
          <Tooltip 
            formatter={(value: string | number, _name, props) => {
              const formattedValue = formatCurrency ? formatCurrencyValue(value) : value.toString();
              const label = formatCurrency ? 'Amount' : 'Total Members';
              const payload = props?.payload as Record<string, any> | undefined;
              const date = payload?.[xAxisKey]?.toString() || '';
              return [formattedValue, label, formatDate ? formatDateString(date) : date];
            }}
            contentStyle={{
              backgroundColor: theme === 'dark' ? 'var(--gray-darker)' : 'white',
              border: `1px solid ${theme === 'dark' ? 'var(--gray-dark)' : 'var(--gray-light)'}`,
              borderRadius: '0.375rem',
              padding: '0.5rem',
              fontSize: '0.875rem',
              fontFamily: 'Inter'
            }}
            labelStyle={{
              color: theme === 'dark' ? 'var(--gray-light)' : 'var(--gray-darker)',
              marginBottom: '0.125rem',
              fontSize: '0.75rem',
              fontFamily: 'Inter'
            }}
            itemStyle={{
              color: 'var(--gray-darker)',
              padding: '0'
            }}
            cursor={{
              stroke: 'var(--brand-primary)',
              strokeWidth: 1,
              strokeDasharray: '3 3'
            }}
          />
          <Line 
            type="monotone" 
            dataKey={yAxisKey} 
            stroke="var(--brand-primary)" 
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: 'var(--brand-primary)',
              stroke: 'white',
              strokeWidth: 2
            }}
          />
        </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DuneChart
