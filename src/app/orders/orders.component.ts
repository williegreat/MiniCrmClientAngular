import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import io from 'socket.io-client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

    orders;
    customer;
    selectedOrder;
    originalOrder;
    workMode = { editMode: false };

    constructor(private ordersService: OrdersService, private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.customer = this.route.snapshot.queryParams.customer;
        this.loadOrders();
        // const socket = io('http://localhost:3000/');
        // socket.on('news', function (data) {
        //     console.log(data);
        //     socket.emit('my other event', { my: 'data' });
        // });
    }

    addOrder() {
        this.originalOrder = null;
        this.selectedOrder = { customerId: this.customer, orderId: '', quantity :0, description:'' };
        this.workMode = { editMode: true };
    }

    loadOrders() {
        this.ordersService.getOrders(this.customer)
            .subscribe((data: any) => {
                this.orders = data;
            });
    }

    deleteOrder(id) {
        this.ordersService.deleteOrder(id)
            .subscribe((data: any) => {
                this.orders = data;
            });
    }

    editOrder(order) {
        this.originalOrder = { ...order };
        this.selectedOrder = order;
        this.workMode = { editMode: true };
    }

    updateOrder(order) {
        this.ordersService.updateOrder(order, this.customer)
            .subscribe((data: any) => {
                this.orders = data;
            });
    }

    insertOrder(order) {
        this.ordersService.addOrder(order, this.customer)
            .subscribe((data: any) => {
                this.orders = data;
            });
    }

    resetChanges() {
        if (this.originalOrder) {
            this.selectedOrder.customerId = this.originalOrder.customerId;
            this.selectedOrder.orderId = this.originalOrder.orderId;
            this.selectedOrder.description = this.originalOrder.description;
            this.selectedOrder.quantity = this.originalOrder.quantity;
        }
    }
}