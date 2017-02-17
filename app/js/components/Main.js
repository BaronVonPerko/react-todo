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
            lists: [],
            selectedListId: null
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

    selectList = (selectedListId) => {
        this.setState({
            selectedListId
        });
    }

    render() {
        return (
            <div>
                <Header />
                <p>Selected List: {this.state.selectedListId}</p>
                <NewList addNewList={this.addNewList.bind(this)} />
                <ListsList selectList={this.selectList.bind(this)} setLists={this.setLists.bind(this)} lists={this.state.lists} />
                <Footer />
            </div>
        );
    }
}
