import { Component, OnInit } from '@angular/core';
import { Maps, Marker } from '@syncfusion/ej2-angular-maps';
import { world_map } from 'src/assets/world-map';
import { GeolocationService } from 'src/services/geolocation.service';
import { OSMService } from 'src/test/osm.service';
import { NgModel } from '@angular/forms';
Maps.Inject(Marker);

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
  public latlongfields?: any;
  public reverseSearchResult: any;
  public textData: any = '';
  //  public markerDragStart = (args: IMarkerDragEventArgs | any){
  //   onMarkerDragStart(args);
  // };
  // public markerDragEnd = (args: IMarkerDragEventArgs | any ){
  //   onMarkerDragEnd(args)
  // }; 

  constructor(private geolocationService: GeolocationService, private osmService: OSMService){}

  ngOnInit(): void {
    this.getCurrentLocation();
    this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';

    this.zoomSettings ={
      enable: true,
      enablePanning: true,
      toolbars:["Zoom","ZoomIn","ZoomOut","Pan","Reset"],
      pinchZooming: true,
      doubleClickZoom: true,
      minZoom: 2,
      maxZoom:18,
      zoomFactor: 18
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
  onMarkerDragStart(event: any){
    console.log(event);
  }
  onMarkerDragEnd(event: any){
    console.log(event);
    this.latlongfields = event;
    this.reverseSearchResult = this.osmService.getAddress(this.latlongfields.latitude, this.latlongfields.longitude);
    console.log(this.reverseSearchResult);
    this.textData = this.reverseSearchResult.display_name;
  }
}