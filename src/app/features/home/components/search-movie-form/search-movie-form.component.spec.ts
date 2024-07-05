import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieFormComponent } from './search-movie-form.component';

describe('SearchMovieFormComponent', () => {
  let component: SearchMovieFormComponent;
  let fixture: ComponentFixture<SearchMovieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMovieFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
