import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LogInFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
