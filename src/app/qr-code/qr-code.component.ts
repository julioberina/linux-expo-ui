import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit {

  public qrResultString = '';

  constructor() { }

  ngOnInit(): void {
  }

  public clearResult(): void {
    this.qrResultString = null;
  }

  public onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }
}
