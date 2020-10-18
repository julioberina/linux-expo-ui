import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        'margin-left': '0px'
      })),
      state('closed', style({
        'margin-left': '-300px'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faBars = faBars;
  public faArrowLeft = faArrowLeft;
  public arrowClass = 'hidden';
  public isMenuOpen = false;
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
    this.isMenuOpen = !this.isMenuOpen;
  }

  public menuItemClicked(item: string) {
    console.log(item);
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
