import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharaceterFacadeService } from '../../facade/characeter-facade.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(private characeterFacadeService: CharaceterFacadeService, private activeRoute: ActivatedRoute) { }
  character$ = this.characeterFacadeService.character$;
  ngOnInit() {
    const { id } = this.activeRoute.snapshot.params;
    this.characeterFacadeService.getCharater(id);
  }

}
