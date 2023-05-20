import { useSelector } from 'react-redux'
import TabNavigation from './TabNavigation'
import HomeNavigation from './HomeNavigation'

export default function AuthNavigation() {
  const { status } = useSelector((store) => store.user)

  return status ? <TabNavigation /> : <HomeNavigation />
}
