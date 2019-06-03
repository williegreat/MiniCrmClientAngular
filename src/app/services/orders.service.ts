import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    constructor(private http: HttpClient) {
    }

    getOrders(customer) {
        if (customer) {
            return this.http.get(`http://localhost:4200/api/orders/${customer}`);
        }
        else {
            return this.http.get(`http://localhost:4200/api/orders`);
        }
    }

    addOrder(order, customerId) {
        return this.http.post('http://localhost:4200/api/orders', { 'order': order, 'customerId' : customerId });
    }

    deleteOrder(id) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        }
        return this.http.delete(`http://localhost:4200/api/orders/${id}`);
    }

    updateOrder(order, customerId) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        }
        return this.http.put('http://localhost:4200/api/orders', { 'order': order, 'customerId' : customerId }, options);
    }
}
