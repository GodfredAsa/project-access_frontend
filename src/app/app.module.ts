import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LanguagePageComponent } from './components/language-page/language-page.component';
import { AgePageComponent } from './components/age-page/age-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmploymentPageComponent } from './components/employment-page/employment-page.component';
import { ApplicationPageComponent } from './components/application-page/application-page.component';
import { ApplicationJobsNeedHelpWithComponent } from './components/application-jobs-need-help-with/application-jobs-need-help-with.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LanguagePageComponent,
    AgePageComponent,
    MenuPageComponent,
    FooterComponent,
    EmploymentPageComponent,
    ApplicationPageComponent,
    ApplicationJobsNeedHelpWithComponent,
    LoaderComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
