import { fetchData } from '../services/common.js'

export function fetchUserInfos(id) {
  return fetchData(`http://localhost:3000/user/${id}`)
}