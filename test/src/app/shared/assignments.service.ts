import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[]= [];

  url = "https://assignment-app.herokuapp.com/api/assignments";
  // url =  "http://localhost:8010/api/assignments";
  //constructor(private loggingService:LoggingService) { }
  constructor (private loggingService:LoggingService, private http:HttpClient) { }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);
 
      return of(result as T);
    }
 };
 

  getAssignments() : Observable<Assignment[]> {
    // return of(this.assignments);
    return this.http.get<Assignment[]>(this.url);
  }

  // get all assignments where rendu = true
  getAssignmentsRendu() : Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.url + "/rendu");
  }


  getAssignment(id:number) : Observable<Assignment|undefined> {
    return this.http.get<Assignment>(this.url + "/" + id).pipe(
      tap(_ => console.log(`fetched assignment id=${id}`)),
      catchError(this.handleError<any>(`getAssignment id=${id}`))
    );
    // const a:Assignment|undefined = this.assignments.find(a => a.id === id);
    // return of(a);
  }


  addAssignment(assignment: Assignment) : Observable<any> {
    
    this.loggingService.log(assignment.nom, "ajouté");
    return this.http.post<Assignment>(this.url, assignment).pipe(
      tap(_ => console.log(`added assignment nom=${assignment.nom}`)),
      catchError(this.handleError<any>(`addAssignment nom=${assignment.nom}`))
    );

  }

  updateAssignment(assignment:Assignment) : Observable<any> {
    // const index = this.assignments.findIndex(a => a.id === assignment.id);
    // this.assignments[index] = assignment;
    // return of("Assignment modifié");
    return this.http.put<Assignment>(this.url, assignment).pipe(
      tap(_ => console.log(`updated assignment id=${assignment.id}`)),
      catchError(this.handleError<any>(`updateAssignment id=${assignment.id}`))
    );
  }

  deleteAssignment(assignment:Assignment) : Observable<any> {
    this.loggingService.log(assignment.nom, "Suprimé");
    return this.http.delete<Assignment>(this.url + "/" + assignment._id).pipe(
      tap(_ => console.log(`deleted assignment id=${assignment._id}`)),
      catchError(this.handleError<any>(`deleteAssignment id=${assignment._id}`))
    );
    // this.assignments = this.assignments.filter(a => a !== assignment);
    // return of("Assignment supprimé");
  }

  // getLastId() : number {
  //   return this.assignments[this.assignments.length-1].id;
  // }

}
