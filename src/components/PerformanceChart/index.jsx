import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterPerformance.js'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

//Création du graphique de performance
export default function PerformanceChart(props) {
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

  //Création d'un tableau contenant les données correctement structurées pour les utiliser ensuite
  let newDataArray = []
  for(const property in data.data.data){
    newDataArray.push({
      kind: data.data.translatedKinds[data.data.data[property].kind],
      value: data.data.data[property].value,
    })
  }

  // Mise en place du graphique avec les propriétés nécessaires
  return (
    <ResponsiveContainer maxWidth={258} maxHeight={263}>
      <RadarChart data={newDataArray} startAngle={-150} endAngle={210} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
        <CartesianGrid fill="#282D30" />
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="#FFF" tickLine={false} />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}