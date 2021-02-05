import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import './BarChartSection.css';

const BarChartSection = ({ chartData }) => {
    return (
        <div className="barchart-section-container">
            <h1>Result</h1>
            <ResponsiveContainer width="80%">
            <BarChart
                data={chartData}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="answers" fill="#8884d8" />
            </BarChart>
</ResponsiveContainer>
        </div>
    );
}

export default BarChartSection;
