import React from 'react';

import AjaxService from './../services/AjaxService';

function ListItem(props) {
    return <div>{props.value}</div>
}

export default class ListsList extends React.Component {
    constructor(props) {
        super(props);

        var self = this;

        self.ajax = new AjaxService();

        self.state = { list: [] };

        self.ajax.getLists().then((res) => {
            console.log(res);

            const dataList = res.map((data) => 
                <ListItem key={data.name} value={data.name} />
            );

            self.setState({
                list: dataList
            });
        });
    }

    render() {
        return (
            <div>
                {this.state.list}
            </div>
        );
    }
}
