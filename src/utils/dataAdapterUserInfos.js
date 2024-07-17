import { fetchUserInfos } from '../services/userInfos.js'

export default async function dataAdapter(id) {
  const data = await fetchUserInfos(id)
  return data
}