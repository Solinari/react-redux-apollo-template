import React from 'react';
import Item from './Item';

export default class Column extends React.Component {
    render() {
        return (
            <div className="Column">
                <h3 className="Column-Title">{this.props.column.title}</h3>
                <div className="Item-List">
                    {this.props.items.map(item => <Item key={item.id} item={item}/>)}
                </div>
            </div>
        )
    }
}

