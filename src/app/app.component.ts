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
  public menuItems = {
    'Schedule': 'schedule',
    'My Schedule': 'my-schedule',
    'Contacts': 'contacts',
    'Exhibitors': 'exhibitors',
    'Speakers': 'speakers',
    'Special Events': 'special-events',
    'Scan Badge QR Code': 'qr-code',
    'Campus Map': 'campus-map'
  };

  private pageStack = [];

  public menuClicked() {
  }

  public menuItemClicked(item: string) {
    this.pageStack.push(this.menuItems[item]);
    this.arrowClass = this.pageStack.length === 0 ? 'hidden' : '';
  }

  public arrowClicked() {
    this.pageStack.pop();
    this.arrowClass = this.pageStack.length === 0 ? 'hidden' : '';
  }

  public menuItemKeys(): string[] {
    return Object.keys(this.menuItems);
  }
}
