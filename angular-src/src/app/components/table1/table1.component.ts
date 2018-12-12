import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../../services/adventure-time.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  constructor(private atService: AdventureTimeService) { }

  ngOnInit() {
    this.columns = this.atService.getColumns1(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters1();
    //all data in mock-data.ts
  }

}
