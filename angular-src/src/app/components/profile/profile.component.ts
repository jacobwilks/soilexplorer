import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log(err);
      return false;
    });
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
