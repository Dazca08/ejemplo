import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformePersonaComponent } from './informe-persona.component';

describe('InformePersonaComponent', () => {
  let component: InformePersonaComponent;
  let fixture: ComponentFixture<InformePersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformePersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformePersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
