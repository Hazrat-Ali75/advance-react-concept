import React, { use } from "react";
import {BarChart,Bar,Rectangle,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'


const ChartResult = ({ marksPromise }) => {
  const markDataPromise = use(marksPromise);
  const markData = markDataPromise.data;

  const markChartData = markData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };
    return student;
  });

  console.log(markChartData);

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={markChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="math"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="physics"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        ;
        <Bar
          dataKey="chemistry"
          fill="#82ca9"
          activeBar={<Rectangle fill="orange" stroke="green" />}
        />
      </BarChart>
    </div>
  );
};

export default ChartResult;
