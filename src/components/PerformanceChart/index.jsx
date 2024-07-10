import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterPerformance.js'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  CartesianGrid,
} from 'recharts'

export default function PerformanceChart(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  let newDataArray = []
  for(const property in data.data.data){
    newDataArray.push({
      kind: data.data.translatedKinds[data.data.data[property].kind],
      value: data.data.data[property].value,
    })
  }

  return (
    <RadarChart outerRadius={75} width={258} height={263} data={newDataArray}>
      <CartesianGrid fill="#282D30" />
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" stroke="#FFF" tickLine={false} />
      <PolarRadiusAxis tick={false} axisLine={false} />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  )
}