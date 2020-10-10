import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http : HttpClient) { }
  executeUserRegisterService() {
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('javaguides' + ':' + 'password') });
    return this.http.get<User>('http://localhost:8080/user-register/api/v1/greeting');
  }
  public doRegistration(user){
    return this.http.post("http://localhost:8080/save-user",user, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/all-users");
  }

  public getUserByUsername(username){
    return this.http.get("http://localhost:8080/search/"+username);
  }

  public deleteUser(username){
    return this.http.get("http://localhost:8080/delete/"+username);
  }
}
