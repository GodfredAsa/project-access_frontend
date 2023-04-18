import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { englishJobsNeedHelpWith, jobsInEnglish, jobsInSpanish, spanishJobsNeedHelpWith } from 'src/app/data/data';
import { ChatGptService } from 'src/app/service/chat-gpt.service';
import { applicationRequestBody, constructApplicationSentence } from '../utilitis/request.utilities';
// Initialization for ES Users

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.css']
})
export class ApplicationPageComponent implements OnInit, OnDestroy {
  name = new FormControl('');
  other = new FormControl('');
  otherApplicationQuestion = new FormControl('');
  workHistoryForm = new FormControl('');

  pageLoader: boolean = false


  isSubmitted = false;
  isApplicationResponse = false;
  otherJobSelected: string = "";
  otherSelectedApplicationQuestion = "";
  selectedLanguage: string = localStorage.getItem("language");
  submitDisplayName: string = this.selectedLanguage === "English" ? "submit" : "presentar";
  JobsNeedHelpWith: string[] = this.selectedLanguage === "English" ? englishJobsNeedHelpWith : spanishJobsNeedHelpWith;

  chatGPTWorkHistoryResponse: string[];

  private subscriptions: Subscription[] = [];
  public chatGptResponses: string[];

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }


  whatToWriteModal = false;
  toggleWhatToWriteModal() {
    this.whatToWriteModal = !this.whatToWriteModal;
  }

  // public makingProgressResponse



  Jobs: string[] = this.selectedLanguage === "English" ? jobsInEnglish : jobsInSpanish;

  tryMessage = ""

  // JobsNeedHelpWith: string[] = this.selectedLanguage==="English" ? englishJobsNeedHelpWith : spanishJobsNeedHelpWith;

  constructor(public fb: FormBuilder, private chatGptService: ChatGptService, public http: HttpClient) { }

  registrationForm = this.fb.group({
    jobName: ['', Validators.required],
    jobHelpName: ['', Validators.required]
  })

  changeJob(e: any) {
    this.jobName?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.otherJobSelected = this.registrationForm.value.jobName;
  }


  changeApplicationQuestion(e: any) {
    this.jobHelpName?.setValue(e.target.value, {
      onlySelf: true,
    });
    this.otherSelectedApplicationQuestion = this.registrationForm.value.jobHelpName;
  }


  get jobName() {
    return this.registrationForm.get('jobName');
  }

  get jobHelpName() {
    return this.registrationForm.get('jobHelpName');
  }


  onSubmit(): void {
    // console.log(this.registrationForm.value.jobName);
    let title = this.registrationForm.value.jobName;

    // console.log("I am filling out an application to be a " + title + ".  I do not speak English. Please respond to this question in Spanish.")
    console.log(this.selectedLanguage);
    console.log(this.other.value)

    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.registrationForm.value));
    }
  }


  ngOnInit(): void { }

  public getChatGPTResponse() {
    this.onSubmit()
    var formData: any = new FormData();

    this.registrationForm.value.jobName = this.isOther(this.other.value);
    this.registrationForm.value.jobHelpName = this.isAnother(this.otherApplicationQuestion.value)

    console.log("Job Title: " + this.registrationForm.value.jobName)
    console.log("Job Title Other: " + this.other.value)
    console.log("Application Question: " + this.registrationForm.value.jobHelpName)
    console.log("Application Question Other: " + this.otherApplicationQuestion.value)
    console.log("Application Work History: " + this.workHistoryForm.value)

    // EXTRACT ALL INTO UTILITY FUNCTIONS
    formData.append('prompt', applicationRequestBody(this.jobName.value));

    this.pageLoader = true;

    this.http.post("http://127.0.0.1:8000/chat", formData).subscribe(
      (response: string[]) => {
        this.chatGptResponses = response;
        this.pageLoader = false
        // this.isApplicationResponse = true
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        this.pageLoader = false
      }
    )
  }

  // WORKING ON WORK HISTORY STARTS HERE

  public getWorkHistoryFromChatGPT(){
    var formData: any = new FormData();

    console.log("Application Work History: " + this.workHistoryForm.value)
//  this.workHistoryForm.value
    formData.append('prompt', constructApplicationSentence(this.jobName.value, this.workHistoryForm.value))

    this.http.post("http://127.0.0.1:8000/chat", formData).subscribe(
      (response: string[]) =>{
        this.chatGPTWorkHistoryResponse = response;
        console.log("work History: " +response)
        this.toggleModal()
      },
      (errorResponse: HttpErrorResponse) => console.log(errorResponse)
    )

    }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }


  public isOther(other: string): string {
    if (other) {
      this.registrationForm.value.jobName = other
    }
    return this.registrationForm.value.jobName;
  }


  public isAnother(otherSelected: string): string {
    if (otherSelected) {
      this.registrationForm.value.jobHelpName = otherSelected
    }
    return this.registrationForm.value.jobHelpName;
  }
}
