import React from 'react';

export default class DraggableContainer extends React.Component {
    render() {
        const { provided, innerRef } = this.props;
        return (
        <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={innerRef}
        >
        </div>
        );
    }
}