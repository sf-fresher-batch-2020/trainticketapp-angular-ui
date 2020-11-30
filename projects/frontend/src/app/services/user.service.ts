import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl:string;
  users:any;

  constructor(private http: HttpClient)
   {
    this.apiUrl = environment.API_URL;
   }
   register(user){
     let url=this.apiUrl +"/users";
     return this.http.post(url,user);
   }
   getUsers(){
    let url=this.apiUrl +"/users";
    return this.http.get(url);
   }
   getTrains(){
    let url=this.apiUrl +"/trains";
    return this.http.get(url);
   }
}
