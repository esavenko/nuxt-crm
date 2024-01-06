import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '@/utils/app.constants'
import { useDealSlideStore } from '~/store/deal-slide.store'

export function useComments() {
  const store = useDealSlideStore()
  const cartId = store.card?.id || ''

  return useQuery({
    queryKey: ['deal', cartId],
    queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, cartId)
  })
}
