import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

	private _cards: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  		this._cards = [
  			{image: "img2.png", title: "El Baile de las Luciernagas", 	tiempo: "Hace 2 Dias"},
  			{image: "img3.png", title: "El Libro de la Alegria", 		tiempo: "Hace 4 Dias"},
  			{image: "img4.png", title: "Los Niños de Irena", 			tiempo: "Hace 5 Dias"}
  		]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
