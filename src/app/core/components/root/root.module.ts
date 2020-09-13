import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterModule } from '../../modules/character-module/character.module';
import { PlanetModule } from '../../modules/planet/planet.module';
import { SerieModule } from '../../modules/serie/serie.module';
import { SpecieModule } from '../../modules/specie/specie.module';



@NgModule({
  declarations: [ HomeComponent, HeaderComponent ],
  imports: [
    CommonModule,
    SharedModule,
    CharacterModule,
    PlanetModule,
    SerieModule,
    SpecieModule
  ],
  exports: [ HomeComponent, HeaderComponent ]
})
export class RootModule { }
