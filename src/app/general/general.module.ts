import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { GeneralComponent } from './general.component';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ItemComponent,
    ItemCreateComponent,
    ItemPageComponent,
    GeneralComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemComponent,
    ItemCreateComponent,
    ItemPageComponent,
    GeneralComponent,
  ]
})
export class GeneralModule { }
