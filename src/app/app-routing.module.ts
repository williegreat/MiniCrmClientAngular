import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
    { path: 'customers', component: CustomersComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'analysis', component: AnalysisComponent },
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    // { path: '**', component: WorkspaceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
