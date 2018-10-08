import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Item from './Item';
import DraggableContainer from '../helpers/DraggableContainer';

export default class Column extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                {provided => (
                    <DraggableContainer 
                    className="Column"
                    innerRef={provided.innerRef}
                    provided={provided}
                    >
                            <h3 className="Column-Title">{this.props.column.title}</h3> 
                            <div className="Item-List">
                                {this.props.items.map(item => <Item key={item.id} item={item}/>)}
                            </div>
                    </DraggableContainer>

                )}
            </Draggable>

        )
    }
}

