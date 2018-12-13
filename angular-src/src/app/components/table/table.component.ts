import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../../services/adventure-time.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }

}
