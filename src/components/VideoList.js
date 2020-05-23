import React, {Component} from 'react';
import {connect} from 'react-redux';
import {videoList, selectedVideo} from '../actions';

class VideoList extends Component {
    // Initialize video list
    componentDidMount() {
        this.props.videoList();
    }

    render() {
        const videoList = this.props.videos.videos.map((video) => {
            return (
                <div className='item' key={video.title}>
                    <div className='ui left aligned content'>
                        {video.title}
                    </div>
                    <div className='ui right floated button primary'
                         onClick={() => this.props.selectedVideo(video)}>Select
                    </div>
                </div>
            )
        });

        return (
            <div className='ui divided list'>{videoList}</div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        videos: state
    }
}

export default connect(mapStateToProps, {
    videoList: videoList,
    selectedVideo: selectedVideo
})(VideoList);