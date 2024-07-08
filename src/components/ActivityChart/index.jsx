import React from "react"
import * as Recharts from "recharts"

export default function ActivityChart(props) {
  return (
    <Recharts.BarChart
      width={835}
      height={320}
      data={props.sessions}
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


