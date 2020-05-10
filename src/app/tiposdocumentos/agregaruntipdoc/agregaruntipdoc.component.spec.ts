import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaruntipdocComponent } from './agregaruntipdoc.component';

describe('AgregaruntipdocComponent', () => {
  let component: AgregaruntipdocComponent;
  let fixture: ComponentFixture<AgregaruntipdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaruntipdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaruntipdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
