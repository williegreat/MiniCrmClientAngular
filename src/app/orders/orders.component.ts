import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import io from 'socket.io-client';



@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

    constructor(private ordersService: OrdersService) {

    }

    ngOnInit() {
        // this.ordersService.getConfig()
        //     .subscribe((data: any) => {
        //         alert(JSON.stringify(data))
        //     });

        this.ordersService.getOrders()
            .subscribe((data: any) => {
                //alert(JSON.stringify(data))
            });
        const socket = io('http://localhost:3000/');
        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
        });
    }
}
