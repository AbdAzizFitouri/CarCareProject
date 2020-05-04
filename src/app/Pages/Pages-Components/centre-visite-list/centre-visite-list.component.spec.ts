import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreVisiteListComponent } from './centre-visite-list.component';

describe('CentreVisiteListComponent', () => {
  let component: CentreVisiteListComponent;
  let fixture: ComponentFixture<CentreVisiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentreVisiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreVisiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
