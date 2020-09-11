import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrudService } from '../../services/crud-service/crud.service';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  atualDataList$: Observable<any>;
  changeListAction: BehaviorSubject<string>;

  constructor(private crudServcie: CrudService) {
    combineLatest([this.atualDataList$, this.changeListAction])
      .pipe(switchMap( ([dataAtualList, action]: [ any, string ]) => {
        return this.crudServcie.get<any>(action);
      } ));
  }

}
