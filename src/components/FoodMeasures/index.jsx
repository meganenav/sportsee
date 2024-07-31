import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterUserInfos.js'
import FoodMeasureBlock from '../../components/FoodMeasureBlock'
import caloriesImg from '../../images/calories-icon.svg'
import proteinesImg from '../../images/protein-icon.svg'
import carbsImg from '../../images/carbs-icon.svg'
import lipidsImg from '../../images/fat-icon.svg'

//Création des blocs d'apports nutritionnels de l'utilisateur
export default function FoodMeasures(props) {
  //Initialisation des variables d'état pour la mise en place des données, le chargement et les erreurs
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  //Récupération des données 
  useEffect(() => {
    const getData = async () => {
      try{
        const result = await dataAdapter(props.id)
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
  }, [props.id])

  if(loading){
    return <div>Chargement</div>
  }

  if(error){
    return <div>Erreur: {error.message}</div>
  }

  //Mise en forme correcte des données pour correspondre à la maquette
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

  /*Appel au composant FoodMeasureBlock autant de fois que nécessaire pour le nombre de blocs souhaités. 
  Passage des valeurs dans les props pour afficher les blocs personnalisés selon les calories, protéines, etc.
  */
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