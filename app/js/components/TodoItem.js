import React from 'react';

import TodoService from './../services/TodoService';


export default class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.todoService = new TodoService();

        this.state = {
            isComplete: this.props.isComplete
        };
    }

    markDone = () => {
        this.todoService.markAsDone(this.props.id).then((res) => {
            this.setState({
                isComplete: res.data.isComplete
            })
        });
    }

    render() {
        return (
            <li>
                {this.props.value}
                {this.props.description && this.props.description.length ? <em> - this.props.description</em> : ''}
                {this.state.isComplete ? '' : <button onClick={this.markDone.bind(this)}>Mark Done</button>}
            </li>
        );
    }
}