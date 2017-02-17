import React from 'react';


export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.value}</li>
        );
    }
}