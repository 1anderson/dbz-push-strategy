import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-table-character',
  templateUrl: './table-character.component.html',
  styleUrls: ['./table-character.component.scss']
})
export class TableCharacterComponent implements OnInit {
  displayedColumns: string[] = [ 'image', 'name', 'gender' ];
  dataSource = new MatTableDataSource<Character[]>();
  constructor() { }
  @Input() list: Observable<Character[]>;
  ngOnInit(): void {}

}
