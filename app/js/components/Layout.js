import React from 'react';

import Footer from './Footer';
import Header from './Header';
import NewList from './NewList';


export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NewList />
                <Footer />
            </div>
        );
    }
}
