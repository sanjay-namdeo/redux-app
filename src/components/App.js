import React from 'react';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import {connect} from 'react-redux';
import {videoList} from '../actions';

const App = (props) => {
    let videoDetail = '';
    if (props.selectedVideo) {
        videoDetail = (
            <div className='five wide column'>
                <VideoDetail/>
            </div>
        );
    }

    // Populate video list
    props.videoList();

    return (
        <div className="ui container grid">
            <div className='ui row'>
                <div className='seven wide column'>
                    <VideoList/>
                </div>
                {videoDetail}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo
    }
}

export default connect(mapStateToProps, {videoList})(App);