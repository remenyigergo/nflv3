import { Component, OnInit } from '@angular/core';
import { TeamModel, PlayerModel } from '../update/update.component';
import { Match } from '../post/post.component';
import { Http } from '@angular/http';
import { DeleteService } from '../delete.service';
import { GetService } from '../get.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  teammodel = new TeamModel(null, null, null, null);

  matchmodel = new Match(null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  playermodel = new PlayerModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  jatekos: any;
  deletedPlayer = false;

  meccs: any;
  deletedMatch = false;

  csapat: any;
  deletedTeam = false;

  responsecode: number;

  constructor(private deleteService: DeleteService, private getService: GetService) { }

  ngOnInit() {
  }

  deleteAPlayer() {

    if (this.playermodel.id != null) {
      console.log("get")
      console.log(this.playermodel.id)
      this.getService.getAPlayerById(this.playermodel.id).subscribe(
        jatekos => {
          this.jatekos = jatekos;
        }
      );


      if (this.jatekos != null) {
        console.log("delete")
        if (!this.deleteService.deletePlayer(this.playermodel)) {
          this.deletedPlayer = true;
          console.log("PLAYER DELETED!")
        }
      }
    }
  }


  deleteATeam() {
    if (this.teammodel.id != null) {
      console.log("get")
      console.log(this.teammodel.id)
      this.getService.getATeamById(this.teammodel.id).subscribe(
        csapat => {
          this.csapat = csapat;
        }
      );

      if (this.csapat != null) {
        console.log("delete")
        if (!this.deleteService.deleteATeam(this.teammodel)) {
          this.deletedTeam = true;
          console.log("TEAM DELETED!")
        }
      }
    }
  }

  deleteAMatch() {
    if (this.matchmodel.id != null) {
      console.log("get")
      console.log(this.matchmodel.id)
      this.getService.getAMatchById(this.matchmodel.id).subscribe(
        match => {
          this.meccs = match;
        }
      );


      if (this.meccs != null) {
        console.log("delete")
        if (!this.deleteService.deleteAMatch(this.matchmodel)) {
          this.deletedMatch = true;
          console.log("MATCH DELETED!")
        }
      }
    }
  }
}
