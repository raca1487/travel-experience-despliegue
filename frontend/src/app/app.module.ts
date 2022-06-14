import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CanActivateViaLoggingGuest } from './canActivateViaLoggingGuest';
import { CanActivateViaLoggingAdministrador } from './canActivateViaLoggingAdministrador';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [CanActivateViaLoggingAdministrador, CanActivateViaLoggingGuest],
  bootstrap: [AppComponent]
})
export class AppModule { }
