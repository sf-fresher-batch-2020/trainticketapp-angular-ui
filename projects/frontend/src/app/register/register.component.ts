import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  Register(form: NgForm) {
    let formData = form.value;
    console.log(JSON.stringify(formData));
    this.name = formData.name;
    this.email = formData.email;
    this.password = formData.password;
    let userObj = { "name": this.name, "email": this.email, "password": this.password };
    console.log(userObj);
    
    let result= this.storedata(userObj);
    if(result=="success"){
      this.toastr.success("registration success");
    }
    

  }
  storedata(userObj) {
    console.log(userObj)
    var usersTemp = JSON.parse(localStorage.getItem("USERS"));
    var users = usersTemp ? usersTemp : [];
    //validating emailaddress if already exists
    let emailAlreadyExists = false;
    console.log(users)
    if (users.length == 0) {
      console.log("inside if")
      users.push(userObj);
      localStorage.setItem("USERS", JSON.stringify(users));
      let result = "success";
      return result;
    }

    let isPresent = false;

    for (let obj of users) {
      console.log("insidefor")
      if (userObj.email == obj.email) {
        console.log(emailAlreadyExists)
        emailAlreadyExists = true;
        alert("Email already registered");
        isPresent = true;
        break;
      }
    }

    if (isPresent == false) {
      console.log("inside else")
      users.push(userObj);
      localStorage.setItem("USERS", JSON.stringify(users));
      let result = "success";
      return result;

    }
    else if (isPresent == true) {
      let result = "fail";
      return result;
    }
  }
}

