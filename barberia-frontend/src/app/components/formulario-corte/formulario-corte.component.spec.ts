import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCorteComponent } from './formulario-corte.component';

describe('FormularioCorteComponent', () => {
  let component: FormularioCorteComponent;
  let fixture: ComponentFixture<FormularioCorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
