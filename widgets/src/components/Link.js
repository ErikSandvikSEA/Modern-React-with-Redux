import React from 'react'

function Link(props) {
    const { className, href, children } = props
    
    const clickHandler = e => {
        e.preventDefault()
        window.history.pushState({}, ``, href)

        const navEvent = new PopStateEvent(`popstate`)
        window.dispatchEvent(navEvent)
    }
	return (
		<a onClick={clickHandler} className={className} href={href}>
			{children}
		</a>
	)
}

export default Link
