import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpersonasComponent } from './listarpersonas.component';

describe('ListarpersonasComponent', () => {
  let component: ListarpersonasComponent;
  let fixture: ComponentFixture<ListarpersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarpersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
