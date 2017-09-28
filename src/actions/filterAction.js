import { SET_FILTER } from '../constants/filterActionTypes';

export const setFilter = (filterType) => ({
    type: SET_FILTER,
    filter: filterType
});