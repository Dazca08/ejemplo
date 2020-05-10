import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaruntipdocComponent } from './buscaruntipdoc.component';

describe('BuscaruntipdocComponent', () => {
  let component: BuscaruntipdocComponent;
  let fixture: ComponentFixture<BuscaruntipdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaruntipdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaruntipdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
