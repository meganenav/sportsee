import * as React from "react";
import { LineChart, Line, XAxis, CartesianGrid } from "recharts";

export default function SessionsChart(props) {
    return (
        <LineChart width={250} height={250} data={props.sessions}>
            <CartesianGrid fill="#FF0000" />
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
            <XAxis />
        </LineChart>
    );
}