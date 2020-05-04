import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationPneumatiqueUpdateComponent } from './station-pneumatique-update.component';

describe('StationPneumatiqueUpdateComponent', () => {
  let component: StationPneumatiqueUpdateComponent;
  let fixture: ComponentFixture<StationPneumatiqueUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationPneumatiqueUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationPneumatiqueUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
