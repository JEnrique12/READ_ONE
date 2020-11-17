import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home2Page } from '../home2/home2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	private _cards: any;
	private _cards1: any;
	private _detalles: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  	this._detalles = Home2Page;

  	this._cards = [
  		{title: "90 Minutos en el Cielo", 	     image: "img6.png",   descripcion: "90 minutos en el Cielo es el éxito de librería que relata la experiencia de un hombre ante la muerte y la vida. Cuando el ministro bautista Don Piper conducía de regreso a casa luego de una conferencia, su auto chocó con un camión que se cruzó de carril. Lo declararon muerto en la escena del accidente. Durante los siguientes 90 minutos Piper vivió las glorias del cielo, donde vinieron a saludarle quienes habían influido en su vida espiritual, y allí experimentó la verdadera paz."},
      
  		{title: "El Libro de la Alegria", 	     image: "img3.png",    descripcion: "El Libro De La Alegría, es una guía profunda y reflexiva para disfrutar de una vida sin estrés, tristeza y sufrimiento; existen muchas maneras activas de cultivar la alegría, tanto para nosotros como para todos aquellos a nuestro alrededor. La mayoría de ellas en realidad consiste en sortear los obstáculos que impiden la felicidad."},
  	];

  	this._cards1 = [
  		{title: "El Baile de las Luciernagas", 	 image: "img2.png",    descripcion: "En el caluroso verano de 1974, Kate Mularkey ha decido aceptar su papel de cero a la izquierda en la vida social de su instituto. Hasta que, para su sorpresa, «la chica más guay del mundo» se muda al otro lado de su calle y quiere ser su amiga. Tully Hart parece tenerlo todo: belleza, inteligencia y ambición. No pueden ser más distintas. Kate, destinada a pasar inadvertida, con una familia cariñosa pero que la avergüenza a cada momento, y Tully, envuelta en glamour y misterio aunque poseedora de un secreto que la está destrozando. Contra todo pronóstico, se hacen inseparables y sellan un pacto para ser mejores amigas para siempre."},

  		{title: "Los Niños de Irena", 			     image: "img4.png",    descripcion: "La historia de una mujer que tomó grandes riesgos para salvar a 2 500 niños de la muerte y la deportación en Polonia, durante la ocupación de los nazis en la Segunda Guerra Mundial. En 1942, a una joven trabajadora social, Irena Sendler, se le concedió acceso al gueto de Varsovia como especialista en salud pública."},
  	];
  }

  loadDetails( currentInfo ) {
	//alert( currentInfo.title );
	this.navCtrl.push( this._detalles, { details: currentInfo } );

}
}
