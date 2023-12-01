import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnotationsService, BubbleService, DataLabelService, GeoLocation, LegendService, MapsModule, MapsTooltipService, MarkerService, NavigationLineService, SelectionService, ZoomService } from '@syncfusion/ej2-angular-maps';
import { AgmComponent } from './agm/agm.component';
import { SyncosmComponent } from './syncosm/syncosm.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmComponent,
    SyncosmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule,
  ],
  providers: [
    LegendService,
    MarkerService, 
    MapsTooltipService, 
    DataLabelService, 
    BubbleService, 
    NavigationLineService,
    SelectionService,
    AnnotationsService,
    ZoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
