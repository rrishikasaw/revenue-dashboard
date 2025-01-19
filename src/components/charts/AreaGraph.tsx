import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'
import React, { useMemo } from 'react'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler)

const generateRandomData = (numPoints: any) => {
	return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 300) + 50)
}

const AreaGraph = () => {
	const data = useMemo(
		() => ({
			labels: ['January', 'February', 'March', 'April', 'May'],
			datasets: [
				{
					label: 'Revenue',
					data: generateRandomData(5),
					fill: true,
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 2,
					tension: 0.4
				},
				{
					label: 'Marketing',
					data: generateRandomData(5),
					fill: true,
					backgroundColor: 'rgba(153, 102, 255, 0.2)',
					borderColor: 'rgba(153, 102, 255, 1)',
					borderWidth: 2,
					tension: 0.4
				}
			]
		}),
		[]
	)

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

export default React.memo(AreaGraph)
