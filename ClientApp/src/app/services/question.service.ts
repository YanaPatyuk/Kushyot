import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  _baseURL : string = "api/Questions";
  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get<Question[]>(this._baseURL + "/GetQuestions");
  }
}
