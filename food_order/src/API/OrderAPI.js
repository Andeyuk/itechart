import {AuthAPI} from './AuthAPI';

export const OrderAPI = {
    getHistory(){
        return AuthAPI.fetch('/profile/history')
        .catch(err=>err)
    }
}