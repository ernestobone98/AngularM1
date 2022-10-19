import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[]= [
    {
      id: 1,
      nom: "Assignment 1",
      dateDeRendu: new Date ("2020-10-10"),
      rendu: true
    },
    {
      id: 2,
      nom: "Assignment 2",
      dateDeRendu: new Date ("2020-10-10"),
      rendu: false
    },
    {
      id: 3,
      nom: "Assignment 3",
      dateDeRendu: new Date ("2020-10-10"),
      rendu: false
    }
  ];

  constructor(private loggingService:LoggingService) { }

  getAssignments(id) : Observable<Assignment> {
    return of(this.assignments.find(a => a.id === id));
  }

  addAssignment(assignment: Assignment) : Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");

    return of("Assignment ajouté");
  }

  updateAssignment(assignment:Assignment) : Observable<string> {
    // Object gets updated. An assignment is passed by reference.
    return of("Assignment modifié");
  }

  deleteAssignment(assignment:Assignment) : Observable<string> {
    this.assignments = this.assignments.filter(a => a !== assignment);
    return of("Assignment supprimé");
  }

}
