import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeProductoComponent } from './informe-producto.component';

describe('InformeProductoComponent', () => {
  let component: InformeProductoComponent;
  let fixture: ComponentFixture<InformeProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
