import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActumaterialesComponent } from './actumateriales.component';

describe('ActumaterialesComponent', () => {
  let component: ActumaterialesComponent;
  let fixture: ComponentFixture<ActumaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActumaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActumaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
