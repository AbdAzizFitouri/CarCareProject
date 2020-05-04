import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueFromComponent } from './marque-from.component';

describe('MarqueFromComponent', () => {
  let component: MarqueFromComponent;
  let fixture: ComponentFixture<MarqueFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
