import { fetchActivity } from '../services/activity.js'

//Création du dataAdapter afin de renvoyer les données d'activité de l'utilisateur
export default async function dataAdapter(id) {
  const data = await fetchActivity(id)
  return data
}