import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MediChatGptScreenService {

  constructor(private http: HttpClient) { }

  receiveMsg(params: any): Observable<any> {
    return this.http.post<any>(`http://127.0.0.1:5000/prompt`, params)
  }

}
