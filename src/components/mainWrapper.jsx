import React, { Component } from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

export default class MainWrapper extends Component {

    render() {

        return(
            <div className='main-wrapper'>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}