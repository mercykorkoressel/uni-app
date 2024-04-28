import React from 'react';
import { PieChart, Pie, Cell,Radar, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Barchat() {
  return (
    < section className='grid grid-row-2 '>
    <div className="flex items-center justify-center space-x-4">
      <div className="flex items-center">
        <div className="w-4 h-4 bg-[#FF8042] mr-2 rounded-full"></div>
        <span className="text-gray-600">"A"</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-[#FFBB28] mr-2 rounded-full"></div>
        <span className="text-gray-600">B+ </span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-[#00C49F] mr-2 rounded-full"></div>
        <span className="text-gray-600">B-</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-[#0088FE] mr-2 rounded-full"></div>
        <span className="text-gray-600">C</span>
      </div>
      <div className="flex items-center">
        <div className="w-4 h-4 bg-orange-200 mr-2 rounded-full"></div>
        <span className="text-gray-600">D</span>
      </div>
    </div>

    <ResponsiveContainer width="100%" height={400} >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Radar name="group A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      </PieChart>
    </ResponsiveContainer>
   
</section>
  );
}
