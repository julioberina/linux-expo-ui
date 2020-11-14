import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {
  public events;

  constructor(private appService: AppService) 
  { }

  ngOnInit(): void {
    this.events = this.appService.getEvents().default;
  }

}
