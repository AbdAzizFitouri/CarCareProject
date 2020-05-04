import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVisiteUpdateComponent } from './centre-visite-update.component';

describe('CentreVisiteUpdateComponent', () => {
  let component: CentreVisiteUpdateComponent;
  let fixture: ComponentFixture<CentreVisiteUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreVisiteUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVisiteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
