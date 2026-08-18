import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headercomp } from './headercomp';

describe('Headercomp', () => {
  let component: Headercomp;
  let fixture: ComponentFixture<Headercomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headercomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Headercomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
