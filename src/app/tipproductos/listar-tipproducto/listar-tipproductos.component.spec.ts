import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipproductosComponent } from './listar-tipproductos.component';

describe('ListarTipproductosComponent', () => {
  let component: ListarTipproductosComponent;
  let fixture: ComponentFixture<ListarTipproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
