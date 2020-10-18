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
  public arrowClass = 'hidden';

  private pageStack = [];

  public menuClicked() {
    console.log('menu clicked');
    this.pageStack.push('component');
    this.arrowClass = '';
  }

  public arrowClicked() {
    console.log('arrow clicked');
    this.pageStack.pop();
    this.arrowClass = this.pageStack.length === 0 ? 'hidden' : '';
  }
}
