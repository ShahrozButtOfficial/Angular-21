import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactcomp } from './contactcomp';

describe('Contactcomp', () => {
  let component: Contactcomp;
  let fixture: ComponentFixture<Contactcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Contactcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
