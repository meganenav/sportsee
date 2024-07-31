import { fetchUserInfos } from '../services/userInfos.js'

//Création du dataAdapter afin de renvoyer les données d'information de l'utilisateur
export default async function dataAdapter(id) {
  const data = await fetchUserInfos(id)
  return data
}