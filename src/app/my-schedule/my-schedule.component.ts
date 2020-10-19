import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../app.service';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.scss']
})
export class MyScheduleComponent implements OnInit {

  public mySchedule = [];
  public myScheduleItems = {};
  public displayedSchedule = [];

  constructor(private appService: AppService,
              private snackBar: MatSnackBar) 
  { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('mySchedule'))) {
      this.mySchedule = JSON.parse(localStorage.getItem('mySchedule'));
    } else {
      this.mySchedule = [];
    }

    this.displayedSchedule = this.mySchedule;

    if (JSON.parse(localStorage.getItem('myScheduleItems'))) {
      this.myScheduleItems = JSON.parse(localStorage.getItem('myScheduleItems'));
    } else {
      this.myScheduleItems = {};
    }
  }

  public onButtonToggle(day: string) {
    this.displayedSchedule = this.mySchedule.filter(item => item['Day'] === day);
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
}
