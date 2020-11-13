import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.scss']
})
export class ExhibitorsComponent implements OnInit {

  public exhibitors;

  constructor(private appService: AppService) 
  { }

  ngOnInit(): void {
    console.log('exhibitors: ' + this.exhibitors);
    this.exhibitors = this.appService.getExhibitors().default;
  }

}
