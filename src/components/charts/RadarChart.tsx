import { Radar } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import React from 'react'

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)

const generateRandomData = (num: number) => {
	const data = []
	for (let i = 0; i < num; i++) {
		data.push(Math.floor(Math.random() * 100) + 1)
	}
	return data
}

const RadarChart = () => {
	const data = {
		labels: ['Revenue', 'Marketing', 'Product Development', 'Customer Support', 'Burn Rate', 'Customer Feedback'],
		datasets: [
			{
				label: 'Revenue',
				data: generateRandomData(6),
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			},
			{
				label: 'Marketing',
				data: generateRandomData(6),
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}
		]
	}

	const options = {
		responsive: true,
		scale: {
			ticks: {
				beginAtZero: true
			}
		},
		plugins: {
			legend: {
				position: 'top'
			}
		}
	}

	// @ts-ignore
	return <Radar className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(RadarChart)
