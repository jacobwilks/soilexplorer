import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.ngFlashMessageService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ["Successfully logged out"], 
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: false, 
      // Time after which the flash disappears defaults to 2000ms
      timeout: 2000,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'success'
    });
    this.router.navigate(['/login']);
    return false;
  }

}
