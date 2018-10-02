import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() { }

  bricks = [
    // tslint:disable-next-line:max-line-length
    {title: 'https://images.unsplash.com/photo-1534351596808-30077abd8517?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=022dd5492835db434ab9195bb28bb641&auto=format&fit=crop&w=500&q=60'},
    // tslint:disable-next-line:max-line-length
    {title: 'https://images.unsplash.com/photo-1535516241077-d93c0e6e8b3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12c3d07d468fef468910c643da8477f5&auto=format&fit=crop&w=500&q=60'},
    // tslint:disable-next-line:max-line-length
    {title: 'https://images.unsplash.com/photo-1534292517023-6d3cd5607e5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b0b3a61ccc445a3b302ae8480c79d1a8&auto=format&fit=crop&w=500&q=60'},
    {title: 'Brick 4'},
    {title: 'Brick 5'},
    {title: 'Brick 6'}
  ];

  ngOnInit() {}


}
