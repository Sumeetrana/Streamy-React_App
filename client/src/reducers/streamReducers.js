import _ from 'lodash';

export default (state={}, action) => {
    switch(action.type) {
        case 'FETCH_STREAMS':
            return { ...state, ..._.mapKeys(action.payload, 'id')}
        case 'FETCH_STREAM':
            return { ...state, [action.payload.id]: action.payload }; /// Syntax {key: value} pair will be added to state object
        case 'CREATE_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'EDIT_STREAM':
            return { ...state, [action.payload.id]: action.payload };
        case 'DELETE_STREAM':
            return _.omit(state, action.payload);
        default:
            return state;
    }
}