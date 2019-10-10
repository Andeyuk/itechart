import {AuthAPI} from './AuthAPI';

export const CartAPI = {
    checkout(purchases){
        return AuthAPI.fetch('/operations/checkout',{
            method:'Post',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                purchases
            })
        })
        .then(res => {
            if(res.status > 399 && res.status < 200) throw new Error(res.statusText)
            return res.json()
        })
        .catch(err=>err)
    }
}