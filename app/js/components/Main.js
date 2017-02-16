import React from 'react';

import Footer from './Footer';
import Header from './Header';
import NewList from './NewList';


export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.submitNewList = this.submitNewList.bind(this);
    }

    submitNewList(newListName) {
        console.log(newListName);
    }

    render() {
        return (
            <div>
                <Header />
                <NewList submitNewList={this.submitNewList} />
                <Footer />
            </div>
        );
    }
}
