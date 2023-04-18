import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LanguagePageComponent } from './components/language-page/language-page.component';
import { AgePageComponent } from './components/age-page/age-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { EmploymentPageComponent } from './components/employment-page/employment-page.component';
import { ApplicationPageComponent } from './components/application-page/application-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'languages', component: LanguagePageComponent },
  { path: 'age', component: AgePageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'employment', component: EmploymentPageComponent },
  { path: 'application', component: ApplicationPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router) { }


  public gotoLanguage() {
    this.router.navigateByUrl('/languages')
  }
}
