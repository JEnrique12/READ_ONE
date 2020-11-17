import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media2Page } from '../media2/media2';

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

	private _cards: any;
  private _detalles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this._detalles = Media2Page;

  	this._cards = [
  	{image: "img6.png", title: "90 Minutos en el Cielo", descripcion: "90 minutos en el Cielo es el éxito de librería que relata la experiencia de un hombre ante la muerte y la vida. Cuando el ministro bautista Don Piper conducía de regreso a casa luego de una conferencia, su auto chocó con un camión que se cruzó de carril. Lo declararon muerto en la escena..."},

  	{image: "img2.png", title: "El Baile de las Luciernagas", descripcion: "En el caluroso verano de 1974, Kate Mularkey ha decido aceptar su papel de cero a la izquierda en la vida social de su instituto. Hasta que, para su sorpresa, «la chica más guay del mundo» se muda al otro lado de su calle y quiere ser su amiga. Tully Hart parece tenerlo todo..."},

  	{image: "img4.png", title: "Los Niños de Irena", descripcion: "La historia de una mujer que tomó grandes riesgos para salvar a 2 500 niños de la muerte y la deportación en Polonia, durante la ocupación de los nazis en la Segunda Guerra Mundial. En 1942, a una joven trabajadora social, Irena Sendler, se le concedió acceso al gueto de Varsovia como especialista en salud pública..."},
  	];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

  loadDetails( currentInfo ) {
  //alert ( currentInfo.title );
  this.navCtrl.push( this._detalles, { details: currentInfo } );
  }

}
