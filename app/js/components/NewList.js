import React from 'react';

import AjaxService from './../services/AjaxService';


export default class NewList extends React.Component {
    constructor(props) {
        super(props);

        this.ajax = new AjaxService();

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

        this.ajax.createNewList(this.state.newListName).then((res) => {
            console.log(res);
            
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
