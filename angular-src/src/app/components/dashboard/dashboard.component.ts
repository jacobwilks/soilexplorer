import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var table = document.createElement('table'), tr, td, row, cell;
  for (row = 0; row < 10; row++) {
      tr = document.createElement('tr');
      for (cell = 0; cell < 22; cell++) {
          td = document.createElement('td');
          tr.appendChild(td);
          td.innerHTML = row * 22 + cell + 1;
      }
      table.appendChild(tr);
  }
  document.getElementById('container').appendChild(table);
  }

}
