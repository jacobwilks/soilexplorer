import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { CHARACTERS, CHARACTERS1, CHARACTERS2 } from '../mockdata';
@Injectable()
export class AdventureTimeService {
constructor() { }
getCharacters(): Observable<any[]>{
  return of(CHARACTERS);
}
getCharacters1(): Observable<any[]>{
  return of(CHARACTERS1);
}
getCharacters2(): Observable<any[]>{
  return of(CHARACTERS2);
}
getColumns(): string[]{
  return ["Area Symbol","Map Unit Key","Map Unit Symbol", "Area Name"
]};
getColumns1(): string[]{
    return ["Map Unit Key","Component Unit Key", "Component Percentage","Soil Series Name", "Description", "Soil Order", "Soil Sub Order", "Taxonomy Great Group", "Taxonomy Sub Group"
  ]};
getColumns2(): string[]{
    return ["Area Symbol","Area Name", "Map Unit Symbol","Map Unit Key", "Component", "Component Percentage", "Eco Class ID", "Ecosite Class Name"
  ]};
}


