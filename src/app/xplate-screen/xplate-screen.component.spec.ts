import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XplateScreenComponent } from './xplate-screen.component';

describe('XplateScreenComponent', () => {
  let component: XplateScreenComponent;
  let fixture: ComponentFixture<XplateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XplateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XplateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
