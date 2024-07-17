import React, { useEffect, useState } from 'react'
import dataAdapter from '../../utils/dataAdapterSessions.js'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'

export default function SessionsChart(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [mouseX, setMouseX] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (e && e.activeCoordinate) {
      setMouseX(e.activeCoordinate.x)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setMouseX(0)
    setIsHovered(false)
  }

  const getBackgroundColor = () => {
    const chartWidth = 258
    if (!isHovered) {
      return '#FF0000'
    }
    const percentage = (mouseX / chartWidth) * 100
    return `linear-gradient(to right, rgba(255, 0, 0, 1) ${percentage}%, rgba(0, 0, 0, 0.0975) ${percentage}%)`
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await dataAdapter(props.id)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [props.id])

  if (loading) {
    return <div>Chargement</div>
  }

  if (error) {
    return <div>Erreur: {error.message}</div>
  }

  const days = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-sessions">
          <p className="tooltip-duration">{`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div
      style={{
        width: 258,
        height: 263,
        background: getBackgroundColor(),
        transition: 'background 0.3s',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <LineChart
        width={258}
        height={263}
        margin={{
          top: 77,
          bottom: 20,
        }}
        data={data.data.sessions}
        onMouseMove={handleMouseMove}
      >
        <CartesianGrid />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="url(#colorLine)"
          strokeWidth={2}
          dot={false}
        />
        <defs>
          <linearGradient id="colorLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4032)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tickFormatter={(tick) => days[tick]} tickLine={false} axisLine={false} stroke="#FFFFFF" padding={{ left: 20, right: 20 }} />
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: '#FFFFFF' }} cursor={false} />
      </LineChart>
    </div>
  )
}