import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {

  public host: string = "http://127.0.0.1:8000"

  private chatGPTResponses: String[];

  constructor(private http: HttpClient) { }


  public getGuide(prompt: string): Observable<string[]>{
    return this.http.post<string[]>(`${this.host}/chat`, prompt, {})
  }


  public getMessage(): Observable<string>{
    return this.http.get<string>(`${this.host}/message`, {})
  }

}
