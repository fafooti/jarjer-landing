import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  ResponsiveContainer,
  Area,
  ReferenceLine,
} from "recharts";

const dailyData = [
  { name: "Day 1", compounded: 4000, nonCompounded: 3800 },
  { name: "Day 2", compounded: 5200, nonCompounded: 4800 },
  { name: "Day 3", compounded: 6000, nonCompounded: 5500 },
  { name: "Day 4", compounded: 7800, nonCompounded: 7000 },
  { name: "Day 5", compounded: 9200, nonCompounded: 8000 },
];

const dataSets = {
  Daily: dailyData,
};


const DisplayValues = ({ compounded, nonCompounded }) => (
  <div className="p-4 bg-gray-200 rounded-md">
    <h2 className="text-lg font-semibold">Selected Values:</h2>
    <p>Compounded: {compounded || "N/A"}</p>
    <p>Non-Compounded: {nonCompounded || "N/A"}</p>
  </div>
);

const InvestmentGraph = ({ timeRange }) => {
  const [clickedData, setClickedData] = useState({
    compounded: null,
    nonCompounded: null,
  });
  const data = dataSets[timeRange];


  const handleClick = (state) => {
    if (state && state.activePayload && state.activePayload.length) {
      const { compounded, nonCompounded } = state.activePayload[0].payload;
      setClickedData({ compounded, nonCompounded });
    }
  };

  return (
    <div className="flex lg:w-[647px] w-[306px] h-[204px] lg:h-[362px] flex-col items-center">

     
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          onClick={handleClick} 
        >
  
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          {/* Hide the X-axis labels */}
          <XAxis dataKey="name" tick={false} />

 
          <YAxis
            axisLine={false}
            ticks={[5000, 10000, 15000, 20000]}
            domain={[0, 30000]}
            tickMargin={10}
          />

  
          <Tooltip cursor={{ stroke: "gray", strokeDasharray: "5 5" }} />

          <Legend />

 
          <ReferenceLine y={5000} stroke="gray" strokeWidth={2} />
          <ReferenceLine y={10000} stroke="gray" strokeWidth={2} />
          <ReferenceLine y={15000} stroke="gray" strokeWidth={2} />
          <ReferenceLine y={20000} stroke="gray" strokeWidth={2} />

          <defs>
            <linearGradient id="colorCompounded" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>


          <Area
            type="monotone"
            dataKey="compounded"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorCompounded)"
          />

          <Line
            type="monotone"
            dataKey="compounded"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="nonCompounded"
            stroke="#82ca9d"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentGraph;