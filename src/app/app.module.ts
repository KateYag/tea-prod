import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbAccordionModule, NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductsModule} from "./pages/products/products.module";
import {MainModule} from "./pages/main/main.module";
import {OrderModule} from "./pages/order/order.module";
import {CatalogModule} from "./pages/catalog/catalog.module";
import {SharedModule} from "./shared/shared.module";


declare var $: any;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAccordionModule,
    NgbModalModule,
    ProductsModule,
    MainModule,
    OrderModule,
    CatalogModule,
    SharedModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
