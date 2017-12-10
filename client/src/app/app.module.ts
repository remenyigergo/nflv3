import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamService } from './team.service';
import { MatchService } from './match.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerService } from './player.service';
import { PlayerComponent } from './components/player/player.component';
import { Routes } from '@angular/router';
import { WeeksComponent } from './components/weeks/weeks.component';
import { ApiComponent } from './api/api.component';
import { GetComponent } from './components/get/get.component';
import { PostComponent } from './components/post/post.component';
import { UpdateComponent } from './components/update/update.component'

import { GetService } from './get.service';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { UpdateService } from './update.service';
import { DeleteComponent } from './components/delete/delete.component';
import { DeleteService } from './delete.service';

import { LoginComponent } from './components/login/login.component';
import { EmailComponent } from './components/email/email.component';
import { SignupComponent } from './components/signup/signup.component';
import { BuyComponent } from './components/buy/buy.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service'

import { AuthGuard } from './_guard/auth.guard';
import { SuccessComponent } from './components/success/success.component'
import { MailService } from './services/mail.service';
import { FailedComponent } from './components/failed/failed.component';
import { ProfileComponent } from './components/profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HomeComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    WeeksComponent,
    ApiComponent,
    GetComponent,
    PostComponent,
    UpdateComponent,
    DeleteComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    BuyComponent,
    CheckoutComponent,
    SuccessComponent,
    FailedComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
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
      path: 'api',
      component: ApiComponent,
    }]),
    RouterModule.forRoot([{
      path: 'api/get',
      component: GetComponent,
    }]),
    RouterModule.forRoot([{
      path: 'api/post',
      component: PostComponent,
    }]),
    RouterModule.forRoot([{
      path: 'api/update',
      component: UpdateComponent,
    }]),
    RouterModule.forRoot([{
      path: 'api/delete',
      component: DeleteComponent,
    }]),
    RouterModule.forRoot([{
      path: 'buy',
      component: BuyComponent,
      canActivate: [AuthGuard]
    }]),
    RouterModule.forRoot([{
      path: 'checkout',
      component: CheckoutComponent,
      canActivate: [AuthGuard]
    }]),
    RouterModule.forRoot([{
      path: 'login',
      component: LoginComponent,
    }]),
    RouterModule.forRoot([{
      path: 'signup',
      component: SignupComponent,
    }]),
    RouterModule.forRoot([{
      path: 'success',
      component: SuccessComponent,
      canActivate: [AuthGuard]
    }]),
    RouterModule.forRoot([{
      path: 'failed',
      component: FailedComponent,
      canActivate: [AuthGuard]
    }]),
    RouterModule.forRoot([{
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard]
    }]),

  ],
  providers: [
    TeamService,
    MatchService,
    PlayerService,
    GetService,
    PostService,
    UpdateService,
    DeleteService,
    AuthService,
    AlertService,
    UserService,
    AuthGuard,
    MailService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


