import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    //will have the props: props.videos

    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />;
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;