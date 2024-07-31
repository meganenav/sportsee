import { fetchData } from '../services/common.js'

//Récupération des données de performance de l'utilisateur
export function fetchPerformance(id) {
  return fetchData(`http://localhost:3000/user/${id}/performance`)
}