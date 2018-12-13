import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../../services/adventure-time.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns2(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters2();
    //all data in mock-data.ts
  }

}
