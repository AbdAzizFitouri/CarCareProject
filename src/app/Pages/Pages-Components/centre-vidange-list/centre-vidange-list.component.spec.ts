import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVidangeListComponent } from './centre-vidange-list.component';

describe('CentreVidangeListComponent', () => {
  let component: CentreVidangeListComponent;
  let fixture: ComponentFixture<CentreVidangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreVidangeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVidangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
