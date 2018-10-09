import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hydrateGridAction, updateGridColumnOrder } from '../../state/actions/actions';
import { getInitialGrid } from '../../state/selectors/selectors';
import Column from './Column';
import { COLUMN } from '../../constants/constants';

// grid is the container component
class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.props.hydrateGridAction(); // action dispatch
    }

    // state update on drag and drop
    onDragEnd = result => {

        // spread result for state use
        const { destination, source, draggableId, type } = result;

        // checks before dispatching action
        if (!destination
            || (destination.droppableId === source.droppableId
            &&  destination.index === source.index )) {
            return;
        }

        this.props.updateGridColumnOrder( destination, source, draggableId, type ); // dispatch action
    }

    render() {
        const grid = this.props.grid;
        return grid.isLoaded
        ? <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
                droppableId="all-columns"
                direction="horizontal"
                type={COLUMN}
            >
                {provided => (
                    <div 
                    className="Droppable-Grid"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    >
                    {grid.columnOrder.map((columnId, index) => {

                        const column = grid.columns[columnId];
                        const items = column.itemIds.map(itemId => grid.items[itemId]);

                        return <Column key={column.id} column={column} items={items} index={index}/>;
                    })}
                    {provided.placeholder}
                    </div>   
                )}
            </Droppable>
        </DragDropContext>

        : <div>Grid Not Loaded</div>
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hydrateGridAction,
        updateGridColumnOrder
    }, dispatch);
}

const mapStateToProps = state => {
    const grid = getInitialGrid(state);
    return { grid };
}

// export redux connected component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);