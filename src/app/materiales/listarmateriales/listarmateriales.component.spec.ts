import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmaterialesComponent } from './listarmateriales.component';

describe('ListarmaterialesComponent', () => {
  let component: ListarmaterialesComponent;
  let fixture: ComponentFixture<ListarmaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarmaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
