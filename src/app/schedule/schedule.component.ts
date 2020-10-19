import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public schedule;

  constructor(private appService: AppService) 
  { }

  ngOnInit(): void {
    this.schedule = this.appService.getSchedule().default.nodes.node;
    this.normalizeData();
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
