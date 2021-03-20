import { AuthTypes } from "../../types/AuthTypes";

// ---------
// ACTION CREATORS
export const actionCreators = {
    setUser: (payload) => ({
        type: AuthTypes.SET_USER,
        payload
    })
}

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case AuthTypes.login:
            localStorage.setItem("Authorization", JSON.stringify(action.payload.id_token));
            return {
                ...state,
                logged: true,
                token: action.payload.id_token
            }
        case AuthTypes.logout:

                return {
                    logged: false
                }
        case AuthTypes.SET_USER:
            return {...state, user: action.payload}

        default:
            return state;
    }
    }