import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsTypes } from 'src/app/constant_data/questionsTypes';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/services/question.service';


@Component({
  selector: 'app-filter-game',
  templateUrl: './filter-game.component.html',
  styleUrls: ['./filter-game.component.css']
})
export class FilterGameComponent implements OnInit {

  current_question : Question;
  select_new_pref : boolean = true;
  selectedSubjects = [];
  selectedFormat = [];
  subjectList = [];
  formatsList = [];
  list_of_questions = [];
  adult = false;
  clear_bord = true;
  addFilterForm: FormGroup;
  submited: boolean = false;
  constructor(private service: QuestionService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.subjectList = QuestionsTypes.getSubjectList();
    this.formatsList = QuestionsTypes.getFotmatList();
    this.addFilterForm= this.fb.group({
      subject:[null, Validators.required],
      format:[null, Validators.required],
      adult:[null],
    })
  }

  getFilterd(){
    this.clear_bord = false;
    let selecterFinalFormat = [];
    let selecterFinalSubjects = [];
    for (var value of this.selectedFormat) {
      selecterFinalFormat.push(value.name);
    }
    for (var value of this.selectedSubjects) {
      selecterFinalSubjects.push(value.name);
    }
    this.submited = true;
  }

}
