import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {

    constructor(private http: HttpClient) {}
    urlNetCore = 'http://localhost:5003';
    urlJava = 'http://localhost:8080';
    getIdentityFromNetCore() {
        return this
                .http
                .get(`${this.urlNetCore}/Identity`);
    }

    getIdentityFromJava() {
        return this
                .http
                .get(`${this.urlJava}/Identity`);
    }

}