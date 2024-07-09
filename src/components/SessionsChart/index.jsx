import React, { useEffect, useState } from 'react'
import { fetchSessions } from '../../services/sessions.js'
import { LineChart, Line, XAxis, CartesianGrid } from 'recharts'

export default function SessionsChart(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try{
        const result = await fetchSessions(props.id)
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

  return (
    <LineChart
      width={258}
      height={263}
      margin={{
        top: 77,
        right: -5,
        left: -5,
        bottom: 20,
      }}
      data={data.data.sessions}
    >
      <CartesianGrid fill="#FF0000" />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        strokeWidth={2}
        dot={false}
      />
      <XAxis tickLine={false} axisLine={false} stroke="#FFFFFF" />
    </LineChart>
  )
}