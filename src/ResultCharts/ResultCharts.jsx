import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "id": 1,
    "name": "Alice",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Bob",
    "physics": 76,
    "chemistry": 82,
    "math": 88
  },
  {
    "id": 3,
    "name": "Charlie",
    "physics": 90,
    "chemistry": 91,
    "math": 95
  },
  {
    "id": 4,
    "name": "Diana",
    "physics": 65,
    "chemistry": 70,
    "math": 60
  },
  {
    "id": 5,
    "name": "Ethan",
    "physics": 88,
    "chemistry": 85,
    "math": 84
  },
  {
    "id": 6,
    "name": "Fiona",
    "physics": 92,
    "chemistry": 89,
    "math": 94
  },
  {
    "id": 7,
    "name": "George",
    "physics": 70,
    "chemistry": 68,
    "math": 72
  },
  {
    "id": 8,
    "name": "Hannah",
    "physics": 81,
    "chemistry": 80,
    "math": 85
  },
  {
    "id": 9,
    "name": "Ian",
    "physics": 79,
    "chemistry": 74,
    "math": 77
  },
  {
    "id": 10,
    "name": "Julia",
    "physics": 95,
    "chemistry": 93,
    "math": 98
  }
]


const ResultCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="physics" stroke="blue"></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
                <Tooltip></Tooltip>
            </LineChart>  
        </div>
    );
};

export default ResultCharts;