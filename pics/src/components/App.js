// from packages 
import React, { Component } from 'react'
import axios from 'axios'

// from files 
import { SearchBar } from '../components'
import '../styles/App.css'

class App extends Component {
    state = {
        images: []
    }


    onSearchSubmit = async (term) => {
        const response = await axios
            .get(`https://api.unsplash.com/search/photos`, {
                params: { query: term },
                headers: {
                    Authorization: `Client-ID NCOYwbvxs_HrYSjK95BNoMPS5EyxbMyRsACAXWmO6DY`
                }
            })
        this.setState({
            images: response.data.results
        })
    }


    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App
