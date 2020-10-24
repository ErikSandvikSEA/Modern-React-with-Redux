//from packages
import React, { useState, useEffect, useRef } from 'react'

// from files 
import "../styles/Dropdown.css"

function Dropdown(props) {
	const { options, selected, onSelectedChange } = props
	const [open, setOpen] = useState(false)
	const ref = useRef()

	useEffect(() => {
		const onBodyClick = (e) => {
			if (ref.current.contains(e.target)) {
				return
			}
			setOpen(false)
		}
		document.body.addEventListener('click', onBodyClick)

		return () => {
			document.body.removeEventListener('click', onBodyClick)
		}
	}, [])

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => onSelectedChange(option)}
				style={{color: option.value}}
			>
				{option.label}
			</div>
		)
	})

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">
					<h3 style={{color: selected.value}}>
						{selected.label}
					</h3>
				</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${
						open ? 'visible active' : ''
					}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">Select Color</div>
					<div className={`menu  ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
