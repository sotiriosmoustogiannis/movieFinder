import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCollectionDetailsComponent } from './movie-collection-details.component';

describe('MovieCollectionDetailsComponent', () => {
  let component: MovieCollectionDetailsComponent;
  let fixture: ComponentFixture<MovieCollectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCollectionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
