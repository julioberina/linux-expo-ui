import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusMapComponent } from './campus-map.component';

describe('CampusMapComponent', () => {
  let component: CampusMapComponent;
  let fixture: ComponentFixture<CampusMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
