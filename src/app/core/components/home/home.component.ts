import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { ResourceList } from '@shared/enums/resource-list-enum';
import { HomeFacadeService } from './facade/home-facade-service';
import State from './models/state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   private readonly listResoucesEnum = [ ResourceList.characters, ResourceList.planets, ResourceList.series, ResourceList.species ];
  constructor(private homeFacade: HomeFacadeService) { }
  atualDataList$: Observable<State>;

  ngOnInit() {
    this.atualDataList$ = this.homeFacade.atualDataList$;
    this.homeFacade.updateList(ResourceList.characters);
  }

  updateList(value: MatTabChangeEvent) {
    console.log(value, this.listResoucesEnum[value.index]);
    this.homeFacade.updateList(this.listResoucesEnum[value.index]);
  }

}
