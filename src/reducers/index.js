import {combineReducers} from 'redux';

const videos = () => {
    return [
        {title: 'Chal ghar chale', length: '5:10'},
        {title: 'Mere Bina', length: '4:30'},
        {title: 'Tum Mile', length: '4:44'},
        {title: 'Main Agar', length: '4:05'},
        {title: 'Tu chahiye', length: '5:13'},
    ]
}

const selectedVideo = (oldVideo = null, action) => {
    if (action.type === 'SELECT-VIDEO') {
        return action.payload.selectedVideo;
    }
    return oldVideo;
}

const reducers = combineReducers({videos, selectedVideo});

export default reducers;