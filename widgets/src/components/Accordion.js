import React from 'react'

function Accordion(props) {
    const {
        items
    } = props

    const onTitleClick = (index) => {
        console.log(`Title clicked: `, index)
    }

    const renderedItems = items.map((item, idx) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    className="title active"
                    onClick={() => onTitleClick(idx)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion
