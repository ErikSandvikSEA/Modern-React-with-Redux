// from packages 
import React, { Component } from 'react'

// from files 
import { SearchBar, ImageList } from '../components'
import unsplash from '../api/unsplash'
import '../styles/App.css'

class App extends Component {
    state = {
        images: []
    }


    onSearchSubmit = async (term) => {
        const response = await unsplash
            .get(`/search/photos`, {
                params: { query: term }
            })
        this.setState({
            images: response.data.results
        })
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App
