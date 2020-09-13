import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import Specie from '../../models/specie';

@Component({
  selector: 'app-table-specie',
  templateUrl: './table-specie.component.html',
  styleUrls: ['./table-specie.component.scss']
})
export class TableSpecieComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'description' ];
  dataSource = new MatTableDataSource<Specie[]>();
  @Input() list: Observable<Specie[]>;
  constructor() { }

  ngOnInit(): void {}

}
