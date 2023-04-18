import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { englishJobsNeedHelpWith, spanishJobsNeedHelpWith } from 'src/app/data/data';

@Component({
  selector: 'app-application-jobs-need-help-with',
  templateUrl: './application-jobs-need-help-with.component.html',
  styleUrls: ['./application-jobs-need-help-with.component.css']
})
export class ApplicationJobsNeedHelpWithComponent implements OnInit {
  name = new FormControl('');
  isSubmitted = false;
  other = new FormControl('');
  otherQuestionHelpSelected: string = ""
  selectedLanguage: string = localStorage.getItem("language");
  submitDisplayName: string = this.selectedLanguage==="English" ? "submit" : "presentar";

  JobsNeedHelpWith: string[] = this.selectedLanguage==="English" ? englishJobsNeedHelpWith : spanishJobsNeedHelpWith;

  constructor(public fb: FormBuilder){}

  ngOnInit(): void {}

  registrationForm = this.fb.group({
    jobHelpName: ['', Validators.required],
  })


  changeJob(e: any) {
    this.jobHelpName?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.otherQuestionHelpSelected = this.registrationForm.value.jobHelpName;
  }

  // Access formcontrols getter
  get jobHelpName() {
    return this.registrationForm.get('jobHelpName');
  }

  
  onSubmit(): void {
    console.log(this.registrationForm.value.jobHelpName);
    console.log(this.otherQuestionHelpSelected);


    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }

}
