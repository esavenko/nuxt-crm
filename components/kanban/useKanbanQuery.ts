import { useQuery } from '@tanstack/vue-query'
import { DB_ID, COLLECTION_DEALS } from '~/utils/app.constants'
import { KANBAN_DATA } from '~/components/kanban/kanban.data'
import type { IDeal } from '~/types/deals.types'

export function useKanbanQuery() {
  return useQuery({
    queryKey: ['deals'],
    queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
    select(data) {
      const newBoard = [...KANBAN_DATA]
      const deals = data.documents as unknown as IDeal[]

      for (const deal of deals) {
        const column = newBoard.find(col => col.id === deal.status)
        if (column) {
          column.items.push({
            $createdAt: deal.$createdAt,
            id: deal.$id,
            name: deal.name,
            price: deal.price,
            companyName: deal.customer.name,
            status: deal.status
          })
        }
      }

      return newBoard
    }
  })
}
