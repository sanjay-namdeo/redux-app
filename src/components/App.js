import React from 'react';
import VideoList from "./VideoList";

const App = () => {
    return (
        <div className="ui container grid">
            <div className='ui row'>
                <div className='seven wide column'>
                    <VideoList/>
                </div>
            </div>
        </div>
    );
};

export default App;