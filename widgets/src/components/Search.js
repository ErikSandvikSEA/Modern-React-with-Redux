import React, { useState, useEffect } from 'react'

function Search() {
    const [term, setTerm] = useState(``)

    const changeHandler = e => {
        setTerm(e.target.value)
    }

    useEffect(()=> {
        console.log('yo')
    }, [])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input" 
                        value={term}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            Search
        </div>
    )
}

export default Search
