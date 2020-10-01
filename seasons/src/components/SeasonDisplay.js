import React from 'react'

const getSeason = (lat, month) => {
    if(month > 3 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const { lat } = props
    const season = getSeason(lat, new Date().getMonth())

    const seasonConfig = {
        summer: {
            text: `Let's hit the beach!`,
            iconName: 'sun'
        },
        winter: {
            text: `Burr, it's chilly!`,
            iconName: 'snowflake'
        }
    }

    const {text, iconName } = seasonConfig[season]


return (
    <div>
        <i className={`massive ${iconName} icon`} />
        <h1>
            {text}
        </h1>
        <i className={`massive ${iconName} icon`} />

    </div>
)
}

export default SeasonDisplay