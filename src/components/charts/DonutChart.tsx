import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import React from 'react'

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)

const generateRandomData = () => {
	return [
		Math.floor(Math.random() * 30) + 5,
		Math.floor(Math.random() * 30) + 5,
		Math.floor(Math.random() * 30) + 5,
		Math.floor(Math.random() * 30) + 5,
		Math.floor(Math.random() * 30) + 5
	]
}

const DonutChart = () => {
	const data = {
		labels: ['Revenue', 'Marketing', 'Product Development', 'Customer Support', 'Burn Rate'],
		datasets: [
			{
				label: 'Revenue vs Burn',
				data: generateRandomData(),
				backgroundColor: [
					'rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(255, 206, 86, 0.6)',
					'rgba(75, 192, 192, 0.6)',
					'rgba(153, 102, 255, 0.6)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)'
				],
				borderWidth: 1
			}
		]
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top'
			},
			tooltip: {
				callbacks: {
					label: (tooltipItem: any) => {
						return `${tooltipItem.label}: ${tooltipItem.raw}`
					}
				}
			}
		}
	}

	// @ts-ignore
	return <Doughnut className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(DonutChart)
