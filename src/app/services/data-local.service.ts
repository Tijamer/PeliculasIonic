import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

  constructor( private storage: Storage,
               private toastCtrl: ToastController) { 
    this.cargarFavoritos();
  }


  async presentToast( message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 200,
    });
    toast.present();
  }

  guardarPelicula( pelicula : PeliculaDetalle ){

    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas){
      if( peli.id === pelicula.id){
        existe = true;
        break;
      }
    }

    if( existe)
    {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de Favoritos';
    }else{
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a Favoritos';
    }
    this.presentToast(mensaje);
    this.storage.create();
    this.storage.set('peliculas', this.peliculas);
    return !existe;
  }

  async cargarFavoritos(){
    this.storage.create();
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id: number ){
   await this.cargarFavoritos();
   const existe = this.peliculas.find( peli => peli.id === id);
   return (existe) ? true: false ;
    
  }

}
