import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as scheduleJson from '../../data/schedule.json';
import * as exhibitorsJson from '../../data/exhibitors.json';

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
}
