import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() { }

  masonryItems = [
    {
      'name' : ' jose ignacio',
      'mensaje' : 'De loleo en medellin por la palcita de florez vengan a vicitarnos',
      // tslint:disable-next-line:max-line-length
      'img' : 'https://images.unsplash.com/photo-1534351596808-30077abd8517?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022dd5492835db434ab9195bb28bb641&auto=format&fit=crop&w=500&q=60',
      'gps' : 'envigado'
    },
    {
      'name' : ' jesus David',
      'mensaje' : 'De loleo en medellin por la palcita de florez vengan a vicitarnos',
      // tslint:disable-next-line:max-line-length
      'img' : 'https://images.unsplash.com/photo-1535516241077-d93c0e6e8b3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12c3d07d468fef468910c643da8477f5&auto=format&fit=crop&w=500&q=60',
      'gps' : 'medellin'
    },
    {
      'name' : ' manuela',
      'mensaje' : 'De loleo en medellin por la palcita de florez vengan a vicitarnos',
      // tslint:disable-next-line:max-line-length
      'img' : 'https://images.unsplash.com/photo-1534292517023-6d3cd5607e5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0b3a61ccc445a3b302ae8480c79d1a8&auto=format&fit=crop&w=500&q=60',
      'gps' : 'sabaneta'
    },
    {
      'name' : ' juliana',
      'mensaje' : 'De loleo en medellin por la palcita de florez vengan a vicitarnos',
      // tslint:disable-next-line:max-line-length
      'img' : 'https://images.unsplash.com/photo-1519687774292-8ef26b975fc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1945603472b5f78f885ef162a9bdddb&auto=format&fit=crop&w=500&q=60',
      'gps' : 'copacabana'
    },
    {
      'name' : ' don clayton',
      'mensaje' : 'De loleo en medellin por la palcita de florez vengan a vicitarnos',
      // tslint:disable-next-line:max-line-length
      'img' : 'https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0ef47dbfd623936425d08a198107b3e&auto=format&fit=crop&w=500&q=60',
      'gps' : 'centro de medellin'
    },
    {
      'name' : ' maria',
      'mensaje' : 'De loleo en medellin por la palcita de florez vengan a vicitarnos',
      // tslint:disable-next-line:max-line-length
      'img' : 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca1910047dae3b41bdaa4129d004343a&auto=format&fit=crop&w=500&q=60',
      'gps' : 'itagui'
    },

  ];

  ngOnInit() {}


}
