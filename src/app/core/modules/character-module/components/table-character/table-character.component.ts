import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersList } from '../../models/character-list';

@Component({
  selector: 'app-table-character',
  templateUrl: './table-character.component.html',
  styleUrls: ['./table-character.component.scss']
})
export class TableCharacterComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'gender' ];
  dataSource = new MatTableDataSource<CharactersList[]>();
  constructor(private router: Router) { }
  @Input() list: Observable<CharactersList[]>;
  ngOnInit(): void {}

  redirect(id: number) {
    this.router.navigateByUrl('/character/' + id);
  }

}
