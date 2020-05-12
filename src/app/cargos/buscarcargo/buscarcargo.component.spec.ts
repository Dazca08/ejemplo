import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarcargoComponent } from './buscarcargo.component';

describe('BuscarcargoComponent', () => {
  let component: BuscarcargoComponent;
  let fixture: ComponentFixture<BuscarcargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarcargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarcargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
