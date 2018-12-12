import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

import { CHARACTERS, CHARACTERS1 } from '../mockdata';
@Injectable()
export class AdventureTimeService {
constructor() { }
getCharacters(): Observable<any[]>{
  return of(CHARACTERS);
}
getCharacters1(): Observable<any[]>{
  return of(CHARACTERS1);
}
getColumns(): string[]{
  return ["area_symbol","mukey", "crop","units", "map_unit_symbol", "area_name"
]};


getColumns1(): string[]{
    return ["mukey","cokey", "comppct_r","compname", "taxclname", "taxorder", "taxsuborder", "taxgrtgroup", "taxsubgrp"
  ]};
  

}


