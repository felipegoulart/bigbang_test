import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { ref } from 'vue'

export interface SummaryData {
  filteredByDays: number
  balance: number
  performance: number
  bussinessAcount: number
  receipts: number
  gain: number
}

export interface TransactionsData {
  label: string
  value: number
}

export const useDashboardStore = defineStore('dashboard', () => {
  const isFetching = ref(false)

  const summaryData = ref<SummaryData>({
    filteredByDays: 0,
    balance: 0,
    performance: 0,
    bussinessAcount: 0,
    gain: 0,
    receipts: 0
  })

  const fetchSummaryData = async () => {
    isFetching.value = true

    try {
      const result = await api.get('account-summary')

      Object.assign(summaryData.value, result.data)
      return [null, result]
    } catch (error) {
      console.error(error)

      return [error, null]
    } finally {
      isFetching.value = false
    }
  }

  const transactionsData = ref<TransactionsData[]>([])

  const fetchTransactionsData = async () => {
    isFetching.value = true

    try {
      const result = await api.get('transactions-summary')

      Object.assign(transactionsData.value, result.data)
      return [null, result]
    } catch (error) {
      console.error(error)

      return [error, null]
    } finally {
      isFetching.value = false
    }
  }

  return {
    summaryData,
    fetchSummaryData,

    transactionsData,
    fetchTransactionsData,

    isFetching
  }
})
