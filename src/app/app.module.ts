import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './services/jwt.intercepter';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule, MatCardModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MyOrderComponent } from './my-order/my-order.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { CustomTextFilter } from '../app/pipes/textFIlter.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CustomTextFilter,
    MyOrderComponent,
    OrderConfirmationComponent
  ],
  imports: [
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    CdkStepperModule,
    HttpClientModule,
    MatIconModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
