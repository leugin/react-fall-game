import * as types from  '../types'
const initialState = {
    data: {},
    loading: false,
    error:null
};

export const roomReducer  = (state = initialState, action) => {
    console.log(action);
    switch (action.type){
        case  types.SELECT_ROOM: return {
            ...state,
            data: {
                id:action.payload
            },
            loading: false,
            error: null
        }
        default: return state;
    }
}
