import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from './modal/switch.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal = false;
  title = 'Assignments';
  

  constructor( private authService:AuthService, private router:Router, private sw:SwitchService) { }

  ngOnInit(): void {
    // hear the event from the service to reveal the modal if necessary
    this.sw.modal.subscribe((value) => {
      this.showModal = value;
    });
  }

  connected() {
    return this.authService.loggedIn;
  }

  login() {
    if(!this.authService.loggedIn){
      this.showModal = true;
    } else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }
  
}
