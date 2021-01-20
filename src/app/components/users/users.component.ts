import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList: Observable<UserModel[]>
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.usersList = this.sharedService.getUsersList()
  }

  selectUser(username){
    console.log('Select user')
    console.log(username)

    this.sharedService.selectedUser = username
  }

}
