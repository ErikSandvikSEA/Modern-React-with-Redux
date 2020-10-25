// from packages
import React, { useState } from 'react'

// from files
import {
	Accordion,
	Search,
	Dropdown,
	Translate,
	Route,
	Header,
} from './components'

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

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a color"
					options={options}
					selected={selected}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	)
}

export default App
