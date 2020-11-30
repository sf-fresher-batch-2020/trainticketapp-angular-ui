import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  constructor(private toastr: ToastrService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  Register(form: NgForm) {

    let formData = form.value;
    console.log(JSON.stringify(formData));
    this.userService.register(formData).subscribe(res => {
      console.log(res);
      this.toastr.success("Successfully Registered");
      this.router.navigate(['login']);
    }, err => {
      console.error(err);
      this.toastr.error("Registration failed");
    });
  }
}

