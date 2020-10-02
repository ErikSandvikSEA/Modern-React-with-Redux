import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'

class App extends React.Component {
    state = {
        lat: null,
        errorMessage: ''
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            res => {
                this.setState({
                    lat: res.coords.latitude
                })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        )
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDisplay latitude={this.state.lat} />
            )
        }
        return <Spinner message="Please Accept Location Request"/>
    }


    //React says we have to define render
    render() {
        return (
            <div className="border__red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

