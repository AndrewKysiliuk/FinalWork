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
  MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule,
} from '@angular/material';
import {TruncatePipePipe} from './Pipe/truncate-pipe.pipe';

const materialModule = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
];

@NgModule({
  declarations: [ TruncatePipePipe ],
  imports: [
    CommonModule, materialModule
  ],
  exports: [ materialModule, TruncatePipePipe ],
})
export class ShareModule { }
