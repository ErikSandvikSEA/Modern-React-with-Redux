import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        term: ''
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        
    }

    render() {
        return (
            <div className="searchbar ui segment">
                <form 
                    onSumbit={this.onFormSubmit}
                    className="ui form"
                >
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar