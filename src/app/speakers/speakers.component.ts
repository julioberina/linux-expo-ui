import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { AppService } from '../app.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  public speakers;

  constructor(private appService: AppService) 
  { }

  ngOnInit(): void {
    this.speakers = this.appService.getSpeakers().default;
  }

  public genBgImg(imurl: any) {
    return {'background-image': 'url(\'' + (imurl || 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png') + '\')',
            'background-repeat': 'no-repeat',
            'background-size': 'contain'};
  }
}
