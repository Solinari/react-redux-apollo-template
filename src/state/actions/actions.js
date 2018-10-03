import { TEST_ACTION } from '../../constants/actionTypes';

export const testActionMessage = content => ({
    type: TEST_ACTION,
    payload: { content }
});
