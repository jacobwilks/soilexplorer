import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private ngFlashMessageService: NgFlashMessageService,
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please fill in all fields"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: false, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'info'
      });
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: ["Please use a valid email"], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: false, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: 2000,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'info'
      });
      return false;
    }
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success){
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["You are now registered and can log in."], 
          // Whether the flash can be sdismissed by the user defaults to false
          dismissible: false, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: 2000,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'success'
        });
        this.router.navigate(['/login']);
      }else {
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: ["Something went wrong."], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: false, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: 2000,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });
        this.router.navigate(['/register']);
      }
    });
  }
}
