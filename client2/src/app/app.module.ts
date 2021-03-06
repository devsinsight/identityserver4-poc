import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main.component';
import { SigninComponent } from './core/component/signin-callback.component';
import { AuthService } from './core/service/auth.service';
import { SignoutComponent } from './core/component/signout-callback.component';
import { SilentRenewComponent } from './core/component/silent-renew-callback.component';
import { WelcomeComponent } from './pages/welcome.component';
import { AuthGuardService } from './core/service/auth-guard.service';
import { AuthInterceptorService } from './core/service/auth-interceptor..service';

import { MainService } from './pages/main.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    SignoutComponent,
    SilentRenewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
