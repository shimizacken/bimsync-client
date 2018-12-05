import React, { Component } from 'react';
import { Loader } from '../loader';
import styles from './styles.scss';

export default class Viewer extends Component {

    state = {
        viewerLoaded: false
    };

    componentDidMount () {

        const script = document.createElement('script');

        script.src = 'https://api.bimsync.com/1.0/js/viewer.js';
        script.async = true;

        document.body.appendChild(script);

        $('.viewer').bind('viewer.load', () => {

            this.setState({
                viewerLoaded: true
            });

            $('.viewer').viewer('viewpoint', {
                "location": {
                    "x":1102.2204578698497,
                    "y":2975.0516012793782,
                    "z":51.7894960030292},
                    "direction":{
                        "x":0.3885754359815065,
                        "y":0.8119655574192117,
                        "z":-0.43556981543340584},
                    "up": {
                        "x":0.18802510694044272,
                        "y":0.3928964536321578,
                        "z":0.9001549510408244
                    },
                    "fov":60,"type":"perspective"
                });
            });
    }

    render() {

        console.log(styles);
        
        return(
            <div>
                <div
                    className='viewer'
                    style={{
                        height: '600px',
                        border: '1px solid gray',
                    }}
                    data-viewer='webgl'
                    data-url='https://api.bimsync.com/v2/projects/999d880dcef44d57b7dc1cc67ab094db/viewer3d/data?token=43236f9d71e84ffca59fd1c89bd75bfc'
                >
                    {
                        this.state.viewerLoaded !== true ? <div
                                                            style={{
                                                                display: 'flex',
                                                                height: '600px',
                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}
                                                            >
                                                                <Loader />
                                                            </div>
                                                                : null
                    }
                </div>
            </div>
        );
    }
}