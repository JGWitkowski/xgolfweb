import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionsScreenComponent } from './directions-screen.component';

describe('DirectionsScreenComponent', () => {
  let component: DirectionsScreenComponent;
  let fixture: ComponentFixture<DirectionsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
