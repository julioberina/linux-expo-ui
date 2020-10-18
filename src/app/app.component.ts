import { Component } from '@angular/core';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faBars = faBars;
  public faArrowLeft = faArrowLeft;

  public menuClicked() {
    console.log('menu clicked');
  }

  public arrowClicked() {
    console.log('arrow clicked');
  }
}
