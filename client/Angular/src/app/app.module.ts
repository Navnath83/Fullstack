import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { FormsModule } from '@angular/forms';
import { UserRegisterService} from './user-register.service';
import { CodeforinterviewComponent } from './codeforinterview/codeforinterview.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    RegisterComponent,
    AppComponent,
    LoginComponent,
    CodeforinterviewComponent,
    AllUsersComponent,
    SearchComponent,
    FooterComponent,
    HelloWorldComponent,
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2TelInputModule ,
    HttpClientModule
  ],
  providers: [UserRegisterService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
