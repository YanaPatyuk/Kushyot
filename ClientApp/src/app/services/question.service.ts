import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterData } from '../interfaces/filterData';
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

  addQuestion(question: Question){
    return this.http.post(this._baseURL + "/AddQuestion",  question);
  }

  updateQuestion(question: Question){
    return this.http.post(this._baseURL + "/UpdateQuestion", question);
  }

  filterData(filterdData: FilterData){
    return this.http.post(this._baseURL + "/GetFilterdQuestions", filterdData);
  }
}
