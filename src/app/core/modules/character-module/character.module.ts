import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { TableCharacterComponent } from './components/table-character/table-character.component';
import { SharedModule } from '@shared/shared.module';
import { CharacterRoutingModule } from './character.routing.module';




@NgModule({
  declarations: [CharacterListComponent, CharacterComponent, TableCharacterComponent],
  imports: [
    CommonModule,
    SharedModule,
    CharacterRoutingModule
  ],
  exports: [ TableCharacterComponent ]
})
export class CharacterModule { }
