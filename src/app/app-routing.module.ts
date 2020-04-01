import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';

const routes: Routes = [
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'converter', component: TempCalculatorComponent},
  { path: 'about', component: AboutComponent},
  { path: 'user/list', component: UserListComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
