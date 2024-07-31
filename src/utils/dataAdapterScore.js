import { fetchUserInfos } from '../services/userInfos.js'

/*Création de la fonction afin de transformer les données reçues dans le but d'harmoniser les données
pour gérer les différents nommages pour la propriété du score (score ou todayScore peuvent être présents selon l'utilisateur)
*/
function transformData(data) {
  let newScore
  if(data.data.todayScore){
    newScore = data.data.todayScore
  } 
  else if(data.data.score){
    newScore = data.data.score
  }

  if(newScore){
    return {
      ...data,
      newScore: newScore,
    }
  }
  return data
}

//Création du dataAdapter afin de renvoyer les données du score de l'utilisateur
/* On fait appel à la fonction transformData avec les données que l'on a reçues de l'API 
pour pouvoir les utiliser correctement ultérieurement */
export default async function dataAdapter(id) {
  const data = await fetchUserInfos(id)
  const transformedData = transformData(data)
  return transformedData
}