import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuproductoComponent } from './actuproducto.component';

describe('ActuproductoComponent', () => {
  let component: ActuproductoComponent;
  let fixture: ComponentFixture<ActuproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
