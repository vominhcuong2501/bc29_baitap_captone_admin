import { GET_FILM_LIST, GET_USER_LIST } from "../types/adminType"


const DEFAULT_STATE = {
    filmList: [],
    userList: []
}


export const AdminReducer = (state = DEFAULT_STATE, {payload, type}) =>{
    switch (type) {
        case GET_FILM_LIST: {
            state.filmList = payload
            return {...state}
        }

        case GET_USER_LIST: {
            state.userList = payload
            return {...state}
        }
        default:
            return {...state}
    }
}