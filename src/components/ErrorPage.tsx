import React from 'react'

function ErrorPage() {
	return (
		<div className='w-full max-w-xl max-h-96 p-6 mb-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg my-2 flex flex-col items-center justify-center'>
			<div className='h-20 w-20 rounded-full bg-red-500 flex items-center justify-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-10 w-10 text-white'
					viewBox='0 0 20 20'
					fill='currentColor'
				>
					<path
						fillRule='evenodd'
						d='M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 112 0v4a1 1 0 11-2 0V6zm1 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			<h2 className='mt-4 text-xl font-bold text-gray-800 dark:text-white'>Something Went Wrong</h2>
			<p className='mt-2 text-gray-600 dark:text-gray-400 text-center'>
				We couldn't load the graph. Please try again later.
			</p>
			<button
				onClick={() => window.location.reload()}
				className='mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700'
			>
				Retry
			</button>
		</div>
	)
}

export default React.memo(ErrorPage)
