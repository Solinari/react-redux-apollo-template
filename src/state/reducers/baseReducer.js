import { TEST_ACTION } from '../../constants/actionTypes';

// init state
const initialState = {
    newTest: {}
}

// reducer definition
export default function(state = initialState, action) {

    switch(action.type) {

        case TEST_ACTION: {

            const testPayload = action.payload;

            return {
                ...state,
                newTest: testPayload
            }
        }
        default:
            return state;

    }
    
}
