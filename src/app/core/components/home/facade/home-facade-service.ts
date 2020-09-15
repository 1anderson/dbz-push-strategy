import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { CrudService } from '../../services/crud-service/crud.service';
import State from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  private readonly initState: State = { listItems: [] };
  atualDataList$: Observable<any>;
  state$ = new BehaviorSubject<State>(this.initState);

  constructor(private crudServcie: CrudService) {
    this.atualDataList$ = this.state$.pipe(map( (stateData: State) => stateData.listItems)).pipe(distinctUntilChanged());
  }

  updateList(resourceName: string) {
    this.crudServcie.get(resourceName)
      .subscribe( (listItems: Array<any>) => {
        this.updateState({...state, listItems});
      });
  }

  updateState(newState: State) {
    this.state$.next(newState);
  }

}
