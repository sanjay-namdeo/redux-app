import React from 'react';
import {connect} from 'react-redux';

const VideoDetail = (props) => {
    return (
        <div className='ui card'>
            <div className="card">
                <div className="content">
                    <div className="header">{props.song.title}</div>
                    <div className="description">
                        {props.song.length}
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedVideo
    }
}

export default connect(mapStateToProps)(VideoDetail);