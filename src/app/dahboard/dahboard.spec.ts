import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dahboard } from './dahboard';

describe('Dahboard', () => {
  let component: Dahboard;
  let fixture: ComponentFixture<Dahboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dahboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Dahboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
