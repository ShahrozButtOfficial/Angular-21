import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecomp } from './homecomp';

describe('Homecomp', () => {
  let component: Homecomp;
  let fixture: ComponentFixture<Homecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Homecomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
