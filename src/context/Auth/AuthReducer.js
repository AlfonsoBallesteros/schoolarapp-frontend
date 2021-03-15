import { AuthTypes } from "../../types/AuthTypes";



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
        default:
            return state;
            }
    }