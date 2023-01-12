import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { SwitchService } from './switch.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // user:any = {
  //   username: "",
  //   password: ""
  // };
  user = this.authService.user = {
    username: "",
    password: ""
  };
  hide2 = true;

  getModal(_t7: NgForm) {
    console.log(_t7.value);
    // verify if the info from the form exist in users dictionary from auth service
    if(this.authService.users[_t7.value.user] == _t7.value.password){
      this.authService.logIn();
      this.hide();
    }
  }

  constructor(private sw:SwitchService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  hide(){
    this.sw.modal.emit(false);
  }


}
