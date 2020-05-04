import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreAssuranceFormComponent } from './centre-assurance-form.component';

describe('CentreAssuranceFormComponent', () => {
  let component: CentreAssuranceFormComponent;
  let fixture: ComponentFixture<CentreAssuranceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreAssuranceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreAssuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
