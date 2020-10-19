// from packages
import React, { Component } from 'react'

// from files
import { SearchBar, VideoList } from '../components'
import youtube from '../api/youtubeConfig'

class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async term => {
        const response = await youtube.get(`/search`, {
            params: {
                q: term
            }
        })

        this.setState({
            videos: response.data.items
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar 
                    onFormSubmit={this.onTermSubmit}
                />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App
