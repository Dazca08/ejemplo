import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarprocesosComponent } from './buscarprocesos.component';

describe('BuscarprocesosComponent', () => {
  let component: BuscarprocesosComponent;
  let fixture: ComponentFixture<BuscarprocesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarprocesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
