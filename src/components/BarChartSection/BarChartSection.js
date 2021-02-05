import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import './BarChartSection.css';

const BarChartSection = ({ chartData }) => {
    return (
        <div className="barchart-section-container">
            <h1>Result</h1>
            <BarChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="answers" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default BarChartSection;
