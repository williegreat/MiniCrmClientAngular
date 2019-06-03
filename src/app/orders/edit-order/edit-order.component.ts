import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent  {

  @Input() order;
  @Input() workMode;
  @Input() updateAction;
  @Input() resetAction;

  constructor() { 
  }

  saveChanges() {
    this.workMode = { editMode: false };
    this.updateAction(this.order);
  }

  cancelChanges() {
    this.workMode = { editMode: false };
    this.resetAction();
  }
}
