import { User } from './../../models/user';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

    model: User = new User();
    retypePassword = "";

    constructor(private dataSrv : DataService){ }

  ngOnInit() {
  }

  save(){
    console.log("Saving User", this.model);

    this.dataSrv.saveUser(this.model);
  }
 
   
}
