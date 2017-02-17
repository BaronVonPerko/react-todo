import React from 'react';
import 'whatwg-fetch';

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

        fetch('http://localhost:8080/api/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newListName
            })
        }).then((res) => {
            console.log(res);
        });
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
