import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarmaterialesComponent } from './buscarmateriales.component';

describe('BuscarmaterialesComponent', () => {
  let component: BuscarmaterialesComponent;
  let fixture: ComponentFixture<BuscarmaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarmaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarmaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
