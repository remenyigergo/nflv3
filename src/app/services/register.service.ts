import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  registerUser(model) {
    this.http.put('http://localhost:3000/users/register/', model).subscribe(
      data => {
        console.log('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }

    )
  }

}
