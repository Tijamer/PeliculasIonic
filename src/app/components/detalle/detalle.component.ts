import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id: any;
  pelicula: PeliculaDetalle = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
    genre_ids: [],
  };
  actores: Cast[] = []; 
  oculto = 150;
  estrella = 'star-outline';

  slideOptActores = {
    slidPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController,
               private datalocal : DataLocalService) { }

  
  ngOnInit() {
    // console.log('ID', this.id);
    this.datalocal.existePelicula(this.id).then (existe => this.estrella = (existe) ? 'star': 'star-outline'); 
    // console.log('Detalle component existe', existe);
    
    this.moviesService.getPeliculaDetalle( this.id )
        .subscribe( resp => {
          console.log( resp );
          this.pelicula = resp
          
        });
    this.moviesService.getActoresPelicula( this.id )
        .subscribe( resp => {

          console.log( resp );   
          this.actores = resp.cast;
        });
  }


  regresar(){
    this.modalCtrl.dismiss();
  }

  favorito(){
    const existe = this.datalocal.guardarPelicula(this.pelicula);
    this.estrella = (existe) ? 'star': 'star-outline';
  }
}
