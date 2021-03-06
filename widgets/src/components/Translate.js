// from packages
import React, { useState } from 'react'

// from files
import { Dropdown, Convert } from '../components'

const options = [
	{
		label: `Afrikaans`,
		value: `af`,
	},
	{
		label: `Arabic`,
		value: `ar`,
	},
	{
		label: `Hindi`,
		value: `hi`,
	},
	{
		label: `Dutch`,
		value: `nl`,
    },
    {
        label: `Japanese`,
        value: `ja`
    }
]

function Translate() {
	const [language, setLanguage] = useState(options[0])
	const [text, setText] = useState(``)

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<Dropdown
				label="Select a Language"
				selected={language}
				onSelectedChange={setLanguage}
				options={options}
			/>
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert text={text} language={language} />
		</div>
	)
}

export default Translate
