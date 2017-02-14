import React from 'react';


export default class NewList extends React.Component {
    constructor(props) {
        super(props);

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
        // todo 
    }

    render() {
        return (
            <div>
                <h3>Create a new Todo List</h3>
                <input type="text" placeholder="New List Name" value={this.newListName} onChange={this.changeName.bind(this)} />
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        );
    }
}
