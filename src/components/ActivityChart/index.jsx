import React, { useEffect, useState } from 'react'
import * as Recharts from 'recharts'
import dataAdapter from '../../utils/dataAdapterActivity.js'

//Création du graphique d'activité
export default function ActivityChart(props) {
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

  //Création d'un Tooltip personnalisé pour indiquer les données souhaitées
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-activity">
          <p className="tooltip-kilo">{`${payload[0].value}kg`}</p>
          <p className="tooltip-calories">{`${payload[1].value}kCal`}</p>
        </div>
      )
    }
    return null
  }

  //Fonction de formatage pour la légende
  const legendFormatter = (value) => {
    return <span style={{ color: '#74798C' }}>{value}</span>
  }

  //Ajout d'un index aux sessions pour que l'axe des abscisses commence à 1
  const sessionsWithIndex = data.data.sessions.map((session, index) => ({
    ...session,
    index: index + 1
  }))

  // Mise en place du graphique avec les propriétés nécessaires
  return (
    <Recharts.BarChart
      width={835}
      height={320}
      data={sessionsWithIndex}
      margin={{
        top: 80,
        right: 29,
        left: 32,
        bottom: 23,
      }}
    >
      <Recharts.CartesianGrid stroke="#DEDEDE" strokeDasharray={3} />
      <Recharts.XAxis tickLine={false} stroke="#DEDEDE" tick={{fill: "#9B9EAC"}} dataKey="index" />
      <Recharts.YAxis yAxisId="left" orientation="left" hide />
      <Recharts.YAxis type="number" domain={["dataMin-2", "dataMax+2"]} yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{fill: "#9B9EAC"}} />
      <Recharts.Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#E60000' }}/>
      <Recharts.Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ top: '24px' }} formatter={legendFormatter} />
      <Recharts.Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize="5" radius={[10, 10, 0, 0]} />
      <Recharts.Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize="5" radius={[10, 10, 0, 0]} />
    </Recharts.BarChart>
  )
}