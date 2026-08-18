import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcomp } from './aboutcomp';

describe('Aboutcomp', () => {
  let component: Aboutcomp;
  let fixture: ComponentFixture<Aboutcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Aboutcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
