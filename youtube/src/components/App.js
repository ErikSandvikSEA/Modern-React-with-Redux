// from packages
import React, { Component } from 'react'

// from files
import { SearchBar } from '../components'

class App extends Component {
    render() {
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        )
    }
}

export default App
