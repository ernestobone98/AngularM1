import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les assignments !";
  ajoutActive = false;
  formVisible = false;

  assignments = [
    {
      nom: "Assignment 1",
      dateDeRendu: new Date ("2020-10-10"),
      rendu: true
    },
    {
      nom: "Assignment 2",
      dateDeRendu: new Date ("2020-10-10"),
      rendu: false
    },
    {
      nom: "Assignment 3",
      dateDeRendu: new Date ("2020-10-10"),
      rendu: false
    }
  ];
  assignmentSelectionne: Assignment = new Assignment;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.ajoutActive = true }, 2000);
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAsignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(event:Assignment) {
    this.assignments.push(event);
    this.formVisible = false;
  }

}
