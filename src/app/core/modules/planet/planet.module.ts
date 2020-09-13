import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePlanetComponent } from './components/table-planet/table-planet.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [TablePlanetComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TablePlanetComponent]
})
export class PlanetModule { }
