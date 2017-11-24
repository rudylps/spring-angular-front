import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GridComponent } from '../grid/grid.component';
import { GrannyService } from '../granny.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule   
  ],
  declarations: [
    GridComponent
  ],
  providers: [
    GrannyService
  ],
  exports: [
    GridComponent
  ]
})
export class BodyModule { }
