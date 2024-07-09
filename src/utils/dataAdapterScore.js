import { fetchUserInfos } from '../services/userInfos.js'

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

export default async function dataAdapter(id) {
  const data = await fetchUserInfos(id)
  const transformedData = transformData(data)
  return transformedData
}