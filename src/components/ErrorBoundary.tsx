import { useState } from 'react'

const ErrorBoundary = ({ fallback, children }: any) => {
	const [hasError, setHasError] = useState(false)

	const handleError = (error: any) => {
		console.error('Error caught in ErrorBoundary:', error)
		setHasError(true)
	}

	if (hasError) {
		return fallback || <div>Something went wrong.</div>
	}

	return <ErrorCatcher onError={handleError}>{children}</ErrorCatcher>
}

const ErrorCatcher = ({ children, onError }: any) => {
	try {
		return <>{children}</>
	} catch (error) {
		onError(error)
		return null
	}
}

export default ErrorBoundary
