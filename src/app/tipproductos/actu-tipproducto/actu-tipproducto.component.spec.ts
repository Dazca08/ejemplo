import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuTipproductoComponent } from './actu-tipproducto.component';

describe('ActuTipproductoComponent', () => {
  let component: ActuTipproductoComponent;
  let fixture: ComponentFixture<ActuTipproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuTipproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuTipproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
