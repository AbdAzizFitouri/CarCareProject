import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPneumatiqueFormComponent } from './station-pneumatique-form.component';

describe('StationPneumatiqueFormComponent', () => {
  let component: StationPneumatiqueFormComponent;
  let fixture: ComponentFixture<StationPneumatiqueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationPneumatiqueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationPneumatiqueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
