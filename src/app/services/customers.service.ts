import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {

    constructor(private http: HttpClient) {

    }

    getCustomers() {
        return this.http.get('http://localhost:4200/api/customers');
    }

    addCustomer(customer) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        }

        return this.http.post('http://localhost:4200/api/customers', { customer: customer }, options);
    }

    deleteCustomer(id) {
        //id = '5cf22de181d46ef41564e9f9';
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = {
            headers: headers
        }

        return this.http.delete(`http://localhost:4200/api/customers/${id}`);
    }
}
