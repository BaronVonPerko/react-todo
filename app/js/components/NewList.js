import React from 'react';

import ListService from './../services/ListService';


export default class NewList extends React.Component {
    constructor(props) {
        super(props);

        this.listService = new ListService();

        this.state = {
            newListName: ''
        };
    }

    changeName = (event) => {
        this.setState({
            newListName: event.target.value
        });
    }

    submit = (event) => {
        event.preventDefault();

        this.listService.createNewList(this.state.newListName).then((res) => {
            this.props.addNewList(res.data);
            
            this.setState({
                newListName: ''
            });
        });        
    }

    render() {
        return (
            <div>
                <h3>Create a new Todo List</h3>
                <input type="text" placeholder="New List Name" value={this.state.newListName} onChange={this.changeName.bind(this)} />
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        );
    }
}
