import { fetchPerformance } from '../services/performance.js'

//Création d'une correspondance pour traduire les propriétés reçues de l'API qui sont en anglais vers le français
const translationTable = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  cardio: "Cardio",
  energy: "Energie",
  endurance: "Endurance",
}

/*Création de la fonction afin de transformer les données reçues 
dans le but de traduire correctement les propriétés afin qu'elles soient utilisables selon les contraintes
*/
function transformData(data) {
  const translatedData = {}
  for(const property in data.data.kind){
    translatedData[property] = translationTable[data.data.kind[property]]
  }

  data.data.translatedKinds = translatedData
  return data
}

//Création du dataAdapter afin de renvoyer les données de performance de l'utilisateur
/* On fait appel à la fonction transformData avec les données que l'on a reçues de l'API 
pour pouvoir les utiliser correctement ultérieurement */
export default async function dataAdapter(id) {
  const personData = await fetchPerformance(id)
  const transformedData = transformData(personData)
  return transformedData
}