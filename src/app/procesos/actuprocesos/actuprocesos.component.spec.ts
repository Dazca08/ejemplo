import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuprocesosComponent } from './actuprocesos.component';

describe('ActuprocesosComponent', () => {
  let component: ActuprocesosComponent;
  let fixture: ComponentFixture<ActuprocesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuprocesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
