import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFittingScreenComponent } from './club-fitting-screen.component';

describe('ClubFittingScreenComponent', () => {
  let component: ClubFittingScreenComponent;
  let fixture: ComponentFixture<ClubFittingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubFittingScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubFittingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
