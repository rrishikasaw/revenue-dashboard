import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import React from 'react'

ChartJS.register(BarElement, CategoryScale, LinearScale)

const generateRandomData = () => {
	return Array.from({ length: 5 }, () => Math.floor(Math.random() * 180) - 100)
}

const FloatingBarChart = () => {
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Revenue',
				data: generateRandomData(),
				backgroundColor: 'rgba(75, 192, 192, 0.6)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
				barThickness: 20,
				maxBarThickness: 25,
				categoryPercentage: 0.5,
				barPercentage: 1.0
			},
			{
				label: 'Marketing',
				data: generateRandomData(),
				backgroundColor: 'rgba(153, 102, 255, 0.6)',
				borderColor: 'rgba(153, 102, 255, 1)',
				borderWidth: 1,
				barThickness: 20,
				maxBarThickness: 25,
				categoryPercentage: 0.5,
				barPercentage: 1.0
			}
		]
	}

	const options = {
		responsive: true,
		indexAxis: 'x',
		plugins: {
			legend: {
				display: true,
				position: 'top'
			}
		},
		scales: {
			x: {
				grid: {
					display: false
				}
			},
			y: {
				grid: {
					drawBorder: false
				},
				beginAtZero: true,
				min: -100,
				max: 100
			}
		}
	}

	// @ts-ignore
	return <Bar className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(FloatingBarChart)
