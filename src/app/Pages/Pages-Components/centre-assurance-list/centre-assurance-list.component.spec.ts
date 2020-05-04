import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreAssuranceListComponent } from './centre-assurance-list.component';

describe('CentreAssuranceListComponent', () => {
  let component: CentreAssuranceListComponent;
  let fixture: ComponentFixture<CentreAssuranceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreAssuranceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreAssuranceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
