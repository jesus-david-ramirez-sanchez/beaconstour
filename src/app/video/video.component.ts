import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  constructor() { }

  public boton() {
    location.href = 'http://192.168.0.25:4200/view';
  }

  public timer() {
    setTimeout(this.boton , 10000);
  }
}
