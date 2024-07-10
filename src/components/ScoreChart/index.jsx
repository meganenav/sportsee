import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterScore.js'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  CartesianGrid
} from 'recharts'

export default function ScoreChart(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  const score = data.newScore * 100
  const dataGraph = [
    {
      score: score,
      fill: "#FF0000",
    },
  ]

  return (
    <>
      <div className="score-chart-inside">
        <p className="score-chart-text">
          <span className="score-span">{score}%</span>
          <br/> 
          de votre objectif
        </p>
      </div>
      <RadialBarChart
        width={258}
        height={263}
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
    </>
  )
}