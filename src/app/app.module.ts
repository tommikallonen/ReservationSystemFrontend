import { forwardRef, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { environment } from '../environments/environment';
import { ApiModule } from './api/api.module'
import { ApiInterceptor } from './api-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiRequestConfiguration } from './api-request-configuration';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fi-FI' },
    DatePipe,
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER,
    ApiRequestConfiguration
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule.setLocale('fi-FI'),
    MatCardModule,
    MatTabsModule,
    ApiModule.forRoot({ rootUrl: 'https://localhost:7094' }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
