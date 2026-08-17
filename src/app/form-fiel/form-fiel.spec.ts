import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiel } from './form-fiel';

describe('FormFiel', () => {
  let component: FormFiel;
  let fixture: ComponentFixture<FormFiel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFiel],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFiel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
