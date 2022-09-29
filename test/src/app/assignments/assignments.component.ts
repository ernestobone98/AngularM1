import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les assignments !"

  assignments = [
    {
      nom: "Assignment 1",
      dateDeRendu: "2020-10-10",
      rendu: true
    },
    {
      nom: "Assignment 2",
      dateDeRendu: "2020-10-10",
      rendu: false
    },
    {
      nom: "Assignment 3",
      dateDeRendu: "2020-10-10",
      rendu: false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
