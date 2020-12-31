import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubRepairComponent } from './club-repair.component';

describe('ClubRepairComponent', () => {
  let component: ClubRepairComponent;
  let fixture: ComponentFixture<ClubRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
