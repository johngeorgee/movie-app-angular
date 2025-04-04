import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLayoutComponent } from './movies-layout.component';

describe('MoviesLayoutComponent', () => {
  let component: MoviesLayoutComponent;
  let fixture: ComponentFixture<MoviesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
