import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesScreenComponent } from './rates-screen.component';

describe('RatesScreenComponent', () => {
  let component: RatesScreenComponent;
  let fixture: ComponentFixture<RatesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
