import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTextComponent } from './small-text.component';

describe('SmallTextComponent', () => {
  let component: SmallTextComponent;
  let fixture: ComponentFixture<SmallTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
