import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from '../app.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public schedule;
  public displayedSchedule;

  private mySchedule = [];
  private myScheduleItems = {};

  constructor(private appService: AppService,
              private snackBar: MatSnackBar) 
  { }

  ngOnInit(): void {
    this.schedule = this.appService.getSchedule().default.nodes.node;
    this.normalizeData();
    this.displayedSchedule = this.schedule;
    
    if (JSON.parse(localStorage.getItem('mySchedule'))) {
      this.mySchedule = JSON.parse(localStorage.getItem('mySchedule'));
    } else {
      this.mySchedule = [];
    }

    if (JSON.parse(localStorage.getItem('myScheduleItems'))) {
      this.myScheduleItems = JSON.parse(localStorage.getItem('myScheduleItems'));
    } else {
      this.myScheduleItems = {};
    }
  }

  public onButtonToggle(day: string) {
    this.displayedSchedule = this.schedule.filter(item => item['Day'] === day);
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

  private normalizeData() {
    this.schedule.forEach(item => {
      const time = item['Time'].match(/\d{0,2}\:\d{0,2}\<\/span\>/g);
      const day = item['Day'].match(/(Thursday|Friday|Saturday|Sunday)\<\/span\>/g)[0].replace(/\<\/span\>/g, '');

      time[0] = time[0].replace(/\<\/span\>/g, '');
      time[1] = time[1].replace(/\<\/span\>/g, '');
      
      item['Time'] = time.join(' - ');
      item['Day'] = day;
      item['Short-abstract'] = item['Short-abstract'].replace(/(&nbsp;|<([^>]+)>)/ig, ''); // get rid of all HTML tags
    })
  }
}
