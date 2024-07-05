import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieCollectionComponent } from './create-movie-collection.component';

describe('CreateMovieCollectionComponent', () => {
  let component: CreateMovieCollectionComponent;
  let fixture: ComponentFixture<CreateMovieCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMovieCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMovieCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
