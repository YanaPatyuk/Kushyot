import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/services/question.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questions : Question[];
  
  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.service.getAllQuestions().subscribe(data => {this.questions = data;})
  }

}
