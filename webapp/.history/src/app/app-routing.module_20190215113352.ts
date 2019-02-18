import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/user/sign-up/sign-up/sign-up.component';
import { UserComponent } from 'src/app/user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'signup', component: UserComponent
  }
  children : [{}

  ]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
