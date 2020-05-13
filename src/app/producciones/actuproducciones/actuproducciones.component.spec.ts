import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuproduccionesComponent } from './actuproducciones.component';

describe('ActuproduccionesComponent', () => {
  let component: ActuproduccionesComponent;
  let fixture: ComponentFixture<ActuproduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuproduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuproduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
