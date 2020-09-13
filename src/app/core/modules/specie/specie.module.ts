import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TableSpecieComponent } from './components/table-specie/table-specie.component';



@NgModule({
  declarations: [ TableSpecieComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ TableSpecieComponent ]
})
export class SpecieModule { }
