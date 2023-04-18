import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-age-page',
  templateUrl: './age-page.component.html',
  styleUrls: ['./age-page.component.css']
})
export class AgePageComponent implements OnInit{

  public inputAge: number = 0;
  public selectedLanguage: string;

  public isAgeValid: boolean  = false;


  ngOnInit(): void {
    this.getLanguageFromLocalStorage()
  }


  public increaseAge(){
    this.inputAge = this.inputAge + 1;
  }

  public decreaseAge(){
    if(this.inputAge===0){
      this.inputAge = 0;
      console.log("Age: " + this.selectedLanguage)
    }else{
    this.inputAge = this.inputAge - 1;
    }
  }

  public onValidateAge(age: number){
    this.inputAge = age;
    if(this.inputAge <= 17){
      this.isAgeValid = false;
    }else{
      this.isAgeValid = true;
    }
    return this.isAgeValid;
  }

  private getLanguageFromLocalStorage(): string{
    this.selectedLanguage = localStorage.getItem('language');
    console.log("Age: " + this.selectedLanguage)
    return this.selectedLanguage;
  }


}
