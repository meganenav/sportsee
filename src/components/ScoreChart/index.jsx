import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterScore.js'
import { RadialBarChart, RadialBar, PolarAngleAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

//Création du graphique de score d'objectif
export default function ScoreChart(props) {
  //Initialisation des variables d'état pour la mise en place des données, le chargement et les erreurs  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  //Récupération des données 
  useEffect(() => {
    const getData = async () => {
      try {
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

  //Calcul du score pour avoir un pourcentage
  const score = data.newScore * 100
  const dataGraph = [
    {
      score: score,
      fill: "#FF0000",
    },
  ]

  // Mise en place du graphique avec les propriétés nécessaires
  return (
    <>
      <div className="score-chart-inside">
        <p className="score-chart-text">
          <span className="score-span">{score}%</span>
          <br/> 
          de votre objectif
        </p>
      </div>
      <ResponsiveContainer maxWidth={258} maxHeight={263}>
        <RadialBarChart
          width="100%"
          height="100%"
          innerRadius={90}
          outerRadius={90}
          barSize={10}
          data={dataGraph}
          startAngle={0}
          endAngle={360}
        >
          <CartesianGrid fill="#FBFBFB" />
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar fill="#FBFBFB" dataKey="score" cornerRadius={5} clockWise={false} />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  )
}