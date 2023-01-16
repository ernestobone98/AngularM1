import { Component, OnInit, ViewChild } from '@angular/core';
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

  assignmentSelectionne: Assignment = new Assignment;

  // displayedColumns: string[] = ['id', 'nom', 'dateDeRendu', 'rendu'];
  // dataSource = new MatTableDataSource<Assignment>;
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit() {
    // this.assignmentService.dataSource = new MatTableDataSource<Assignment>(this.assignments);
    this.assignmentService.dataSource.paginator = this.paginator;
  }

  constructor (public assignmentService: AssignmentsService) { }

  ngOnInit(): void {
    if (window.location.href.includes("rendu")) {
      this.getAssignmentsRendu();
    }
    if (window.location.href.includes("nonrendu")) {
      this.getAssignmentsNonRendu();
    }
    if (window.location.href.includes("home") || window.location.href === ("http://localhost:4200/")) {
      this.getAssignments();
    }
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => {
      this.assignmentService.assignments = assignments;
      this.assignmentService.dataSource = new MatTableDataSource<Assignment>(this.assignmentService.assignments);
      this.assignmentService.dataSource.paginator = this.paginator;
      console.log("all");
    });
  }

  getAssignmentsRendu() {
    this.assignmentService.getAssignmentsRendu().subscribe(assignments => {
      this.assignmentService.assignments = assignments;
      this.assignmentService.dataSource = new MatTableDataSource<Assignment>(this.assignmentService.assignments);
      this.assignmentService.dataSource.paginator = this.paginator;
      console.log("rendu");
    });
  }

  getAssignmentsNonRendu() {
    this.assignmentService.getAssignmentsNonRendu().subscribe(assignments => {
      this.assignmentService.assignments = assignments;
      this.assignmentService.dataSource = new MatTableDataSource<Assignment>(this.assignmentService.assignments);
      this.assignmentService.dataSource.paginator = this.paginator;
      console.log("non rendu");
    });
  }


  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }


  onDeleteAssignment(event:Assignment) {
    this.assignmentService.assignments = this.assignmentService.assignments.filter(assignment => assignment !== event);
  }
}

