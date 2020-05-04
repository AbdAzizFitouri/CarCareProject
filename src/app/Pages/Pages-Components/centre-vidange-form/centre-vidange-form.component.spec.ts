import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVidangeFormComponent } from './centre-vidange-form.component';

describe('CentreVidangeFormComponent', () => {
  let component: CentreVidangeFormComponent;
  let fixture: ComponentFixture<CentreVidangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreVidangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVidangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
