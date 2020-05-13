import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarproduccionesComponent } from './insertarproducciones.component';

describe('InsertarproduccionesComponent', () => {
  let component: InsertarproduccionesComponent;
  let fixture: ComponentFixture<InsertarproduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarproduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
