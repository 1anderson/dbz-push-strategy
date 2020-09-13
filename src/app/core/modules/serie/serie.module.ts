import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSerieComponent } from './components/table-serie/table-serie.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [ TableSerieComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ TableSerieComponent ]
})
export class SerieModule { }
