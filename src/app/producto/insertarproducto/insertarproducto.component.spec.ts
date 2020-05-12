import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarproductoComponent } from './insertarproducto.component';

describe('InsertarproductoComponent', () => {
  let component: InsertarproductoComponent;
  let fixture: ComponentFixture<InsertarproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
