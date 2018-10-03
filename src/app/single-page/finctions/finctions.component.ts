import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finctions',
  templateUrl: './finctions.component.html',
  styleUrls: ['./finctions.component.scss']
})
export class FinctionsComponent implements OnInit {


  masonryItems = [
    {
      'class' : 'card1',
      'title' : ' E-Parking',
      'content' : 'Encontrar tu carro en el parqueadero del Centro Comercial ya no será un dolor de cabeza.'
    },
    {
      'class' : 'card2',
      'title' : 'Promociones',
      'content' : 'Si te encanta estar enterado de las promociones de tus marcas favoritas, esta es la App indicada para ti.'
    },
    {
      'class' : 'card3',
      'title' : 'Fácil manejo',
      'content' : 'Esta App es tan fácil manejarla que hasta un niño lo puede hacer.'
    },
    {
      'class' : 'card4',
      'title' : '¡Gratis!',
      'content' : 'Esta aplicación puedes descargarla gratis para Android, iPhone y Windows Phone.'
    },
    {
      'class' : 'card5',
      'title' : 'Cines',
      'content' : 'Si quieres saber el horario y el lugar de la película que quieres verte, descarga MallTopic.'
    },
    {
      'class' : 'card6',
      'title' : 'Información',
      'content' : 'Con esta App podrás estar actualizado de toda la información de tu Centro Comercial favorito.'
    },
    {
      'class' : 'card7',
      'title' : 'Moda',
      'content' : 'Encuentra las colecciones de tus marcas favoritas.'
    },
    {
      'class' : 'card8',
      'title' : 'Conéctate',
      'content' : 'Comparte con tus amigos los que más te llama la atención de MallTopic App.'
    }

  ];


  ngOnInit() {
  }

}
