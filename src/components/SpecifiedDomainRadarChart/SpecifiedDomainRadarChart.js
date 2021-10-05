import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';

const SpecifiedDomainRadarChart = () => {
    const data = [
        {
          subject: 'Math',
          A: 120,
          B: 110,
          c: 130,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130,
          c: 110,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 86,
          B: 130,
          c: 120,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          c: 120,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          c: 110,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          c: 140,
          fullMark: 150,
        },
      ];
    return (
        <>
            <h1>Specified Domain Radar Chart</h1>
                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                <PolarGrid strokeDasharray="3 3"  />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Saad" dataKey="subject"  fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Radar name="Rapin" dataKey="c" stroke="#821a9d" fill="#80223d" fillOpacity={0.6} />
                <Tooltip/>
                <Legend />
            </RadarChart>
        </>
    );
};

export default SpecifiedDomainRadarChart;