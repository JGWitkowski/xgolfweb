import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsScreenComponent } from './lessons-screen.component';

describe('LessonsScreenComponent', () => {
  let component: LessonsScreenComponent;
  let fixture: ComponentFixture<LessonsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
