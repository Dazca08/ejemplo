import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarprocesosComponent } from './insertarprocesos.component';

describe('InsertarprocesosComponent', () => {
  let component: InsertarprocesosComponent;
  let fixture: ComponentFixture<InsertarprocesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarprocesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
