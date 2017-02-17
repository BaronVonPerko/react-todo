import React from 'react';


export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.value}
                {this.props.description && this.props.description.length ? <em> - this.props.description</em> : ''}
            </li>
        );
    }
}