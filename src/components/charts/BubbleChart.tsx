import { Bubble } from 'react-chartjs-2'
import { Chart as ChartJS, BubbleController, CategoryScale, LinearScale, PointElement } from 'chart.js'
import React from 'react'

ChartJS.register(BubbleController, CategoryScale, LinearScale, PointElement)

const generateRandomData = (num: number) => {
	const data = []
	for (let i = 0; i < num; i++) {
		data.push({
			x: Math.random() * 100,
			y: Math.random() * 100,
			r: Math.random() * 7 + 5
		})
	}
	return data
}

const BubbleChart = () => {
	const data = {
		datasets: [
			{
				label: 'Revenue',
				data: generateRandomData(10),
				backgroundColor: 'rgba(255, 99, 132, 0.6)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1
			},
			{
				label: 'Marketing',
				data: generateRandomData(10),
				backgroundColor: 'rgba(54, 162, 235, 0.6)',
				borderColor: 'rgba(54, 162, 235, 1)',
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
				},
				min: 0,
				max: 100
			},
			y: {
				grid: {
					display: false
				},
				min: 0,
				max: 100
			}
		}
	}

	// @ts-ignore
	return <Bubble className='max-w-xl max-h-96 shadow-lg p-4' data={data} options={options} />
}

export default React.memo(BubbleChart)
