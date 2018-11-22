import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShareModule } from './share/share.module';
import { HttpClientService } from './Services/HttpClientService';
import { AuthService } from './Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GeneralModule } from './general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationComponent } from './user/authorization/authorization.component';
import { RegisterComponent } from './user/register/register.component';

registerLocaleData(localeUk, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    HttpClientModule,
    FlexLayoutModule,
    GeneralModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientService, AuthService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
