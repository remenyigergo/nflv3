import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Match } from './components/matches/matches.component';
import { Options } from 'selenium-webdriver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http/src/base_request_options';


@Injectable()
export class PostService {

  constructor(private http: Http) { }

  /*   public getTeamPage1() {
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      var body = 'username=myusername&password=mypassword';
      this.http
        .post('/api',
        body, {
          headers: headers
        })
        .subscribe(data => {
          alert('ok');
        }, error => {
          console.log(JSON.stringify(error.json()));
        });
    } */
  submit(params) {
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    //let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:3006/api/matches/add', params).subscribe(
      data => {
        console.log('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }

      )
  }


}
