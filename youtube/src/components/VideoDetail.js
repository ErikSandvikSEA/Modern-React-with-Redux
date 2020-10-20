import React from 'react'

function VideoDetail(props) {
    const {
        video
    } = props

    
    if(!video){
        return <div>Loading...</div>
    }
    
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe 
                    src={videoSource} 
                    title={video.snippet.title}
                />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
