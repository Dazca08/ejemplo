import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproduccionesComponent } from './listarproducciones.component';

describe('ListarproduccionesComponent', () => {
  let component: ListarproduccionesComponent;
  let fixture: ComponentFixture<ListarproduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarproduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
