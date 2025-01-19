import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import React from 'react'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

const generateRandomData = () => {
	return Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
}

const PointingLineChart = () => {
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May'],
		datasets: [
			{
				label: 'Revenue',
				data: generateRandomData(),
				borderColor: 'rgba(255, 99, 132, 1)',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderWidth: 2,
				tension: 0.4,
				pointStyle: 'star',
				pointRadius: 6,
				pointBackgroundColor: 'rgba(255, 99, 132, 1)',
				borderDash: [5, 5]
			},
			{
				label: 'Marketing',
				data: generateRandomData(),
				borderColor: 'rgba(54, 162, 235, 1)',
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderWidth: 2,
				tension: 0.4,
				pointStyle: 'circle',
				pointRadius: 6,
				pointBackgroundColor: 'rgba(54, 162, 235, 1)',
				borderDash: [10, 5]
			},
			{
				label: 'Product Development',
				data: generateRandomData(),
				borderColor: 'rgba(75, 192, 192, 1)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderWidth: 2,
				tension: 0.4,
				pointStyle: 'rect',
				pointRadius: 6,
				pointBackgroundColor: 'rgba(75, 192, 192, 1)',
				borderDash: [1, 1]
			},
			{
				label: 'Customer Support',
				data: generateRandomData(),
				borderColor: 'rgba(255, 159, 64, 1)',
				backgroundColor: 'rgba(255, 159, 64, 0.2)',
				borderWidth: 2,
				tension: 0.4,
				pointStyle: 'triangle',
				pointRadius: 6,
				pointBackgroundColor: 'rgba(255, 159, 64, 1)',
				borderDash: [3, 3]
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

export default React.memo(PointingLineChart)
