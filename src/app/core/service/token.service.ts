import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    handle(token) {
        this.set(token);
    }

    set(token) {
        localStorage.setItem('token', token);
    }
    get() {
        return localStorage.getItem('token');
    }

    remove() {
        localStorage.removeItem('token');
    }

    payload(token) {
        if (token) {
            const payload = token.split('.')[1];
            return this.decode(payload);
        }
        return null;
    }

    decode(payload) {
        return JSON.parse(atob(payload));
    }


}
