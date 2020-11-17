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
  email:string;
  password: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  Register(form: NgForm) {
    let formData = form.value;
    console.log(JSON.stringify(formData));
    this.toastr.success("registration success");
   
  }
}

