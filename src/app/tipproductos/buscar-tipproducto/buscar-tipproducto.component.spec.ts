import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTipproductoComponent } from './buscar-tipproducto.component';

describe('BuscarTipproductoComponent', () => {
  let component: BuscarTipproductoComponent;
  let fixture: ComponentFixture<BuscarTipproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTipproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTipproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
