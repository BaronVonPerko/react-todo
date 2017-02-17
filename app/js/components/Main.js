import React from 'react';

import Footer from './Footer';
import Header from './Header';
import ListsList from './ListsList';
import NewList from './NewList';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <NewList />
                <ListsList />
                <Footer />
            </div>
        );
    }
}
