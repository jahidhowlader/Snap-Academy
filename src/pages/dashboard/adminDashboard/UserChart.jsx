import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const UserChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {

        // Check if a chart instance already exists
        if (chartRef.current) {
            // If it exists, destroy the chart before creating a new one
            chartRef.current.destroy();
        }

        // Chart initialization
        const ctx = document.getElementById('UserChart').getContext('2d');
        chartRef.current = new Chart(ctx, {
            type: 'bar', // Change the type based on the chart you want
            data: {
                labels: ['Label 1', 'Label 2', 'Label 3'],
                datasets: [{
                    label: 'Dataset',
                    data: [10, 20, 15],
                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1,
                }],
            },
            options: {
                // Configure chart options as needed
            },
        });

        // Cleanup: Destroy the chart when the component unmounts
        return () => {
            chartRef.current.destroy();
        };
    }, []);

    return (
        <div>
            <canvas id="UserChart" width="400" height="200"></canvas>
        </div>
    );
};

export default UserChart;
