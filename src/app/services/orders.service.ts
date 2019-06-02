import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    configUrl = 'assets/config.json';
    constructor(private http: HttpClient) {

    }

    getConfig() {
        return this.http.get(this.configUrl);
    }

    getOrders() {
        return this.http.get('http://localhost:4200/api/orders');
    }

    addOrder(order) {
        this.http.post('http://localhost:4200/api/order', order)
    }
}
