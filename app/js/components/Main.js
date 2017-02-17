import React from 'react';

import Footer from './Footer';
import Header from './Header';
import ListItem from './ListItem';
import ListsList from './ListsList';
import NewList from './NewList';
import TodoItem from './TodoItem';
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
        lists.push(<ListItem key={newList._id} value={newList.name} id={newList._id} click={this.selectList.bind(this)} />);

        this.selectList(newList._id);

        this.setState({
            lists
        });
    }

    selectList = (selectedListId) => {
        this.todoService.getTodos(selectedListId).then((res) => {
            const dataList = res.map((data) => 
                <TodoItem key={data._id} value={data.text} id={data._id} />
            );

            this.setState({
                selectedListId,
                selectedListTodos: dataList
            });
        });
    }

    addTodo = (newTodo) => {
        var todos = this.state.selectedListTodos;
        todos.push(<TodoItem key={newTodo._id} value={newTodo.text} id={newTodo._id} />);

        this.setState({
            selectedListTodos: todos
        });
    }

    render() {
        return (
            <div>
                <Header />

                <p>Selected List: {this.state.selectedListId}</p>

                <NewList addNewList={this.addNewList.bind(this)} />

                <ListsList 
                    selectList={this.selectList.bind(this)} 
                    setLists={this.setLists.bind(this)} 
                    lists={this.state.lists} />

                <hr/>

                <TodoList 
                    todos={this.state.selectedListTodos} 
                    listId={this.state.selectedListId} 
                    addTodo={this.addTodo.bind(this)} />

                <hr />

                <Footer />
            </div>
        );
    }
}
