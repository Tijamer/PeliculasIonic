import { Component, Input, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Input() peliculadetalle : PeliculaDetalle[] = [];

  slideOpts = {
    slidePerView: 2,
    freeMode: true,
    spaceBetween: -10
  };
  

  constructor(private modalCtrl: ModalController) { }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  async verDetalle( id: number ){

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }
}
