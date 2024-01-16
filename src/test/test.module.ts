import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSMService } from './osm.service';
import { AnnotationsService, 
        BubbleService, 
        DataLabelService, 
        LegendService, 
        MapsModule, 
        MapsTooltipService, 
        MarkerService, 
        NavigationLineService, 
        SelectionService, 
        ZoomService } from '@syncfusion/ej2-angular-maps';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MapsModule
  ],
  providers:[
    OSMService,
    LegendService,
    MarkerService, 
    MapsTooltipService, 
    DataLabelService, 
    BubbleService, 
    NavigationLineService,
    SelectionService,
    AnnotationsService,
    ZoomService
  ]
})
export class TestModule { }
