import { HYDRATE_GRID, TEST_ACTION, UPDATE_GRID_COLUMN_ORDER } from '../../constants/actionTypes';
import { v4 } from 'uuid';

export const testActionMessage = content => ({
    type: TEST_ACTION,
    payload: { 
        text: content,
        id: v4()
    }
});

export const hydrateGridAction = () => ({
    type: HYDRATE_GRID
});

export const updateGridColumnOrder = (destination, source, draggableId, type ) => ({
    type: UPDATE_GRID_COLUMN_ORDER,
    payload: {
        destination,
        source,
        draggableId,
        type
    }
})
