import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { AssignmentsService } from '../../shared/assignments.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  //@Output() deleteAssignment = new EventEmitter<Assignment>();

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
    this.router.navigate(["/home"]);
  }

  onDelete(){
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
    this.router.navigate(["/home"]);
  }

  onSubmit() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe((message) => console.log(message));
    this.assignmentTransmis = new Assignment;
  }

  onEdit() {
    this.router.navigate(["/assignment", this.assignmentTransmis.id, 'edit'], 
    {queryParams: {nom: this.assignmentTransmis.nom}, fragment: 'edition'});
  }
  /*@Input()*/
  assignmentTransmis: Assignment;

  constructor(private assignmentsService : AssignmentsService, 
              private route: ActivatedRoute,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }

  isAdmin(){
    return this.authService.loggedIn;
  }

}
