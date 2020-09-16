import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './components/development/development.component';
import { HomeComponent } from './components/home/home.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'webDevelopment', component: WebDevelopmentComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
