import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  public getPlayers() {
    var player = this.http.get('http://localhost:3005/players')
    .map(response => response.json());
  console.log(player);
    return player;
  }
  public getPlayer(id) {

    console.log('http://localhost:3005/players/'+id);
    var player = this.http.get('http://localhost:3005/players/'+id).map(response => response.json());
      
    
    
    return player;
  }

  

}
