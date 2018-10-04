import { TEST_ACTION } from '../../constants/actionTypes';
import { v4 } from 'uuid';

export const testActionMessage = content => ({
    type: TEST_ACTION,
    payload: { 
        text: content,
        id: v4()
    }
});
