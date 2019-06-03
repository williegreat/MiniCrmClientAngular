import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './modules/customers/customers.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { AnalysisComponent } from './modules/analysis/analysis.component';
import { WorkspaceComponent } from './modules/layout/workspace/workspace.component';

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
