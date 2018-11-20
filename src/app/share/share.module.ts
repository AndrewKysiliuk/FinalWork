import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatAutocompleteModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
} from '@angular/material';

const materialModule = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, materialModule
  ],
  exports: [ materialModule, ],
})
export class ShareModule { }
