import React from 'react';
import {connect} from 'react-redux';
import {selectedVideo, videoList} from '../actions';

const VideoList = (props) => {
    const videoList = props.videos.videos.map((video) => {
        return (
            <div className='item' key={video.title}>
                <div className='ui left aligned content'>
                    {video.title}
                </div>
                <div className='ui right floated button primary'
                     onClick={() => props.selectedVideo(video)}>Select
                </div>
            </div>
        )
    });

    return (
        <div className='ui divided list'>{videoList}</div>
    );
}

const mapStateToProps = (state) => {
    return {
        videos: state
    }
}

export default connect(mapStateToProps, {
    videoList: videoList,
    selectedVideo: selectedVideo
})(VideoList);