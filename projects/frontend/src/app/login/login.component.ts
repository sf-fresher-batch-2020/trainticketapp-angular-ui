import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  Login(form: NgForm) {
    let formData = form.value;
    console.log(JSON.stringify(formData));
    this.email = formData.email;
    this.password = formData.password;
    let result =  this.validateLogin(this.email,this.password);
    if (result==true) {
      this.toastr.success("Success");
      
      // this.router.navigate(['home']);
    }
    else if(result==false){
      this.toastr.error("Invalid Credentials");
    }


  }
  validateLogin(email, password) {
    var usersTemp = JSON.parse(localStorage.getItem("USERS"));
    var users = usersTemp ? usersTemp : [];
    let exists = false;
    for (let obj of users) {
      if (obj.email == email && obj.password == password) {
        exists = true;
        localStorage.setItem("LOGGED_IN_USER", JSON.stringify(obj));
        break;
      }
    }
    return exists;
  }




  }


