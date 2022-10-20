import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[]= [];

  uri = 'http://localhost/8010/api/assignments';

  constructor(private loggingService:LoggingService, private http:HttpClient) { }

  getAssignments() : Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.uri);
    // return of(this.assignments.find(a => a.id === id));
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
