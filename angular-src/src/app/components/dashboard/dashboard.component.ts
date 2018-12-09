import { Component, OnInit } from '@angular/core';
import { PDFSource } from 'pdfjs-dist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  pdfSrc: string;
  pdfItems = [];

  constructor() { }

  ngOnInit() {
    this.pdfSrc =  '../assets/SSURGO 2.2 Data Model – Diagram 1 of 2.pdf';
    this.pdfItems = [
                    {value: '../assets/SSURGO 2.2 Data Model – Diagram 1 of 2.pdf', label : 'Data Model 1'},
                    {value: '../assets/SSURGO 2.2 Data Model – Diagram 2 of 2.pdf', label : 'Data Model 2'},
                    {value: '../assets/SSURGO_Metadata_-_Domains.pdf', label : 'Domains'},
                    {value: '../assets/SSURGO_Metadata_-_Relationships.pdf', label : 'Relationships'},
                    {value: '../assets/SSURGO_Metadata_-_Table_Column_Descriptions.pdf', label : 'Table Column Descriptions'},
                    {value: '../assets/SSURGO_Metadata_-_Tables_and_Columns.pdf', label : 'Tables and Columns'},
                    {value: '../assets/SSURGO_Style_Metadata_-_Unique_Constraints.pdf', label : 'Unique Constraints'},
                    {value: '../assets/SSURGODataPackagingandUse6.pdf', label : 'Data Packaging and Use'}
                  ];
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

}
