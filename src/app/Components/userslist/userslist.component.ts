import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/Users';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  @Input() user!: Users;
  @Input() index!: number;

  @Output() userDelete: EventEmitter<Users> = new EventEmitter();
  @Output() userCheckBox: EventEmitter<Users> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user: Users) {
    console.log("Delete Btn Clicked")
    this.userDelete.emit(user)
  }
  checkBoxClick(user: Users) {
    console.log("Check Box Clicked")
    this.userCheckBox.emit(user)
  }
}
