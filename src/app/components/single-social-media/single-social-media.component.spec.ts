import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSocialMediaComponent } from './single-social-media.component';

describe('SingleSocialMediaComponent', () => {
  let component: SingleSocialMediaComponent;
  let fixture: ComponentFixture<SingleSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
