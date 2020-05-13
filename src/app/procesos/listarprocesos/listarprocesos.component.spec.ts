import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprocesosComponent } from './listarprocesos.component';

describe('ListarprocesosComponent', () => {
  let component: ListarprocesosComponent;
  let fixture: ComponentFixture<ListarprocesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarprocesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
