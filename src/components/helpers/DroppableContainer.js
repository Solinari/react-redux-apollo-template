import React from 'react';

export default class DroppableContainer extends React.Component {
    render() {
        const { provided, innerRef } = this.props;
        return (
        <div
            {...provided.droppableProps}
            ref={innerRef}
        >
        </div>
        );
    }
}