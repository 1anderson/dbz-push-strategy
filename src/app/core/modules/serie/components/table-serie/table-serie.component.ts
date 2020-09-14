import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import Serie from '../../models/serie';

@Component({
  selector: 'app-table-serie',
  templateUrl: './table-serie.component.html',
  styleUrls: ['./table-serie.component.scss']
})
export class TableSerieComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'description' ];
  dataSource = new MatTableDataSource<Serie[]>();
  @Input() list: Observable<Serie[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
