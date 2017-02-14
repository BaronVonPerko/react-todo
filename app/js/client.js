import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.message = 'Hello, world!';
    }

    render() {
        return (
            <h1>{this.message}</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);