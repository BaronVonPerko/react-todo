import React from 'react';

import Footer from './Footer';
import Header from './Header';
import ListItem from './ListItem';
import ListsList from './ListsList';
import NewList from './NewList';


export default class Main extends React.Component {
    constructor(props) {
        super(props);

        var self = this;

        self.state = {
            lists: []
        };
    }

    setLists = (lists) => {
        this.setState({
            lists
        });
    }

    addNewList = (newListName) => {
        var lists = this.state.lists;
        lists.push(<ListItem key={newListName} value={newListName} />);
        
        this.setState({
            lists
        });
    }

    render() {
        return (
            <div>
                <Header />
                <NewList addNewList={this.addNewList.bind(this)} />
                <ListsList setLists={this.setLists.bind(this)} lists={this.state.lists} />
                <Footer />
            </div>
        );
    }
}
