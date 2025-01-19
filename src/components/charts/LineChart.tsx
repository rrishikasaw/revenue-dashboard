import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import React from 'react'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const generateRandomData = (length: any) => {
	return Array.from({ length }, () => Math.floor(Math.random() * 3000) + 1500)
}

const LineChart = () => {
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Revenue',
				data: generateRandomData(7),
				borderColor: 'rgba(75, 192, 192, 1)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderWidth: 2,
				tension: 0.4
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
	return <Line className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(LineChart)
