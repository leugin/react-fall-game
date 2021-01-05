import * as types from  '../types'
import decks from  '../../shared/constants/DeckSpanis';

const initialState = {
    data: {
        deck:decks
    },
    loading: false,
    error:null
};

export const roomReducer  = (state = initialState, action) => {
    switch (action.type){
        case  types.SELECT_ROOM: return {
            ...state,
            data: {
                id:action.payload,
                deck:decks
            },
            loading: false,
            error: null
        }
        default: return state;
    }
}
