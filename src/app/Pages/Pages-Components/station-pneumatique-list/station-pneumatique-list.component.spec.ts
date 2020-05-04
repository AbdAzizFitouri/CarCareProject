import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPneumatiqueListComponent } from './station-pneumatique-list.component';

describe('StationPneumatiqueListComponent', () => {
  let component: StationPneumatiqueListComponent;
  let fixture: ComponentFixture<StationPneumatiqueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationPneumatiqueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationPneumatiqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
