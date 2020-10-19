// from packages
import React from 'react'

// from files
import { VideoItem } from '../components'

export default function VideoList (props) {
    const { videos } = props

    const renderedList = videos.map((video, idx) => {
        return (
            <VideoItem
                key={idx}
                video={video}
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
