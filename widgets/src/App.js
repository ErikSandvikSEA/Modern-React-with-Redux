// from packages 
import React from 'react'

// from files 
import { Accordion, Search } from './components'

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

let display = false

function App() {
    return (
        <div>
            <Search />
            {display ? <Accordion items={items}/> : null}
        </div>
    )
}

export default App
