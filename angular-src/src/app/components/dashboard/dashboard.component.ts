import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <div>
      <label>PDF src</label>
      <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">
  </div>
  <pdf-viewer [src]="pdfSrc" 
              [render-text]="true"
              style="display: block;"
  ></pdf-viewer>
  `
})

export class DashboardComponent implements OnInit {

  pdfSrc: string = '../../SSURGO_Metadata_-_Relationships.pdf';

  constructor() { }

  ngOnInit() {
  }

}
