import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import React from 'react'

ChartJS.register(BarElement, CategoryScale, LinearScale)

const generateRandomData = (length: any) => {
	return Array.from({ length }, () => Math.floor(Math.random() * 4000) + 1500)
}

const BarChart = () => {
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Sales Targets',
				data: generateRandomData(7),
				backgroundColor: 'rgba(75, 192, 192, 0.6)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1
			},
			{
				label: 'Actual Sales',
				data: generateRandomData(7),
				backgroundColor: 'rgba(255, 99, 132, 0.6)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			}
		]
	}

	const options = {
		responsive: true,
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
				beginAtZero: true
			}
		}
	}

	// @ts-ignore
	return <Bar className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(BarChart)
