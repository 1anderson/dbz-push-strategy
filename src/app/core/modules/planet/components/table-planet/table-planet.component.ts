import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import Planet from '../../models/planet';

@Component({
  selector: 'app-table-planet',
  templateUrl: './table-planet.component.html',
  styleUrls: ['./table-planet.component.scss']
})
export class TablePlanetComponent implements OnInit {

  displayedColumns: string[] = [ 'image', 'name' ];
  dataSource = new MatTableDataSource<Planet[]>();
  @Input() list: Observable<Planet[]>;
  constructor() { }

  ngOnInit(): void {}

}
