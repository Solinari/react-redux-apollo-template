import { HYDRATE_GRID } from '../../constants/actionTypes';
import { v4 } from 'uuid';

const itemIdInitializer = Array.apply(null, Array(4)).map(() => { return v4(); });

// init state
const initialState = {
    items: {},
    columns: {},
    columnOrder: [`${itemIdInitializer[0]}`],
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
                isLoaded: true
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
        [`${itemIdInitializer[0]}`]: {
            id: `${itemIdInitializer[0]}`,
            title: 'Sample Column',
            itemIds: itemIdInitializer
        }
    };
}