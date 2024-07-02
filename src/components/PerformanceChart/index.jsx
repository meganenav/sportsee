import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis, 
  CartesianGrid
} from "recharts";

export default function PerformanceChart(props) {
    let newDataArray = []
    const data = props.performance.data
    data.map((element) =>
        newDataArray.push({
            "kind" : props.performance.kind[element.kind],
            "value" : element.value
        })
    )

    return (
        <RadarChart
          outerRadius={80}
          width={258}
          height={263}
          data={newDataArray}
        >
          <CartesianGrid fill="#282D30" />
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#FFFFFF"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
    );
}