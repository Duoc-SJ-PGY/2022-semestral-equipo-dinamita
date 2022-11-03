import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit{

  //constructor(private geolocation: Geolocation) {}


/*
this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});
*/
  constructor(public navCtrl: NavController, public geolocation: Geolocation){ }

ngOnInit(){
  this.geolocationNative();
}

geolocationNative(): void{
  this.geolocation.getCurrentPosition().then((geoposition: Geoposition) =>{console.log(geoposition); });
}
/*
  ngOnInit() {
    this.geolocationNative();
  }
  */
}
