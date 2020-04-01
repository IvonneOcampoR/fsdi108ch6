import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = [];
  //todo= "";

  constructor(private data : DataService) { 
    console.log(data.getUsers());
    
    this.users = data.getUsers();
    
    //console.log(data.test());

    //this.users = data.getSampleList();
  }

  ngOnInit() {
  }

  //saveTodo(){
   // this.users.push(this.todo);
  //  this.todo = "";
  //}

  //resetArray(){
    //this.users = [];
  //}//

}
