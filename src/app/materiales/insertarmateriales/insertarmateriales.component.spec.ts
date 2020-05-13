import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarmaterialesComponent } from './insertarmateriales.component';

describe('InsertarmaterialesComponent', () => {
  let component: InsertarmaterialesComponent;
  let fixture: ComponentFixture<InsertarmaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarmaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarmaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
