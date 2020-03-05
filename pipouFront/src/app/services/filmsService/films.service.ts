import { Injectable } from '@angular/core';
import { Film } from 'src/app/models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  films: Array<Film>
  filmsTri: Array<Film>
  constructor() { }

  public setFilms (films : Array<Film>){
    this.films = films;
  }

  public setFilmsTri (films : Array<Film>){
    this.filmsTri = films;
  }

  public getFilms(){
    if(this.filmsTri){
      return this.filmsTri
    } else {
      return this.films;
    }
  }

  public tri(recherche : string){
    console.log(recherche);
    
    let filmsLike = new Array<Film>();

    this.films.forEach(film => {

      if(film.nom.toUpperCase().includes(recherche.toUpperCase())){
        filmsLike.push(film);
      }
    });

    this.setFilmsTri(filmsLike);
  }

  public resetTri(){
    
    this.filmsTri = new Array<Film>();
  }
}
