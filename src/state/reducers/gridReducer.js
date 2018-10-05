import { HYDRATE_GRID } from '../../constants/actionTypes';
import { v4 } from 'uuid';

const itemIdInitializer = Array.apply(null, Array(4)).map(() => { return v4(); })
// init state
const initialState = {
    items: {},
    columns: {},
    columnOrder: [`column-${itemIdInitializer[0]}`]
}

// reducer definition
export default function(state = initialState, action) {

    switch(action.type) {

        case HYDRATE_GRID: {

            return {
                ...state,
                items: hydrateItems(),
                columns: hydrateColumns()
            }
        }
        default:
            return state;

    }
    
}


// reducer helper functions
function hydrateItems() {
    return {
        [`item-${itemIdInitializer[0]}`]: {
            id: `item-${itemIdInitializer[0]}`, content: `item ${0}`
        },
        [`item-${itemIdInitializer[1]}`]: {
            id: `item-${itemIdInitializer[1]}`, content: `item ${1}`
        },
        [`item-${itemIdInitializer[2]}`]: {
            id: `item-${itemIdInitializer[2]}`, content: `item ${2}`
        },
        [`item-${itemIdInitializer[3]}`]: {
            id: `item-${itemIdInitializer[3]}`, content: `item ${3}`
        }
    };
}

function hydrateColumns() {
    return {
        [`column-${itemIdInitializer[0]}`]: {
            id: `column-${itemIdInitializer[0]}`,
            title: 'Sample Column',
            itemIds: itemIdInitializer
        }
    };
}