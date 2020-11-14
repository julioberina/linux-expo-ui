import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as scheduleJson from '../../data/schedule.json';
import * as exhibitorsJson from '../../data/exhibitors.json';
import * as speakersJson from '../../data/speakers.json';
import * as eventsJson from '../../data/events.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) 
  { }

  public getSchedule(): any {
    return scheduleJson;
  }

  public getExhibitors(): any {
    return exhibitorsJson;
  }

  public getSpeakers(): any {
    return speakersJson;
  }

  public getEvents(): any {
    return eventsJson;
  }
}
