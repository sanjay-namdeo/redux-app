const videoList = () => {
    return {
        type: 'CREATE-VIDEO-LIST',
        payload: {
            videoList: [
                {title: 'Chal ghar chale', length: '5:10'},
                {title: 'Mere Bina', length: '4:30'},
                {title: 'Tum Mile', length: '4:44'},
                {title: 'Main Agar', length: '4:05'},
                {title: 'Tu chahiye', length: '5:13'},
            ]
        }
    }
}

const selectedVideo = (video) => {
    return {
        type: 'SELECT-VIDEO',
        payload: {
            selectedVideo: video
        }
    }
}

export {videoList, selectedVideo};