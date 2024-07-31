import { fetchData } from '../services/common.js'

//Récupération des données d'information de l'utilisateur
export function fetchUserInfos(id) {
  return fetchData(`http://localhost:3000/user/${id}`)
}