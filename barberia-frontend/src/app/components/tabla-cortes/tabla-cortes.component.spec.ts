import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCortesComponent } from './tabla-cortes.component';

describe('TablaCortesComponent', () => {
  let component: TablaCortesComponent;
  let fixture: ComponentFixture<TablaCortesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCortesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCortesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
