// from packages 
import React from 'react'

// from files 
import { Accordion } from './components'

const items = [
    {
        title: `What is React?`,
        content: `React is a front end javascript framework`
    },
    {
        title: `Why use React?`,
        content: `React is a favorite JS library`
    },
    {
        title: `Ok but why?`,
        content: `Because`
    }
]

function App() {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}

export default App
