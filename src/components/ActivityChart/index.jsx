import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ActivityChart(props) {
  return (
    <BarChart
      width={800}
      height={300}
      data={props.sessions}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid stroke="#DEDEDE" />
      <XAxis dataKey="" />
      <YAxis yAxisId="left" orientation="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip shared={false} trigger="click" />
      <Legend iconType="circle" verticalAlign="top" align="right" />
      <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize="5" radius={[10, 10, 0, 0]} />
      <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize="5" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}


