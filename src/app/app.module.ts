import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmComponent } from './agm/agm.component';
import { SyncosmComponent } from './syncosm/syncosm.component';
import { OSMService } from 'src/test/osm.service';
import { TestModule } from 'src/test/test.module';
import { MapsModule, MarkerService, } from '@syncfusion/ej2-angular-maps';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgmComponent,
    SyncosmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestModule,
    MapsModule,
    HttpClientModule,
    TextBoxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OSMService,
    MarkerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
