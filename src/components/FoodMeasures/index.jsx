import React, { useEffect, useState } from 'react'
import { fetchUserInfos } from '../../services/userInfos.js'
import FoodMeasureBlock from '../../components/FoodMeasureBlock'
import caloriesImg from '../../images/calories-icon.svg'
import proteinesImg from '../../images/protein-icon.svg'
import carbsImg from '../../images/carbs-icon.svg'
import lipidsImg from '../../images/fat-icon.svg'

export default function FoodMeasures(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try{
        const result = await fetchUserInfos(props.id)
        setData(result)
      } 
      catch(error){
        setError(error)
      } 
      finally{
        setLoading(false)
      }
    }
    getData()
  })

  if(loading){
    return <div>Chargement</div>
  }

  if(error){
    return <div>Erreur: {error.message}</div>
  }

  let calories = data.data.keyData.calorieCount
  if(calories >= 1000){
    const caloriesLength = calories.toString().length
    calories = calories.toString()
    const caloriesFirstPart = calories.substring(0, caloriesLength - 3)
    const caloriesLastPart = calories.substring(
      caloriesLength - 3,
      caloriesLength,
    )
    calories = caloriesFirstPart + "," + caloriesLastPart
  }
  const proteines = data.data.keyData.proteinCount
  const carbs = data.data.keyData.carbohydrateCount
  const lipids = data.data.keyData.lipidCount

  return (
    <>
      <FoodMeasureBlock
        img={caloriesImg}
        alt="Calories icon"
        measure={calories}
        title="Calories"
        unit="kCal"
      />
      <FoodMeasureBlock
        img={proteinesImg}
        alt="Proteines icon"
        measure={proteines}
        title="Protéines"
        unit="g"
      />
      <FoodMeasureBlock
        img={carbsImg}
        alt="Carbs icon"
        measure={carbs}
        title="Glucides"
        unit="g"
      />
      <FoodMeasureBlock
        img={lipidsImg}
        alt="Lipids icon"
        measure={lipids}
        title="Lipides"
        unit="g"
      />
    </>
  )
}