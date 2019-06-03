import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { OrdersService } from './services/orders.service';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuComponent } from './shared/context-menu/context-menu.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        WorkspaceComponent,
        OrdersComponent,
        CustomersComponent,
        AnalysisComponent,
        EditCustomerComponent,
        ContextMenuComponent,
        EditOrderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
