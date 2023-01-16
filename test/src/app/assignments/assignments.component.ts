import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Assignment } from './assignment.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les assignments !";
  ajoutActive = false;
  formVisible = false;
  is_filtered = false;
  is_rendu = false;
  assignmentSelectionne: Assignment = new Assignment;
  assignments: Assignment[] = [];

  displayedColumns: string[] = ['id', 'nom', 'dateDeRendu', 'rendu'];
  dataSource = new MatTableDataSource<Assignment>;
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
    this.dataSource.paginator = this.paginator;
  }

  constructor (private assignmentService: AssignmentsService) { }

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
      this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
      this.dataSource.paginator = this.paginator;
    });
  }

  getAssignmentsRendu() {
    this.assignmentService.getAssignmentsRendu().subscribe(assignments => {
      this.assignments = assignments;
      this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
      this.dataSource.paginator = this.paginator;
    });
  }

  getAssignmentsNonRendu() {
    this.assignmentService.getAssignmentsNonRendu().subscribe(assignments => {
      this.assignments = assignments;
      this.dataSource = new MatTableDataSource<Assignment>(this.assignments);
      this.dataSource.paginator = this.paginator;
    });
  }


  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }


  onDeleteAssignment(event:Assignment) {
    this.assignments = this.assignments.filter(assignment => assignment !== event);
  }
}

