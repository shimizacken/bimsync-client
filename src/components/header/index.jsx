import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logo from '../../assets/Bimsync-icon-blue_rgb.png';
import styles from './styles.scss';

@inject('accessUrlStore') @observer
export default class Header extends Component {

    accessUrlStore = this.props.accessUrlStore;

    onChange = e => {

        this.accessUrlStore.setUrl(e.target.value);
    }

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
                <input
                    className={styles.accessUrl}
                    onChange={this.onChange}
                />
            </header>
        );
    }
}