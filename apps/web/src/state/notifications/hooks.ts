import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'state'
import { NotificationDetails } from './reducer'

export function useAllNotifications(subscription: string | undefined): NotificationDetails[] {
  if (!subscription) return []
  const state: {
    [subscriptionId: string]: {
      [notificationId: string]: NotificationDetails
    }
  } = useSelector<AppState, AppState['notifications']>((s) => s?.notifications!)
  if (!state[subscription]) return []
  const subs = Object.values(state[subscription])
  return subs
}