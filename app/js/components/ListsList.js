import React from 'react';

import AjaxService from './../services/AjaxService';

import ListItem from './ListItem';

export default class ListsList extends React.Component {
    constructor(props) {
        super(props);

        var self = this;

        self.state = {noListMessage: ''};
        
        self.ajax = new AjaxService();

        self.ajax.getLists().then((res) => {
            const dataList = res.map((data) => 
                <ListItem key={data.name} value={data.name} />
            );

            self.props.setLists(dataList);
        });
    }

    render() {
        return (
            <div>
                {this.props.lists}
                {this.props.lists.length ? '' : <em>There are no lists available.  Please create one.</em>}
            </div>
        );
    }
}
