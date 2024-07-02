import React from "react";
import * as Recharts from "recharts";

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
      <Recharts.CartesianGrid stroke="#DEDEDE" />
      <Recharts.XAxis dataKey="" />
      <Recharts.YAxis yAxisId="left" orientation="left" hide />
      <Recharts.YAxis yAxisId="right" orientation="right" />
      <Recharts.Tooltip shared={false} trigger="click" />
      <Recharts.Legend iconType="circle" verticalAlign="top" align="right" margin={{ top: 5, right: 30, left: 20, bottom: 5 }} />
      <Recharts.Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize="5" radius={[10, 10, 0, 0]} />
      <Recharts.Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize="5" radius={[10, 10, 0, 0]} />
    </Recharts.BarChart>
  );
}


