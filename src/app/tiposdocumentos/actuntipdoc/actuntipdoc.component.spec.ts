import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuntipdocComponent } from './actuntipdoc.component';

describe('ActuntipdocComponent', () => {
  let component: ActuntipdocComponent;
  let fixture: ComponentFixture<ActuntipdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActuntipdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActuntipdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
