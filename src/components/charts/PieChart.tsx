import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, CategoryScale, Tooltip, Legend } from 'chart.js'
import React from 'react'

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend)

const generateRandomData = () => {
	const total = 100
	const data = Array.from({ length: 4 }, () => Math.floor(Math.random() * total))
	const sum = data.reduce((acc, val) => acc + val, 0)
	return data.map((val) => Math.round((val / sum) * total))
}

const PieChart = () => {
	const data = {
		labels: ['New Customers', 'Returning Customers', 'VIP Customers', 'Inactive Customers'],
		datasets: [
			{
				data: generateRandomData(),
				backgroundColor: [
					'rgba(75, 192, 192, 0.6)',
					'rgba(255, 99, 132, 0.6)',
					'rgba(153, 102, 255, 0.6)',
					'rgba(255, 159, 64, 0.6)'
				],
				borderColor: [
					'rgba(75, 192, 192, 1)',
					'rgba(255, 99, 132, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
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
					label: function (context: any) {
						const value = context.raw
						return `${context.label}: ${value}%`
					}
				}
			}
		}
	}

	// @ts-ignore
	return <Pie className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(PieChart)
