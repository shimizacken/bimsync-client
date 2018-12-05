import React, { Component } from 'react';
import logo from '../../assets/Bimsync-icon-blue_rgb.png';
import styles from './styles.scss';

export default class Header extends Component {

    render() {

        return(
            <header
                className={styles.header}
            >
                <div
                    style={{
                        padding: 10
                    }}
                >
                    <img
                        src={logo}
                        width={25}
                        title='bimsync'
                    />
                </div>
                <h3>
                    
                </h3>
            </header>
        );
    }
}