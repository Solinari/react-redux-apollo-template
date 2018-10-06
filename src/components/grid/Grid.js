import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hydrateGridAction } from '../../state/actions/actions';
import { getInitialGrid } from '../../state/selectors/selectors';
import Column from './Column';

// grid is the container component
class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.props.hydrateGridAction(); // action dispatch
    }

    render() {
        const grid = this.props.grid;
        return grid.isLoaded
        ? grid.columnOrder.map(columnId => {

            const column = grid.columns[columnId];
            const items = column.itemIds.map(itemId => grid.items[itemId]);

            return <Column key={column.id} column={column} items={items}/>;
        })
        : <div>Grid Not Loaded</div>
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hydrateGridAction
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