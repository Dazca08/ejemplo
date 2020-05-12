import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarpersonaComponent } from './insertarpersona.component';

describe('InsertarpersonaComponent', () => {
  let component: InsertarpersonaComponent;
  let fixture: ComponentFixture<InsertarpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
