import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange(e) {
       this.setState({
           term: e.target.value
       })
    }

    render() {
        return (
            <div
                className="ui segment"
            >
                <form
                    className="ui form"
                >
                    <label>Image Search</label>
                    <input 
                        className='field'
                        placeholder="Search for images"
                        type='text' 
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
