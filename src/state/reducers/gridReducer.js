import { HYDRATE_GRID, UPDATE_GRID_COLUMN_ORDER } from '../../constants/actionTypes';
import { v4 } from 'uuid';

const itemIdInitializer = Array.apply(null, Array(4)).map(() => { return v4(); });
const columnIdInitializer = Array.apply(null, Array(2)).map(() => { return v4(); });

// init state
const initialState = {
    items: {},
    columns: {},
    columnOrder: {},
    isLoaded: false
}

// reducer definition
export default function(state = initialState, action) {

    switch(action.type) {

        case HYDRATE_GRID: {

            return {
                ...state,
                items: hydrateItems(),
                columns: hydrateColumns(),
                columnOrder: columnIdInitializer,
                isLoaded: true
            }
        }

        case UPDATE_GRID_COLUMN_ORDER: {

            const newColumnOrder = Array.from(state.columnOrder);
            
            // splice the columns
            // TODO: replace 1 and 0 with actual indexes for many reordering
            newColumnOrder.splice(action.payload.source.index, 1);
            newColumnOrder.splice(action.payload.destination.index, 0, action.payload.draggableId);

            return {
                ...state,
                columnOrder: newColumnOrder
            }
        }

        default:
            return state;

    }
    
}


// reducer helper functions
function hydrateItems() {
    return {
        [`${itemIdInitializer[0]}`]: {
            id: `${itemIdInitializer[0]}`, content: `item ${0}`
        },
        [`${itemIdInitializer[1]}`]: {
            id: `${itemIdInitializer[1]}`, content: `item ${1}`
        },
        [`${itemIdInitializer[2]}`]: {
            id: `${itemIdInitializer[2]}`, content: `item ${2}`
        },
        [`${itemIdInitializer[3]}`]: {
            id: `${itemIdInitializer[3]}`, content: `item ${3}`
        }
    };
}

function hydrateColumns() {
    return {
        [`${columnIdInitializer[0]}`]: {
            id: `${columnIdInitializer[0]}`,
            title: 'Sample Column 1',
            itemIds: itemIdInitializer
        },
        [`${columnIdInitializer[1]}`]: {
            id: `${columnIdInitializer[1]}`,
            title: 'Sample Column 2',
            itemIds: itemIdInitializer
        }
    };
}
