import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/Users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  fname!: string
  lname!: string
  pass!: string

  @Output()
  userAdd: EventEmitter<Users> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Register Button Triggered!")
    const user = {
      srno: 3,
      fname: this.fname,
      lname: this.lname,
      pass: this.pass,
      active: true
    }

    this.userAdd.emit(user)
  }
}
