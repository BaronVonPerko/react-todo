import React from 'react';

import TodoService from './../services/TodoService';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.todoService = new TodoService();

        this.state = {
            newTodo: '',
            newDescription: ''
        }     
    }

    updateName = (event) => {
        this.setState({
            newTodo: event.target.value
        });
    };

    updateDescription = (event) => {
        this.setState({
            newDescription: event.target.value
        });
    }

    submit = (event) => {
        event.preventDefault();

        this.todoService.postTodo(this.state.newTodo, this.state.newDescription, this.props.listId).then((res) => {
            this.props.addTodo(res.data);

            this.setState({
                newTodo: '',
                newDescription: ''
            });
        });
    };

    render() {
        return (
            <div>
                {this.props.listId ? 
                    <div>
                        <input type="text" placeholder="New Todo" value={this.state.newTodo} onChange={this.updateName.bind(this)} />
                        <input type="text" placeholder="Description (optional)" value={this.state.newDescription} onChange={this.updateDescription.bind(this)} />
                        <button onClick={this.submit.bind(this)}>Submit</button>
                    </div> : ''}

                {this.props.todos.length || !this.props.listId ? '' : <div><em>No todo items for this list.  Please add one.</em></div>}

                {this.props.todos}
            </div>
        );
    }
}