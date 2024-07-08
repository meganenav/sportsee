import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, CartesianGrid } from "recharts";

export default function ScoreChart(props) {
    const score = props.score * 100
    const data = [
        {
            score : score,
            fill: "#FF0000"
        }
    ]

  return (
    <RadialBarChart
      width={258}
      height={263}
      innerRadius={100}
      outerRadius={100}
      barSize={10}
      data={data}
      startAngle={180} 
      endAngle={0}
    >
    <CartesianGrid fill="#FBFBFB" />
    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <RadialBar
        fill="#FBFBFB"
        dataKey="score"
      />
    </RadialBarChart>
  );
}
