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
    // Listen the event from the service to reveal the modal if necessary
    this.sw.modal.subscribe((value) => {
      this.showModal = value;
    });
  }   

  
  getRendu(): void{
    // let assigmentsRendu = new AssignmentsComponent(this.as);  // works only if I do not navigate to another page
    // assigmentsRendu.getAssignmentsRendu();
    this.router.navigate(['/assignments/rendu']);
  }

  getNonRendu(): void{
    // let assigmentsNonRendu = new AssignmentsComponent(this.as);
    // assigmentsNonRendu.getAssignmentsNonRendu();
    this.router.navigate(['/assignments/nonrendu']);
  }

  getAll(): void{
    // let assigmentsAll = new AssignmentsComponent(this.as);
    // assigmentsAll.getAssignments();
    this.router.navigate(['/home']);
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
