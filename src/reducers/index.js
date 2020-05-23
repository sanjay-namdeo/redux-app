import {combineReducers} from 'redux';

const videos = (oldVideoList, action) => {
    if (action.type === 'CREATE-VIDEO-LIST') {
        return [...action.payload.videoList];
    }
    return oldVideoList;
}

const selectedVideo = (oldVideo, action) => {
    if (action.type === 'SELECT-VIDEO') {
        return action.payload.selectedVideo;
    }
    return oldVideo;
}

const reducers = combineReducers({videos, selectedVideo});

export default reducers;