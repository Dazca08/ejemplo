import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarproduccionesComponent } from './buscarproducciones.component';

describe('BuscarproduccionesComponent', () => {
  let component: BuscarproduccionesComponent;
  let fixture: ComponentFixture<BuscarproduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarproduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
