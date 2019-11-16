import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { JsonpModule } from '@angular/http';

/* components */
import { CardComponent } from './components/card/card.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
  ],
  declarations: [
    CardComponent,
    FileTreeComponent
  ],
  exports: [
    CardComponent,
    FileTreeComponent
  ]
})
export class SharedModule { }
