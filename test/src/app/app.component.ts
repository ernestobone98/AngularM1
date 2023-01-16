import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwitchService } from './modal/switch.service';
import { AuthService } from './shared/auth.service';
import { AssignmentsComponent } from './assignments/assignments.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  showModal = false;
  title = 'Assignments';
  assigmentsNonRendu: any;

  @ViewChild('ac', { static: true }) ac: AssignmentsComponent;
  ngAfterViewInit() {
  }

  constructor( private authService:AuthService, private router:Router, private sw:SwitchService) { }

  ngOnInit(): void {
    // Listen the event from the service to reveal the modal if necessary
    this.sw.modal.subscribe((value) => {
      this.showModal = value;
    });
  }

  // create a function that will use ac viewchild to execute getAssignmentsRendu function from the child component
  getNonRendu(): void {
    this.ac.getAssignmentsNonRendu();
  }

  getRendu(): void {
    this.ac.getAssignmentsRendu();
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
