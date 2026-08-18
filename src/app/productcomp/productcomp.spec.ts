import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productcomp } from './productcomp';

describe('Productcomp', () => {
  let component: Productcomp;
  let fixture: ComponentFixture<Productcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Productcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
