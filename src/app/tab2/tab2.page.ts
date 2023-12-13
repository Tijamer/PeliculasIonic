import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private moviesServices : MoviesService, private modalctrl: ModalController) {}

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spider-Man','Avenger','El Señor de los anillos','La vida es bella']

  buscar( event: any ){
    const valor = event.detail.value; 
    // console.log(valor);    
    this.buscando = true;
    this.moviesServices.buscarPeliculas(valor)
    .subscribe( (resp : any) => {
      console.log(resp); 
      this.peliculas = resp['results'];
      this.buscando = false;
    });
  }

  async detalle( id: number){
    const modal = await this.modalctrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();

  }

}
