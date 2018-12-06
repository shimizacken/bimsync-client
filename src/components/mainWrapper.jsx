import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import styles from './styles.scss';

export default class MainWrapper extends Component {

    render() {

        return(
            <div
                className={styles.root}
            >
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}