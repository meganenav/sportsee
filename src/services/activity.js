import { fetchData } from '../services/common.js'

//Récupération des données d'activité de l'utilisateur
export function fetchActivity(id) {
  return fetchData(`http://localhost:3000/user/${id}/activity`)
}