import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVidangeUpdateComponent } from './centre-vidange-update.component';

describe('CentreVidangeUpdateComponent', () => {
  let component: CentreVidangeUpdateComponent;
  let fixture: ComponentFixture<CentreVidangeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreVidangeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVidangeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
