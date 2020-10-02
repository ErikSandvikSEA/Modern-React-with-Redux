// from packages 
import React, { Component } from 'react'

// from files 
import { SearchBar } from '../components'
import '../styles/App.css'

class App extends Component {
    onSearchSubmit(term){
        console.log(term)
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App
