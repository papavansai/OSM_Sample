import { Component, OnInit } from '@angular/core';
import { Maps, Marker } from '@syncfusion/ej2-angular-maps';
import { world_map } from 'src/assets/world-map';
import { GeolocationService } from 'src/services/geolocation.service';

@Component({
  selector: 'app-syncosm',
  templateUrl: './syncosm.component.html',
  styleUrls: ['./syncosm.component.scss']
})
export class SyncosmComponent implements OnInit {

  public latitude: any;
  public longitude: any;
  public shapeData: object = world_map;
  public urlTemplate?: string;
  public zoomSettings?: object;
  public centerPosition?: object;
  public markerSettings?:object;
  public navigationLineSettings?:object;

  constructor(private geolocationService: GeolocationService){}

  ngOnInit(): void {
    this.getCurrentLocation();
    this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png'

    this.zoomSettings ={
      enable: true,
      toolbars:["Zoom","ZoomIn","ZoomOut","Pan","Reset"],
      zoomFactor: 10
    }

    this.centerPosition = {
      latitude: 17.4173783,
      longitude: 78.5663727
    }

    this.markerSettings=[{
      height: 40,
      width: 40,
      visible: true,
      enableDrag: true,
      dataSource: [{
        latitude:17.4173783, longitude:78.5663727 , name: 'MarkerOne'
      }]
    }]
  }

  getCurrentLocation(){
      this.geolocationService.getCurrentPosition().then((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log('Latitude: '+ this.latitude+' , longitude: '+this.longitude);

        // Update centerPosition with current location
      //   this.centerPosition = {
      //     latitude: this.latitude,
      //     longitude: this.longitude
      // };

      }) . catch((error)=> console.error('Error getting geolocation: ', error))
  }
}