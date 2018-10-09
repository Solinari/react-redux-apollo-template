import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from './Item';

export default class Column extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {provided => (
                    <div 
                    className="Column"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    >
                            <h3 className="Column-Title" {...provided.dragHandleProps}>{this.props.column.title}</h3> 
                            <div className="Item-List">
                                {this.props.items.map(item => <Item key={item.id} item={item}/>)}
                            </div>
                    </div>

                )}
            </Draggable>

        )
    }
}

