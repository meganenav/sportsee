import { fetchActivity } from '../services/activity.js'

export default async function dataAdapter(id) {
  const data = await fetchActivity(id)
  return data
}