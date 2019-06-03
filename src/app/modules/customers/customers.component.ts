import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { CustomersService } from './customers.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

    customers;
    selectedCustomer;
    originalCustomer;
    workMode = { editMode: false };

    constructor(private customersService: CustomersService, private router: Router) {
    }

    ngOnInit() {
        this.loadCustomers();
    }

    addCustomer() {
        this.originalCustomer = null;
        this.selectedCustomer = {name : '', address:''};
        this.workMode = { editMode: true };
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

    editCustomer(customer) {
        this.originalCustomer = { ...customer };
        this.selectedCustomer = customer;
        this.workMode = { editMode: true };
    }

    updateCustomer(customer) {
        this.customersService.updateCustomer(customer)
            .subscribe((data: any) => {
                this.customers = data;
            });
    }

    insertCustomer(customer) {
        this.customersService.addCustomer(customer)
            .subscribe((data: any) => {
                this.customers = data;
            });
    }

    resetChanges() {
        if (this.originalCustomer) {
            this.selectedCustomer.address = this.originalCustomer.address;
            this.selectedCustomer.name = this.originalCustomer.name;
        }
    }

    showOrders(customer) {
        this.router.navigate(['/orders'], { queryParams: { customer: customer._id } });
    }
}
