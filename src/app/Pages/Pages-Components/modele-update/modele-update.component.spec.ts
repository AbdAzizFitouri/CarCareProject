import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleUpdateComponent } from './modele-update.component';

describe('ModeleUpdateComponent', () => {
  let component: ModeleUpdateComponent;
  let fixture: ComponentFixture<ModeleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
