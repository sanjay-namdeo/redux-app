import React, {Component} from 'react';
import {connect} from 'react-redux';

class VideoList extends Component {
    render() {
        const videoList = this.props.songs.videos.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='ui left aligned content'>
                        {song.title}
                    </div>

                    <div className='ui right floated button primary'>Select</div>
                </div>
            )
        });

        return (
            <div className='ui divided list'>{videoList}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state
    }
}

export default connect(mapStateToProps)(VideoList);