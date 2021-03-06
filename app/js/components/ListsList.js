import React from 'react';

import ListService from './../services/ListService';

import ListItem from './ListItem';

export default class ListsList extends React.Component {
    constructor(props) {
        super(props);

        var self = this;

        self.state = {noListMessage: ''};
        
        self.listService = new ListService();

        self.listService.getLists().then((res) => {
            const dataList = res.map((data) => 
                <ListItem key={data.name} value={data.name} id={data._id} click={self.selectList.bind(this)} />
            );

            self.props.setLists(dataList);
        });
    }

    selectList = (listId) => {
        this.props.selectList(listId);
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
