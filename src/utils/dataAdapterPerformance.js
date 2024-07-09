import { fetchPerformance } from '../services/performance.js'

const translationTable = {
  intensity: "Intensité",
  speed: "Vitesse",
  strength: "Force",
  cardio: "Cardio",
  energy: "Energie",
  endurance: "Endurance",
}

function transformData(data) {
  const translatedData = {}
  for(const property in data.data.kind){
    translatedData[`${property}`] = translationTable[data.data.kind[property]]
  }
  data.data.translatedKinds = translatedData
  return data
}

export default async function dataAdapter(id) {
  const personData = await fetchPerformance(id)
  const transformedData = transformData(personData)
  return transformedData
}