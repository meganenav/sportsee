import { fetchSessions } from '../services/sessions.js'

//Création du dataAdapter afin de renvoyer les données de sessions de l'utilisateur
export default async function dataAdapter(id) {
  const data = await fetchSessions(id)
  return data
}