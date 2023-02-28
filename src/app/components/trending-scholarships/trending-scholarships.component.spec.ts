import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingScholarshipsComponent } from './trending-scholarships.component';

describe('TrendingScholarshipsComponent', () => {
  let component: TrendingScholarshipsComponent;
  let fixture: ComponentFixture<TrendingScholarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingScholarshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingScholarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
