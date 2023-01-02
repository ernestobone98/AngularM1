import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
// import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les assignments !";
  ajoutActive = false;
  formVisible = false;
  assignmentSelectionne: Assignment = new Assignment;
  assignments: Assignment[] = [];

  constructor (private assignmentService: AssignmentsService) { }

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  // onAddAsignmentBtnClick() {
  //   this.formVisible = true;
  // }

  // onNouvelAssignment(event:Assignment) {
  //   //this.assignments.push(event);
  //   this.assignmentService.addAssignment(event).subscribe(message => console.log(message));
  //   this.formVisible = false;
  // }

  onDeleteAssignment(event:Assignment) {
    this.assignments = this.assignments.filter(assignment => assignment !== event);
  }
}
