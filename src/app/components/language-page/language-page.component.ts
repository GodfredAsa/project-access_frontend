import { Language } from './../../models/language.model';
import { Component, OnInit } from '@angular/core';
// import { Language } from 'src/app/models/language.model';

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.css']
})
export class LanguagePageComponent{

  public selectedLanguage: string = ""
  public isLanguage: boolean = false;

   languages: Language[] = [
    new Language(1, "English", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png"),
    new Language(2, "Espanol", "https://stuffedeyes.files.wordpress.com/2018/06/spain-2906824_960_720.png"),
  ]

   constructor(){}

   public getLanguageByName(name: string){
    this.selectedLanguage = name;
    localStorage.setItem('language', this.selectedLanguage)
    if(this.selectedLanguage !==""){
      this.isLanguage = true;
    }else{
      this.isLanguage = false;
    }
   }


}
