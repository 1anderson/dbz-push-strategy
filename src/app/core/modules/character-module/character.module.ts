import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { TableCharacterComponent } from './components/table-character/table-character.component';




@NgModule({
  declarations: [CharacterListComponent, CharacterComponent, TableCharacterComponent],
  imports: [
    CommonModule
  ]
})
export class CharacterModule { }
