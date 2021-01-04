import * as types from  '../types'
const initialState = {
    data: [ ],
    loading: false,
    error:null
};

export const roomsReducer  = (state = initialState, action) => {
    switch (action.type){
        case  types.GET_ROOMS: return {
            ...state,
            data: [
                {
                    id:1,
                    name:'Room',
                    country: {
                        id:1,
                        name: 'Peru'
                    },
                    participants: [
                        {
                            id:1,
                            name:'Miguel',

                        }
                    ]
                },
                {
                    id:2,
                    name:'Room2',
                    country: {
                        id:1,
                        name: 'Peru'
                    },
                    participants: [
                        {
                            id:1,
                            name:'Miguel',

                        }
                    ]
                }
            ],
            loading: false,
            error: null
        }
        default: return state;
    }
}
