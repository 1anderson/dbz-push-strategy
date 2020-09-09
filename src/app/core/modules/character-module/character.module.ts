import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';




@NgModule({
  declarations: [CharacterListComponent, CharacterComponent],
  imports: [
    CommonModule
  ]
})
export class CharacterModule { }
