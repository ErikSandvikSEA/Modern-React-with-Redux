// from packages
import React, { useState } from 'react'

// from files
import { Accordion, Search, Dropdown } from './components'

const items = [
	{
		title: `What is React?`,
		content: `React is a front end javascript framework`,
	},
	{
		title: `Why use React?`,
		content: `React is a favorite JS library`,
	},
	{
		title: `Ok but why?`,
		content: `Because`,
	},
]

let display = false

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'A Shade of Blue',
		value: 'blue',
	},
]

function App() {
	const [selected, setSelected] = useState(options[0])
	const [showDropdown, setShowDropdown] = useState(true)

	return (
		<div>
			{display ? <Search /> : null}
			{display ? <Accordion items={items} /> : null}
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null}
		</div>
	)
}

export default App
