import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getAll() {
    return this.http.get('http://localhost:3000/users/getallUsers', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    console.log("USER SERVICE")
    console.log(user.username)
    return this.http.post('http://localhost:3000/users/register', user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  getUserInfo(username) {
    console.log("getinfo userservice")
    return this.http.get('http://localhost:3000/users/getinfo/'+username).map((response: Response) => response.json());
  }

  deposit(depositModel) {
    console.log("deposit userservice" + JSON.stringify(depositModel))
    return this.http.post('http://localhost:3000/users/deposit/',depositModel).map((response: Response) => response.json());    
  }

  withdraw(withdrawalModel) {
    console.log("deposit userservice" + JSON.stringify(withdrawalModel))
    return this.http.post('http://localhost:3000/users/withdraw/',withdrawalModel).map((response: Response) => response.json());    
  }


  buyTicket(model) {

    return this.http.post('http://localhost:3000/tickets/addticket/', model)
      .map((response: Response) => {
        console.log("resASDASDASDASDASDponse")
        if (response.status == 200) {
          return true;
        }
        if (response.status == 405) {
          console.log("response 405")
          return false;
        }
      });
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }

}

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  balance: number;
}