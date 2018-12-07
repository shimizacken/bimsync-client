import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Modal from 'react-modal';
import { Loader, DialogContent } from '../loader';
import { request } from '../../services/fetch';
import styles from './styles.scss';

@inject('accessUrlStore') @observer
export default class Viewer extends Component {

    accessUrlStore = this.props.accessUrlStore;
    viewerUrl = 'https://api.bimsync.com/1.0/js/viewer.js';

    state = {
        displayLoder: false,
        modalIsOpen: false,
        isViewerScriptAdded: false
    };

    openModal = () => {

        this.setState({modalIsOpen: true});
      }
     
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }
     
    closeModal = () => {

        this.setState({modalIsOpen: false});
    }

    removeViewerScriptTag() {

        $('.viewer').unbind('viewer.load');
        $('.viewer').unbind('viewer.select');

        const scripts = document.getElementsByTagName('script');

        for (var i = scripts.length; i--;) {

            const element = scripts[i];

            if (element.src === this.viewerUrl) {

                element.parentNode.removeChild(element);
            }
        }
    }

    initiateViewer = (e) => {

        this.setState({
            displayLoder: true
        });

        this.removeViewerScriptTag();

        const script = document.createElement('script');

        script.src = this.viewerUrl;
        script.async = true;

        document.body.appendChild(script);
        
        $('.viewer').bind('viewer.load', () => {

            this.setState({
                displayLoder: false
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

        $('.viewer').bind('viewer.select', (e, d) => {

            console.log('select!', [e, d]);

            request(`https://api.bimsync.com/v2/projects/${'999d880dcef44d57b7dc1cc67ab094db'}/ifc/products/${d}`)
                .then(result => {

                    if (result.weather && result.weather.length > 0) {
                        
                        this.setState({
                            cityName: ''
                        });

                        this.props.weather.setWeather(result);
                        this.updateHistorylist(result);
                    }
                    else {

                        if (result && result.message) {

                            this.setState({
                                errorMessage: result.message
                            });
                        }
                    }
                })
                .catch(error => {

                    this.setState({
                        errorMessage: error
                    });
                })
                .finally(_ => {

                    this.setState({
                        displayLoader: false
                    });
                });

            this.openModal();
        });
    }

    render() {
        
        if (!this.accessUrlStore.url) {
            
            return null;
        }

        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              width: '50%'
            }
          };

        return(
            <div>
                <div>
                    <button
                        onClick={this.initiateViewer}
                    >
                        Load Model
                    </button>
                </div>
                <div
                    data-cy='viewer'
                    className='viewer'
                    style={{
                        height: '80vh',
                        border: '1px solid gray',
                        backgroundColor: '#E5F1FF'
                    }}
                    data-viewer='webgl'
                    data-url={this.accessUrlStore.url}
                >
                    {
                        this.state.displayLoder === true ? <div
                                                                className={styles.loaderWrapper}
                                                            >
                                                                <div>
                                                                    <Loader />
                                                                    <div
                                                                        className={styles.loaderTextWrapper}
                                                                    >
                                                                        Loading...
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                : null
                    }
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div
                            style={{
                                padding: '10px'
                            }}
                        >
                            <button
                                onClick={this.closeModal}
                            >
                                Close
                            </button>
                        </div>
                        <div
                            className={styles.dialogContent}
                        >
                            <DialogContent />
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}