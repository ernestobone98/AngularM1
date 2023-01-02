import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

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

  url = "http://localhost:8010/api/assignments";
  //constructor(private loggingService:LoggingService) { }
  constructor (private loggingService:LoggingService, private http:HttpClient) { }

  getAssignments() : Observable<Assignment[]> {
    return of(this.assignments);
  }

  // getAssignments() : Observable<Assignment[]> {
  //   return this.http.get<Assignment[]>(this.url);
  // }

  getAssignment(id:number) : Observable<Assignment|undefined> {
    const a:Assignment|undefined = this.assignments.find(a => a.id === id);
    return of(a);
  }

  addAssignment(assignment: Assignment) : Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");

    return of("Assignment ajouté");
  }

  updateAssignment(assignment:Assignment) : Observable<string> {
    const index = this.assignments.findIndex(a => a.id === assignment.id);
    this.assignments[index] = assignment;
    return of("Assignment modifié");
  }

  deleteAssignment(assignment:Assignment) : Observable<string> {
    this.assignments = this.assignments.filter(a => a !== assignment);
    return of("Assignment supprimé");
  }

}
