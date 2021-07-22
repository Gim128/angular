import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CustomerPageComponent } from './component/customer-page/customer-page.component';
import { ItemPageComponent } from './component/item-page/item-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import {RouterModule} from "@angular/router";
import { SaveCustomerPageComponent } from './component/customer-page/items/save-customer-page/save-customer-page.component';
import { DeleteCustomerPageComponent } from './component/customer-page/items/delete-customer-page/delete-customer-page.component';
import { UpdateCustomerPageComponent } from './component/customer-page/items/update-customer-page/update-customer-page.component';
import { SearchCustomerPageComponent } from './component/customer-page/items/search-customer-page/search-customer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerPageComponent,
    ItemPageComponent,
    OrderPageComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    SaveCustomerPageComponent,
    DeleteCustomerPageComponent,
    UpdateCustomerPageComponent,
    SearchCustomerPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      BrowserAnimationsModule,
        FormsModule,
      ReactiveFormsModule,
      RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
