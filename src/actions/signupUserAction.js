import {Signup_USER} from './types'
export function signupUser(data){
    return{
        type: Signup_USER,
        payload: {
            user: data
        }
    }
}