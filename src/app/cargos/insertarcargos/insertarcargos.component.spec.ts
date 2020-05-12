import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarcargosComponent } from './insertarcargos.component';

describe('InsertarcargosComponent', () => {
  let component: InsertarcargosComponent;
  let fixture: ComponentFixture<InsertarcargosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarcargosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarcargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
