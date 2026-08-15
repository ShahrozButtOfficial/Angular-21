import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Couter } from './couter';

describe('Couter', () => {
  let component: Couter;
  let fixture: ComponentFixture<Couter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Couter],
    }).compileComponents();

    fixture = TestBed.createComponent(Couter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
