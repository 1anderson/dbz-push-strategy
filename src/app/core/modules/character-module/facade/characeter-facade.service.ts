import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/core/components/services/crud-service/crud.service';
import { Character } from '../models/character';
import { ResourceList } from '@shared/enums/resource-list-enum';

@Injectable({
  providedIn: 'root'
})
export class CharaceterFacadeService {
  private readonly initialData: Character = {} as any;
  character$ = new BehaviorSubject<Character>(this.initialData);

  constructor(private http: HttpClient, private crudService: CrudService) { }

  getCharater( id: number ) {
    this.crudService.getById<Character>(ResourceList.characters, id)
      .subscribe( (character: Character ) => {
        this.updateState(character);
      });
  }

  updateState(character: Character) {
    this.character$.next(character);
  }
}
