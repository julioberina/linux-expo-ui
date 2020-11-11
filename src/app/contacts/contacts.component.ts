import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { Papa } from 'ngx-papaparse';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  private emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  public formGroup: FormGroup;
  public faFileCsv = faFileCsv;
  public contacts = [];

  constructor(private formBuilder: FormBuilder,
              private papa: Papa) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])]
    });

    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]')
  }

  public onSubmit(event: any) {
    this.contacts.push({ name: event.name, email: event.email });
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  public exportToCsv() {
    const path = 'contacts';
    const fileNum = localStorage.getItem('fileNum') || '';
    const ext = '.csv';

    const options = {
      header: true
    };

    const csv = this.papa.unparse(this.contacts, options);
    const csvData = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

    // fs.writeFile(path + fileNum + ext, this.papa.unparse(this.contacts, options), (err) => {
    //   if (err) throw err;
    //   console.log('CSV created!');
    //   if (fileNum)  localStorage.setItem('fileNum', '(' + (Number(fileNum)+1).toString() + ')');
    // });

    FileSaver.saveAs(csvData, path + fileNum + ext);
    localStorage.setItem('fileNum', ' (' + (Number(fileNum)+1).toString() + ')');
    console.log('CSV generated');
  }
}
