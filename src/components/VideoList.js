import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => { // destructure: ({vidoes})
    // return <div>{props.videos.length}</div> ==> destructure: {videos.length}

    const renderedList = props.videos.map((video) => {
        return <VideoItem />
    });

    return <div>{renderedList}</div>
};

export default VideoList;