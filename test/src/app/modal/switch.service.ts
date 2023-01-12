import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  // url = "https://assignment-app.herokuapp.com/api/assignments";
  url =  "http://localhost:8010/api/assignments";

  constructor(private http:HttpClient) { }

  modal = new EventEmitter<any>();

  form = new EventEmitter<any>();

}
