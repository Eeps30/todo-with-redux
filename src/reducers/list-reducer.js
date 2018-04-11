import types from '../components/actions/types';

const DEFAULT_STATE = {
    items: [],
    singleItem: {}
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.GET_LIST_DATA:
            return {...state, items: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
            console.log('Get single Item Result: ', action)
            return {...state, singleItem: action.payload.data.todo};
        case types.DELETE_SINGLE_ITEM:
            console.log('Item being deleted: ', response)
            return {...state, singleItem: action.payload.data.todo};
        case types.TOGGLE_COMPLETE:
            console.log('Getting item details');
            return {...state, singleItem: action.payload.data.todo};
        default: 
            return state;
    }
}
