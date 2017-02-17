import React from 'react';

import Footer from './Footer';
import Header from './Header';
import ListItem from './ListItem';
import ListsList from './ListsList';
import NewList from './NewList';
import TodoList from './TodoList';

import TodoService from './../services/TodoService';


export default class Main extends React.Component {
    constructor(props) {
        super(props);

        var self = this;

        self.todoService = new TodoService();

        self.state = {
            lists: [],
            selectedListId: null,
            selectedListTodos: []
        };
    }

    setLists = (lists) => {
        this.setState({
            lists
        });
    }

    addNewList = (newList) => {
        var lists = this.state.lists;
        lists.push(<ListItem key={newList.name} value={newList.name} id={newList._id} click={this.selectList.bind(this)} />);

        this.selectList(newList._id);

        this.setState({
            lists
        });
    }

    selectList = (selectedListId) => {
        this.todoService.getTodos(selectedListId).then((res) => {
            this.setState({
                selectedListId,
                selectedListTodos: res
            });
        });
    }

    render() {
        return (
            <div>
                <Header />
                <p>Selected List: {this.state.selectedListId}</p>
                <NewList addNewList={this.addNewList.bind(this)} />
                <ListsList selectList={this.selectList.bind(this)} setLists={this.setLists.bind(this)} lists={this.state.lists} />
                <hr/>
                <TodoList todos={this.state.selectedListTodos} listId={this.state.selectedListId} />
                <hr />
                <Footer />
            </div>
        );
    }
}
