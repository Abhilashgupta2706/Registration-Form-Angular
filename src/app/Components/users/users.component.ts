import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];

  constructor() {
    const localStorageItems = localStorage.getItem("users")

    if (localStorageItems == null) {
      this.users = []
    } else {
      this.users = JSON.parse(localStorageItems)
    }
  }

  ngOnInit(): void {
  }

  deleteUser(user: Users) {
    console.log(`User Deleted --> ${user.fname} ${user.lname}`)
    const indexOfUserToDelete = this.users.indexOf(user)
    this.users.splice(indexOfUserToDelete, 1)
    localStorage.setItem('users', JSON.stringify(this.users))
  }
  addUser(user: Users) {
    console.log(`User Added --> ${user.fname} ${user.lname}`)
    this.users.push(user)
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  checkBoxToggle(user: Users) {
    user.active ? console.log(`User marked as Scammer --> ${user.fname} ${user.lname}`) : console.log(`User unmarked as Scammer --> ${user.fname} ${user.lname}`)
    const indexOfUserToDelete = this.users.indexOf(user)
    this.users[indexOfUserToDelete].active = !this.users[indexOfUserToDelete].active
    localStorage.setItem('users', JSON.stringify(this.users))
  }
}
