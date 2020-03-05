import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCommentaireFilmComponent } from './nouveau-commentaire-film.component';

describe('NouveauCommentaireFilmComponent', () => {
  let component: NouveauCommentaireFilmComponent;
  let fixture: ComponentFixture<NouveauCommentaireFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauCommentaireFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCommentaireFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
