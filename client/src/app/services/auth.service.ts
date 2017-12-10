import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { log } from 'util';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(model) {
    return this.http.post('http://localhost:3001/session/login', model)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json();
        if (response.status == 200) {
          console.log("Login successful");
          localStorage.setItem('token', token);
        } else {
          console.log("Login failed");          
        }
        
      });
  }

  authenticate(token) {      
    var auth = false;
    return this.http.post('http://localhost:3001/session/authenticate', token)
      .map((response: Response) => {
        let user = response.json();
        if (response.status == 200) {
          return true;
        } else {
          return false;
        }
      });


  }


  logout() {
    // remove user from local storage to log user out
    console.log("Logout successful");
    localStorage.removeItem('currentUser');
  }
}


