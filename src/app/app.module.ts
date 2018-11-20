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
import { GeneralComponent } from './general/general.component';
import { ItemComponent } from './general/item/item.component';
import { ItemCreateComponent } from './general/item-create/item-create.component';
import { ItemPageComponent } from './general/item-page/item-page.component';

registerLocaleData(localeUk, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    ItemComponent,
    ItemCreateComponent,
    ItemPageComponent
  ],
  imports: [
    BrowserModule, ShareModule, HttpClientModule
  ],
  providers: [HttpClientService, AuthService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
