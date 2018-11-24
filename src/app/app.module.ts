import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { HttpClientService } from './Services/HttpClientService';
import { AuthService } from './Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneralModule } from './general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationComponent } from './user/authorization/authorization.component';
import { RegisterComponent } from './user/register/register.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeUk, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegisterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    HttpClientModule,
    GeneralModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [HttpClientService, AuthService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
