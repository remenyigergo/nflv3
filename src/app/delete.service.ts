import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DeleteService {

  constructor(private http: Http) { }

  deletePlayer(model) {
    this.http.delete('http://localhost:3000/api/players/' + model.id, model).subscribe(
      data => {
        alert(model.id)
        return 0;
      },
      error => {
        console.log(JSON.stringify(error.json()));
        return 1;
      }
    )
  }

  deleteAMatch(model) {
    this.http.delete('http://localhost:3000/api/matches/' + model.id, model).subscribe(
      data => {
        alert(model.id)
        return 0;
      },
      error => {
        console.log(JSON.stringify(error.json()));
        return 1;
      }
    )
  }

  deleteATeam(model) {
    this.http.delete('http://localhost:3000/api/teams/' + model.id, model).subscribe(
      data => {
        alert(model.id)
        return false;
      },
      
      error => {
        console.log(JSON.stringify(error.json()));
        return true;
      }
    )
    
  }
}
