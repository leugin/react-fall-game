import * as types from  '../types'

export default (params = {}) => {
    return {
        type: types.GET_ROOMS,
        payload:  params
    }
}
