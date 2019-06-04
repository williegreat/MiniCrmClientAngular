import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CustomersComponent } from '../customers.component';

@Component({
    selector: 'app-edit-customer',
    templateUrl: './edit-customer.component.html',
    styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent {

    @Input() customer;
    @Input() workMode;
    @Input() updateAction;
    @Input() resetAction;

    constructor() {

    }

    saveChanges() {
        this.workMode = { editMode: false };
        this.updateAction(this.customer);
    }

    cancelChanges() {
        this.workMode = { editMode: false };
        this.resetAction();
    }
}
