import React from 'react';
import {connect} from 'react-redux';

const VideoDetail = ({video}) => {
    return (
        <div className='ui card'>
            <div className="card">
                <div className="content">
                    <div className="header">{video.title}</div>
                    <div className="description">
                        {video.length}
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        video: state.selectedVideo
    }
}

export default connect(mapStateToProps)(VideoDetail);