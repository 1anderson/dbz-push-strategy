import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSpecieComponent } from './table-specie.component';

describe('TableSpecieComponent', () => {
  let component: TableSpecieComponent;
  let fixture: ComponentFixture<TableSpecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSpecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
