import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../app.service';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.scss']
})
export class MyScheduleComponent implements OnInit {

  public mySchedule = [];
  public myScheduleItems = {};
  public displayedSchedule = [];
  public faClock = faClock;

  private isClicked = {};

  constructor(private appService: AppService,
              @Inject(DOCUMENT) private document: Document,
              private snackBar: MatSnackBar) 
  { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('mySchedule'))) {
      this.mySchedule = JSON.parse(localStorage.getItem('mySchedule'));
    } else {
      this.mySchedule = [];
    }

    if (this.mySchedule) {
      this.mySchedule.filter(item => item['Day'] === 'Thursday').sort((a, b) => {
        return (Number(a['Time'].split(' - ')[0].replace(':', '')) - 
        Number(b['Time'].split(' - ')[0].replace(':', '')))
      }).forEach(item => this.displayedSchedule.push(item));

      this.mySchedule.filter(item => item['Day'] === 'Friday').sort((a, b) => {
        return (Number(a['Time'].split(' - ')[0].replace(':', '')) - 
        Number(b['Time'].split(' - ')[0].replace(':', '')))
      }).forEach(item => this.displayedSchedule.push(item));

      this.mySchedule.filter(item => item['Day'] === 'Saturday').sort((a, b) => {
        return (Number(a['Time'].split(' - ')[0].replace(':', '')) - 
        Number(b['Time'].split(' - ')[0].replace(':', '')))
      }).forEach(item => this.displayedSchedule.push(item));

      this.mySchedule.filter(item => item['Day'] === 'Sunday').sort((a, b) => {
        return (Number(a['Time'].split(' - ')[0].replace(':', '')) - 
        Number(b['Time'].split(' - ')[0].replace(':', '')))
      }).forEach(item => this.displayedSchedule.push(item));
    }

    if (JSON.parse(localStorage.getItem('myScheduleItems'))) {
      this.myScheduleItems = JSON.parse(localStorage.getItem('myScheduleItems'));
    } else {
      this.myScheduleItems = {};
    }
  }

  public onButtonToggle(day: string) {
    this.displayedSchedule = [];
    this.mySchedule.filter(item => item['Day'] === day).sort((a, b) => {
      return (Number(a['Time'].split(' - ')[0].replace(':', '')) - 
      Number(b['Time'].split(' - ')[0].replace(':', '')))
    }).forEach(item => { this.displayedSchedule.push(item) });
  }

  public inMySchedule(path: string) {
    return this.myScheduleItems[path];
  }

  public addMyScheduleItem(item: any) {
    this.myScheduleItems[item.Path] = true;
    this.mySchedule.push(item);
    localStorage.setItem('myScheduleItems', JSON.stringify(this.myScheduleItems));
    localStorage.setItem('mySchedule', JSON.stringify(this.mySchedule));
    this.snackBar.open('Added event to My Schedule', 'Dismiss', { duration: 2000 });
  }

  public removeMyScheduleItem(item: any) {
    this.myScheduleItems[item.Path] = false;
    this.mySchedule = this.mySchedule.filter(i => i.Path !== item.Path);
    localStorage.setItem('myScheduleItems', JSON.stringify(this.myScheduleItems));
    localStorage.setItem('mySchedule', JSON.stringify(this.mySchedule));
    this.snackBar.open('Removed event from My Schedule', 'Dismiss', { duration: 2000 });
  }

  public goToExpoPage(path: string) {
    this.isClicked[path] = true;
    this.document.location.href = 'https://socallinuxexpo.org' + path;
  }
}
