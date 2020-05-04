import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreAssuranceUpdateComponent } from './centre-assurance-update.component';

describe('CentreAssuranceUpdateComponent', () => {
  let component: CentreAssuranceUpdateComponent;
  let fixture: ComponentFixture<CentreAssuranceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreAssuranceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreAssuranceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
