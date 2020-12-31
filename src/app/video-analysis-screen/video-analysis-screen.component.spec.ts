import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAnalysisScreenComponent } from './video-analysis-screen.component';

describe('VideoAnalysisScreenComponent', () => {
  let component: VideoAnalysisScreenComponent;
  let fixture: ComponentFixture<VideoAnalysisScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAnalysisScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAnalysisScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
