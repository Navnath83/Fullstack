import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CodeforinterviewComponent } from './codeforinterview/codeforinterview.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
const routes: Routes = [
  {
    path : "", redirectTo: "codeforinterview" , pathMatch : "full"
  },
  {
    path : "codeforinterview", component : CodeforinterviewComponent
  },
  {
    path : "register" , component : RegisterComponent
  },
  {
    path : "login" , component : LoginComponent
  },
  {
    path : "search" , component : SearchComponent
  },
  {
    path : "all-users", component : AllUsersComponent
  },

  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: '', component: LoginComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
