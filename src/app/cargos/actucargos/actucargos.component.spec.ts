import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActucargosComponent } from './actucargos.component';

describe('ActucargosComponent', () => {
  let component: ActucargosComponent;
  let fixture: ComponentFixture<ActucargosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActucargosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActucargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
