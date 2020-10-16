import React from 'react'

function ImageList(props) {
    const { images } = props

    const imagesToRender = images.map(image =>{
        const { urls, id, alt_description } = image
        return (
        <img key={id} src={urls.regular} alt={alt_description}/>
        )
    })

    return (
        <div>
            {imagesToRender}
        </div>
    )
}

export default ImageList

