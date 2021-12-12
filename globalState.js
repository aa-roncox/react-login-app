import { createState } from '@hookstate/core';

const initialState = {
    auth: false,
    userToken: '',
}

const globalState = createState(initialState);

export default globalState;