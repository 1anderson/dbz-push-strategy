import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-table-character',
  templateUrl: './table-character.component.html',
  styleUrls: ['./table-character.component.scss']
})
export class TableCharacterComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender' ];
  dataSource = new MatTableDataSource<Character[]>();
  constructor(private router: Router) { }
  @Input() list: Observable<Character[]>;
  ngOnInit(): void {}

  redirect(id: number) {
    this.router.navigateByUrl('/character/' + id);
  }

}
