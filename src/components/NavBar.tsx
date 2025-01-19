import { useEffect, useRef, useState } from 'react'
import SideBar from './SideBar'
import { Icon } from '@iconify/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../stores/store'
import { setIsDarkMode, setIsSideBarOpen } from '../stores/app'
import React from 'react'

function NavBar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isDropdownNotification, setIsDropdownNotification] = useState(false)
	const dropdownRef = useRef(null)
	const dropdownNotificationRef = useRef(null)
	const { isDarkMode } = useSelector((state: RootState) => state.app)
	const dispatch = useDispatch()

	useEffect(() => {
		const isDark = localStorage.getItem('isDarkMode')
		if (isDark === 'true') {
			dispatch(setIsDarkMode(true))
		}
		const handleClickOutside = (event: any) => {
			if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
				setIsDropdownOpen(false)
			}
			if (dropdownNotificationRef.current && !(dropdownNotificationRef.current as any).contains(event.target)) {
				setIsDropdownNotification(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const setDarkMode = (mode: boolean) => {
		dispatch(setIsDarkMode(mode))
		if (mode) {
			localStorage.setItem('isDarkMode', 'true')
		} else {
			localStorage.removeItem('isDarkMode')
		}
	}

	const downloadJson = () => {
		let dataRange: any = localStorage.getItem('dataRange')
		dataRange = dataRange ? +dataRange : 0
		const data = { isDarkMode, dataRange }
		const jsonString = JSON.stringify(data, null, 2)
		const blob = new Blob([jsonString], { type: 'application/json' })
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = url
		link.download = 'settings.json'
		link.click()
		URL.revokeObjectURL(url)
	}

	return (
		<>
			<nav className='bg-blue-600 p-4 shadow-lg'>
				<div className='container mx-auto flex justify-between items-center'>
					<button className='text-white text-2xl ' onClick={() => dispatch(setIsSideBarOpen(true))}>
						☰
					</button>

					<div className='flex items-center space-x-4'>
						<button
							className='text-white hover:text-gray-200'
							onClick={() => setIsDropdownNotification(!isDropdownNotification)}
						>
							<Icon icon='mingcute:notification-fill' className='text-xl' />
						</button>

						{isDropdownNotification && (
							<div
								className='absolute z-30 right-2 top-16 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-4'
								ref={dropdownNotificationRef}
							>
								{/* Notification Header */}
								<div className='px-4 pb-2 border-b border-gray-200 dark:border-gray-700'>
									<h2 className='text-lg font-semibold text-gray-900 dark:text-white'>Notifications</h2>
								</div>

								{/* Notification List */}
								<div className='px-4 py-2 space-y-4 '>
									<div className='flex items-start space-x-3 shadow-md px-5 py-2'>
										<div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white'>
											<Icon icon='fa:envelope' />
										</div>
										<div className='flex-1'>
											<h3 className='text-sm font-medium text-gray-800 dark:text-gray-200'>New Message</h3>
											<p className='text-xs text-gray-600 dark:text-gray-400'>You have a new message from John.</p>
											<span className='text-xs text-gray-500 dark:text-gray-500'>2 mins ago</span>
										</div>
									</div>

									<div className='flex items-start space-x-3 shadow-md px-5 py-2'>
										<div className='w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white'>
											<Icon icon='fa:check-circle'></Icon>
										</div>
										<div className='flex-1'>
											<h3 className='text-sm font-medium text-gray-800 dark:text-gray-200'>Task Completed</h3>
											<p className='text-xs text-gray-600 dark:text-gray-400'>
												Your project task was completed successfully.
											</p>
											<span className='text-xs text-gray-500 dark:text-gray-500'>10 mins ago</span>
										</div>
									</div>

									<div className='flex items-start space-x-3 shadow-md px-5 py-2'>
										<div className='w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white'>
											<Icon icon='fa:exclamation-circle'></Icon>
										</div>
										<div className='flex-1'>
											<h3 className='text-sm font-medium text-gray-800 dark:text-gray-200'>System Alert</h3>
											<p className='text-xs text-gray-600 dark:text-gray-400'>Your system is running low on storage.</p>
											<span className='text-xs text-gray-500 dark:text-gray-500'>1 hour ago</span>
										</div>
									</div>
								</div>

								{/* Footer */}
								<div className='px-4 pt-2 border-t border-gray-200 dark:border-gray-700'>
									<button className='w-full text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline'>
										View All Notifications
									</button>
								</div>
							</div>
						)}

						{/* profile image */}
						<img
							src='https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'
							alt='Profile'
							className='w-8 h-8 rounded-full cursor-pointer'
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
						/>

						{isDropdownOpen && (
							<div
								className='absolute z-30 right-2 top-16 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2'
								ref={dropdownRef}
							>
								<button
									className='flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
									onClick={() => setDarkMode(!isDarkMode)}
								>
									Dark Mode
									<div
										className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
											isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
										}`}
									>
										<div
											className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
												isDarkMode ? 'translate-x-5' : 'translate-x-0'
											}`}
										></div>
									</div>
								</button>

								<button
									className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
									onClick={() => downloadJson()}
								>
									Export Settings
								</button>
								<button className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>
									Profile
								</button>
								<button className='block w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			</nav>

			<SideBar />
		</>
	)
}

export default React.memo(NavBar)
