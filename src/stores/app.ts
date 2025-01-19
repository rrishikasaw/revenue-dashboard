import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
	isSideBarOpen: boolean
	isDarkMode: boolean
}

const initialState: AppState = {
	isSideBarOpen: false,
	isDarkMode: false
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setIsSideBarOpen: (state, action: PayloadAction<boolean>) => {
			state.isSideBarOpen = action.payload
		},

		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.isDarkMode = action.payload
		}
	}
})

export const { setIsSideBarOpen, setIsDarkMode } = appSlice.actions

export default appSlice.reducer
