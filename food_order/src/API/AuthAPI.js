import jwt from 'jsonwebtoken';
import {keys} from '../config';

const {USER_KEY, JWT_KEY} = keys.LSTORAGE;

export const AuthAPI = {
    login(username, password, remember){
        return fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                remember
            })
        })
        .then(res => {
            if(res.status !== 200) throw new Error('404: not found')
            return res.json()
        })
        .then(json=>{
            this.setUser(json.user);
            this.setToken(json.token)
            return json;
        })
        .catch(err=>err);
    },

    logout(){
        this.removeUser();
        this.removeToken();
    },

    register(username, email, password){
        return fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        .then(res => {
            if(res.status !== 200) throw new Error('404: not found')
            return res.json()
        })
        .catch(err=>console.log(err));
    },

    fetch(url, opt={}){
        return fetch(url, {...opt, headers: {...opt.headers, Authorization: this.getToken()}})
    },

    isLogged(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    },

    isTokenExpired(token){
        const decoded = jwt.decode(token);

        if (!decoded) return false;

        if (decoded.exp < Date.now() / 1000)
            return true

        return false;

    },

    setToken(token){
        localStorage.setItem(JWT_KEY, token);
    },

    setUser(user){
        const stringified = JSON.stringify(user);
        localStorage.setItem(USER_KEY, stringified);
    },

    getUser(){
        try{
            return JSON.parse(localStorage.getItem(USER_KEY));
        }
        catch(err){
            console.error(err);
            this.removeUser();
            return null
        }
        
    },

    removeUser(){
        localStorage.removeItem(USER_KEY);
    },

    getToken(){
        return localStorage.getItem(JWT_KEY);
    },

    removeToken(){
        localStorage.removeItem(JWT_KEY);
    },

    getProfile() {
        return jwt.decode(this.getToken());
    }

    
}
