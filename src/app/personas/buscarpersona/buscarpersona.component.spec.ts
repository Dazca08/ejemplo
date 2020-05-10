import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarpersonaComponent } from './buscarpersona.component';

describe('BuscarpersonaComponent', () => {
  let component: BuscarpersonaComponent;
  let fixture: ComponentFixture<BuscarpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
