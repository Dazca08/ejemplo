import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTipproductoComponent } from './insertar-tipproducto.component';

describe('InsertarTipproductoComponent', () => {
  let component: InsertarTipproductoComponent;
  let fixture: ComponentFixture<InsertarTipproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarTipproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarTipproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
