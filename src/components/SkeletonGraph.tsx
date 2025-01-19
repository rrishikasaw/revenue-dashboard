import React from 'react'

function SkeletonGraph() {
	return (
		<div className='w-full max-w-xl max-h-96 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg animate-pulse my-2'>
			<div className='h-80 bg-gray-300 dark:bg-gray-700 rounded-md '></div>
		</div>
	)
}

export default React.memo(SkeletonGraph)
