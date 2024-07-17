import { fetchSessions } from '../services/sessions.js'

export default async function dataAdapter(id) {
  const data = await fetchSessions(id)
  return data
}