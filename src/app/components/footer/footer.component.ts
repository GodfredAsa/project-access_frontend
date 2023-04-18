import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private titleSubject = new BehaviorSubject<string>("Home");
  public titleAction$ = this.titleSubject.asObservable();

  public changeHeader(title: string): void{
    this.titleSubject.next(title);
  }

}
