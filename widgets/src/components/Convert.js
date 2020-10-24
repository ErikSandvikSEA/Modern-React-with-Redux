// from packages
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// from files 
import mellin from '../config/translateConfig'

function Convert(props) {
    const { language, text } = props
    const [translated, setTranslated] = useState(``)
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(()=> {
            setDebouncedText(text)
        }, 750)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

	useEffect(() => {
        const doTranslation = async () => {
            const response = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: mellin
                }
            })
            const { data } = response
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslation()
    }, [language, debouncedText])
	return (
    <div>
        <h1 className="ui header">{translated}</h1>
    </div>
    )
}

export default Convert
