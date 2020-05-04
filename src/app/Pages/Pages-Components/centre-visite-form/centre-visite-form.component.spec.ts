import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVisiteFormComponent } from './centre-visite-form.component';

describe('CentreVisiteFormComponent', () => {
  let component: CentreVisiteFormComponent;
  let fixture: ComponentFixture<CentreVisiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreVisiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVisiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
