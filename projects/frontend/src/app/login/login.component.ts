import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private toastr: ToastrService, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }
  Login(form: NgForm) {
    this.userService.getUsers().subscribe(res => {
      console.log(res);
      let users: any = res;
      let userExists = false;
      let loggedInUser = null;
      for (let obj of users) {
        if (obj.email == this.email && obj.password == this.password) {
          console.log(this.email);
          userExists = true;
          loggedInUser = obj;
          break;
        }
      }
      if (userExists) {
        form.reset();
        this.authService.storeLoginDetails(loggedInUser);
        this.toastr.success("Successfully Logged in");
      }
      else {
        this.toastr.error("Invalid credentials");
      }
    });


  }
}



