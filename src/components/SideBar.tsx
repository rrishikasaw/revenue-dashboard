import { useSelector } from 'react-redux'
import { RootState } from '../stores/store'
import { useDispatch } from 'react-redux'
import { setIsSideBarOpen } from '../stores/app'
import { useEffect, useRef } from 'react'
import React from 'react'
function SideBar() {
	const isOpen = useSelector((state: RootState) => state.app.isSideBarOpen)
	const dispatch = useDispatch()
	const sidebarRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (sidebarRef.current && !(sidebarRef.current as any).contains(event.target)) {
				dispatch(setIsSideBarOpen(false))
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<>
			<div
				ref={sidebarRef}
				className={`fixed z-30 top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 text-white p-5 transform ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				} transition-transform duration-300 ease-in-out`}
			>
				<button
					className='text-black dark:text-gray-300 text-2xl absolute top-4 right-4'
					onClick={() => dispatch(setIsSideBarOpen(false))}
				>
					×
				</button>
				<h2 className='text-md font-bold mb-6 text-black dark:text-white'>Menu</h2>
				<ul className='space-y-4'>
					<li>
						<a href='#' className='menu-item'>
							Dashboard
						</a>
					</li>
					<li>
						<a href='#' className='menu-item'>
							Profile
						</a>
					</li>
					<li>
						<a href='#' className='menu-item'>
							Settings
						</a>
					</li>
					<li>
						<a href='#' className='menu-item'>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default React.memo(SideBar)
