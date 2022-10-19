import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { AssignmentsService } from '../../shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
  }

  onSubmit() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis).subscribe((message) => console.log(message));
    this.assignmentTransmis = new Assignment;
  }
  @Input()
  assignmentTransmis: Assignment = new Assignment;

  constructor(private assignmentsService : AssignmentsService) { }

  ngOnInit(): void {
  }

}
