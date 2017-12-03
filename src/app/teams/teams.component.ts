import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Class } from '@angular/core';
import { NgModule, Input }      from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})


export class TeamsComponent implements OnInit {

  private num: number;
  private teamPage1: Team[];
  private teamPage2: Team[];

  constructor(private route: ActivatedRoute, private teamService: TeamService) {
    
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.num = +params['num'];
    });
    
    this.teamService.getTeamPage1().subscribe(
      teamPage1 => {
        this.teamPage1 = teamPage1;
      },
    );

    this.teamService.getTeamPage2().subscribe(
      teamPage2 => {
        this.teamPage2 = teamPage2;
      },
    );
    
  }



}


export class Team {
  private id;
  private name;
  private siteUrl;
  private division;

  constructor(id, name, siteUrl, division) {
    this.id = id;
    this.name = name;
    this.siteUrl = siteUrl;
    this.division = division;
  }

}