import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActupersonaComponent } from './actupersona.component';

describe('ActupersonaComponent', () => {
  let component: ActupersonaComponent;
  let fixture: ComponentFixture<ActupersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActupersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActupersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
