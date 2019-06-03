import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { WorkspaceComponent } from './modules/layout/workspace/workspace.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { AnalysisComponent } from './modules/analysis/analysis.component';
import { OrdersService } from './modules/orders/orders.service';
import { EditCustomerComponent } from './modules/customers/edit-customer/edit-customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuComponent } from './shared/context-menu/context-menu.component';
import { EditOrderComponent } from './modules/orders/edit-order/edit-order.component';
import { EditComponentComponent } from './shared/edit-component/edit-component.component';

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
        EditOrderComponent,
        EditComponentComponent
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
