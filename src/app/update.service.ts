import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UpdateService {

  constructor(private http: Http) { }

  updateMatch(model) {
    this.http.put('http://localhost:3000/api/matches/' + model.id, model).subscribe(
      data => {
        console.log('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }

    )
  }

  updateTeam(model) {
    this.http.put('http://localhost:3000/api/teams/' + model.id, model).subscribe(
      data => {
        alert(model.id)
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }

    )
  }


  updatePlayer(model) {
    this.http.put('http://localhost:3000/api/players/' + model.id, model).subscribe(
      data => {
        alert(model.id)
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
    )
  }

}
