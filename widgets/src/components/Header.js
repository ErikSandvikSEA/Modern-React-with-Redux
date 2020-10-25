// from packages
import React from 'react'

// from files
import { Link } from '../components'

function Header() {
	return (
		<div className="ui secondary pointing menu">
			<Link href="/" className="item">
				Accordion
			</Link>
			<Link href="/list" className="item">
				Search
			</Link>
			<Link href="/dropdown" className="item">
				Dropdown
			</Link>
			<Link href="/translate" className="item">
				Translate
			</Link>
		</div>
	)
}

export default Header
