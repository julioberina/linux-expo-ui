import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MyScheduleComponent } from './my-schedule/my-schedule.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { CampusMapComponent } from './campus-map/campus-map.component';
import { AppService } from './app.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    ScheduleComponent,
    MyScheduleComponent,
    ContactsComponent,
    ExhibitorsComponent,
    SpeakersComponent,
    SpecialEventsComponent,
    QrCodeComponent,
    CampusMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
