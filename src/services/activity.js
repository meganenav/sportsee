import { fetchData } from '../services/common.js'

export function fetchActivity(id) {
  return fetchData(`http://localhost:3000/user/${id}/activity`)
}