import { DuneClient } from '@duneanalytics/client-sdk'

export async function fetchDuneData(queryId: number, apiKey: string) {
  try {
    const client = new DuneClient(apiKey)
    const result = await client.getLatestResult({ queryId })
    return result
  } catch (error) {
    console.error('Error fetching Dune data:', error)
    throw error
  }
}
