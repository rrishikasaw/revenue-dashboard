import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './stores/store.ts'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ErrorBoundary fallback={<div>Error loading the dashboard! Please try again later..</div>}>
				<App />
			</ErrorBoundary>
		</Provider>
	</StrictMode>
)
