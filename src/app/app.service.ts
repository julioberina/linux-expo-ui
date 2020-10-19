import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as scheduleJson from '../../data/schedule.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) 
  { }

  public getSchedule(): any {
    return scheduleJson;
  }
}
