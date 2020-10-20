// from packages
import React from 'react'

// from files 
import "../styles/VideoItem.css"

export default function VideoItem(props) {
    const {
        video,
        onVideoSelect
    } = props

    return (
        <div 
            className="video__item item"
            onClick={() => onVideoSelect(video)}
        >
            <img 
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={`${video.snippet.title} -- thumbnail`}
            />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
                <div className="description">

                </div>
            </div>
        </div>
    )
}
