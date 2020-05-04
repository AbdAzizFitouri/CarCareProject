import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueFormUpdateComponent } from './marque-form-update.component';

describe('MarqueFormUpdateComponent', () => {
  let component: MarqueFormUpdateComponent;
  let fixture: ComponentFixture<MarqueFormUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueFormUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
