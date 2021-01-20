import { Injectable, OnChanges, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map, share, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {

  usersList:Observable<UserModel[]>
  filteredUsers:Observable<UserModel[]>
  selectedUser:string
  filterValue:string = ''
  baseURL:string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) {
    console.log('service constructor called')
    this.usersList = this.http.get<UserModel[]>(this.baseURL).pipe(shareReplay());
    this.filteredUsers = this.usersList
  }
  
  ngOnInit(){
   }

   getUsersList():Observable<UserModel[]>{
    this.filteredUsers = this.usersList.pipe(
      map((users: UserModel[]) => users.filter( 
          (u) => {
           return u.name.toLowerCase().includes(this.filterValue)
          } 
        )
      )
    )
    return this.filteredUsers
   }
}
