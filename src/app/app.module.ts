import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamService } from './team.service';
import { MatchService } from './match.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { PlayerService } from './player.service';
import { PlayerComponent } from './player/player.component';
import { Routes } from '@angular/router';
import { WeeksComponent } from './weeks/weeks.component';
import { GetComponent } from './get/get.component';




@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HomeComponent,
    MatchesComponent, 
    PlayersComponent,
    PlayerComponent,
    WeeksComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: '#',
        component: HomeComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'teams/page/:num',
        component: TeamsComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'matches/weeks/:num/page/:page',
        component: WeeksComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'matches/weeks',
        component: MatchesComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'players',
        component: PlayersComponent
      }
    ]),
    RouterModule.forRoot([{
      path: 'player/:id',
      component: PlayerComponent,
    }]),
    RouterModule.forRoot([{
      path: 'get',
      component: GetComponent,
    }])
  ],
  providers: [TeamService, MatchService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
