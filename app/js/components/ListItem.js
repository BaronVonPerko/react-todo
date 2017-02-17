import React from 'react';


export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    click = () => {
        this.props.click(this.props.id);
    }

    render() {
        return (
            <div onClick={this.click}>{this.props.value}</div>
        );
    }
}