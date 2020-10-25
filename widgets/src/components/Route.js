// from packages
import { useEffect } from 'react'

function Route(props) {
	useEffect(() => {
		const onLocationChange = () => {
			console.log(`Location Change`)
		}

		window.addEventListener(`popstate`, onLocationChange)

		return () => {
			window.removeEventListener(`popstate`, onLocationChange)
		}
	}, [])

	const { path, children } = props
	return window.location.pathname === path ? children : null
}

export default Route
