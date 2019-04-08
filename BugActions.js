import { ADD_BUG } from './types';

export const addBug = bugIndex => (
    {
        type: 'ADD_BUG',
        payload: bugIndex,
    }
);