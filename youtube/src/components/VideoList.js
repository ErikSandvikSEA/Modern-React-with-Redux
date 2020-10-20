// from packages
import React from 'react'

// from files
import { VideoItem } from '../components'

export default function VideoList (props) {
    const { videos, onVideoSelect } = props

    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        )
    })


    return (
        <div
            className="ui relaxed divided list"
        >
            {renderedList}
        </div>
    )
}
