import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-character',
  templateUrl: './table-character.component.html',
  styleUrls: ['./table-character.component.scss']
})
export class TableCharacterComponent implements OnInit {

  constructor() { }
  @Input() caracterList: Observable<any>;
  ngOnInit(): void {}

}
