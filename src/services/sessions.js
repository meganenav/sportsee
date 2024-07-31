import { fetchData } from '../services/common.js'

//Récupération des données de session de l'utilisateur
export function fetchSessions(id)  {
  return fetchData(`http://localhost:3000/user/${id}/average-sessions`)
}