import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ProductsComponent} from "./pages/products/products.component";
import {OrderComponent} from "./pages/order/order.component";
declare var $: any;
const routes: Routes = [





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
