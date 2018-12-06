import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  pdfSrc: string = '../../SSURGO_Metadata_-_Relationships.pdf';

  constructor() { }

  ngOnInit() {
  }

}
