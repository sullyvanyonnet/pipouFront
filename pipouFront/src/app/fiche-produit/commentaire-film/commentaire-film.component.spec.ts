import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireFilmComponent } from './commentaire-film.component';

describe('CommentaireFilmComponent', () => {
  let component: CommentaireFilmComponent;
  let fixture: ComponentFixture<CommentaireFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentaireFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
