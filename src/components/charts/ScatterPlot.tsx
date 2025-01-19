import { Scatter } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import React, { useMemo } from 'react'

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const generateRandomData = (numPoints: any) => {
	return Array.from({ length: numPoints }, (_, index) => ({
		x: index + 1,
		y: Math.floor(Math.random() * 100) + 10
	}))
}

const ScatterPlot = () => {
	const data = useMemo(
		() => ({
			datasets: [
				{
					label: 'Revenue',
					data: generateRandomData(5),
					backgroundColor: 'rgba(255, 99, 132, 1)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1,
					pointRadius: 5,
					pointHoverRadius: 7
				},
				{
					label: 'Marketing',
					data: generateRandomData(5),
					backgroundColor: 'rgba(54, 162, 235, 1)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1,
					pointRadius: 5,
					pointHoverRadius: 7
				},
				{
					label: 'Product Development',
					data: generateRandomData(5),
					backgroundColor: 'rgba(255, 206, 86, 1)',
					borderColor: 'rgba(255, 206, 86, 1)',
					borderWidth: 1,
					pointRadius: 5,
					pointHoverRadius: 7
				},
				{
					label: 'Customer Support',
					data: generateRandomData(5),
					backgroundColor: 'rgba(75, 192, 192, 1)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 1,
					pointRadius: 5,
					pointHoverRadius: 7
				}
			]
		}),
		[]
	)

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top'
			}
		},
		scales: {
			x: {
				type: 'linear',
				position: 'bottom',
				title: {
					display: true,
					text: 'Month'
				}
			},
			y: {
				title: {
					display: true,
					text: 'Value'
				}
			}
		}
	}

	// @ts-ignore
	return <Scatter className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(ScatterPlot)
