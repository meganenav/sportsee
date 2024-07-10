import React, { useEffect, useState } from 'react'
import * as Recharts from 'recharts'
import { fetchActivity } from '../../services/activity.js'

export default function ActivityChart(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try{
        const result = await fetchActivity(props.id)
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

  return (
    <Recharts.BarChart
      width={835}
      height={320}
      data={data.data.sessions}
      margin={{
        top: 30,
        right: 29,
        left: 32,
        bottom: 23,
      }}
    >
      <Recharts.CartesianGrid stroke="#DEDEDE" strokeDasharray={3} />
      <Recharts.XAxis tickLine={false} stroke="#DEDEDE" tick={{stroke: "#9B9EAC", strokeWidth: 0.5}}/>
      <Recharts.YAxis yAxisId="left" orientation="left" hide />
      <Recharts.YAxis type="number" domain={["dataMin-2", "dataMax+2"]} yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{stroke: "#9B9EAC", strokeWidth: 0.5}} />
      <Recharts.Tooltip shared={false} trigger="click" />
      <Recharts.Legend iconType="circle" verticalAlign="top" align="right" />
      <Recharts.Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize="5" radius={[10, 10, 0, 0]} />
      <Recharts.Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize="5" radius={[10, 10, 0, 0]} />
    </Recharts.BarChart>
  )
}