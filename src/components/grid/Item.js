import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
            <div className="Item">{this.props.item.content}</div>
        )
    }
}