import { Component } from '@angular/core';

@Component({
  selector: 'app-employment-page',
  templateUrl: './employment-page.component.html',
  styleUrls: ['./employment-page.component.css']
})
export class EmploymentPageComponent {


  selectedLanguage: string = localStorage.getItem("language");

}
