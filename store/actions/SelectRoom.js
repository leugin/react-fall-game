import * as types from  '../types'

export default id => {
    return {
        type: types.SELECT_ROOM,
        payload: id
    }
}
