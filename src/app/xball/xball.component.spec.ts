import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XballComponent } from './xball.component';

describe('XballComponent', () => {
  let component: XballComponent;
  let fixture: ComponentFixture<XballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XballComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
