import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

    //customers: Array<Observable<any>> = new Array<Observable<any>>();
    customers;

    constructor(private customersService: CustomersService) {

    }

    ngOnInit() {
        this.loadCustomers();
    }

    addCustomer() {
        let name = prompt("Insert name");
        let address = prompt("Insert address");

        this.customersService.addCustomer({ name: name, address: address })
            .subscribe((data: any) => {
                this.customers = data;
            });
    }

    loadCustomers() {
        this.customersService.getCustomers()
            .subscribe((data: any) => {
                this.customers = data;
            });
    }

    deleteCustomer(id) {
        this.customersService.deleteCustomer(id)
            .subscribe((data: any) => {
                this.customers = data;
            });
    }

}
