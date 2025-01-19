import { Icon } from '@iconify/react'
import React, { useState, useEffect } from 'react'

function List() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 2000)
		return () => clearTimeout(timer)
	}, [])

	const data = [
		{ title: 'Earnings', value: '$350.4', icon: 'uis:graph-bar' },
		{ title: 'Spend this month', value: '$642.39', icon: 'fontisto:dollar' },
		{ title: 'Total Project', value: '2935', icon: 'iconamoon:copy-fill' },
		{ title: 'New Tasks', value: '153', icon: 'ic:sharp-add-task' }
	]

	return (
		<>
			<div className='list-main'>
				{isLoading
					? Array(4)
							.fill(0)
							.map((_, index) => (
								<div
									key={index}
									className='flex shadow-md w-full px-4 py-3 rounded-md animate-pulse bg-gray-200 dark:bg-gray-700'
								>
									<div className='rounded-full bg-gray-300 dark:bg-gray-600 w-8 h-8 mt-2 mr-3'></div>
									<div className='flex flex-col space-y-2 w-full'>
										<div className='w-3/4 h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
										<div className='w-1/2 h-4 bg-gray-300 dark:bg-gray-600 rounded'></div>
									</div>
								</div>
							))
					: data.map((item, index) => (
							<div key={index} className='flex shadow-md w-full px-4 py-3 rounded-md dark:bg-gray-800 dark:shadow-lg'>
								<div className='rounded-full bg-purple-200 w-8 h-8 mt-2 text-center flex items-center justify-center text-sm mr-3 dark:bg-purple-400'>
									<Icon icon={item.icon} className='text-md dark:text-white' />
								</div>

								<div>
									<p className='text-sm text-gray-400 dark:text-gray-300'>{item.title}</p>
									<p className='text-md font-bold dark:text-white'>{item.value}</p>
								</div>
							</div>
					  ))}
			</div>
		</>
	)
}

export default React.memo(List)
