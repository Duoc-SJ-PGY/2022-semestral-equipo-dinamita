import { Component, OnInit } from '@angular/core';
import { Camera } from '@awesome-cordova-plugins/camera';
@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('deviceready', () => {
    Camera.getPicture()
      .then((data) => console.log('Took a picture!', data))
      .catch((e) => console.log('Error occurred while taking a picture', e));
  });
  }



}
