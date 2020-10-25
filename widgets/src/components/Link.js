import React from 'react'

function Link(props) {
    const { className, href, children } = props
    
    const clickHandler = e => {
        e.preventDefault()
        
    }
	return (
		<a onClick={clickHandler} className={className} href={href}>
			{children}
		</a>
	)
}

export default Link
