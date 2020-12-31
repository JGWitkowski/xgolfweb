import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftcardsScreenComponent } from './giftcards-screen.component';

describe('GiftcardsScreenComponent', () => {
  let component: GiftcardsScreenComponent;
  let fixture: ComponentFixture<GiftcardsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftcardsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftcardsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
