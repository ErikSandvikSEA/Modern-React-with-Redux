//packages
import React from 'react'

//files
import { ImageCard } from '../components'
import "../styles/ImageList.css"

function ImageList(props) {
    const { images } = props

    const imagesToRender = images.map(image =>{
        const { urls, id, alt_description } = image
        return (
        <ImageCard 
            key={id} 
            image={image} 
            src={urls.regular} 
            alt={alt_description}
        />
        )
    })

    return (
        <div className="image__list">
            {imagesToRender}
        </div>
    )
}

export default ImageList

