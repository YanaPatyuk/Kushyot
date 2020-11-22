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
  public list_of_questions: Question[];
  adult = false;
  clear_bord = true;
  addFilterForm: FormGroup;
  submited: boolean = false;
  showError:boolean;
  current_question_id: number;
  constructor(private service: QuestionService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.subjectList = QuestionsTypes.getSubjectList();
    this.formatsList = QuestionsTypes.getFotmatList();
    this.addFilterForm= this.fb.group({
      subject:[null, Validators.required],
      format:[null, Validators.required],
      adult:[null],
    })
    this.showError= false;
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
    this.addFilterForm.patchValue({format: selecterFinalFormat});
    this.addFilterForm.patchValue({subject: selecterFinalSubjects});
    console.log(this.addFilterForm.value);
    this.service.filterData(this.addFilterForm.value).subscribe(data => {
      console.log(data);
      this.list_of_questions = data;
      if(this.list_of_questions.length < 1) this.showError = true;
      this.submited = true;
      this.current_question = this.list_of_questions[0];
      this.current_question_id = 0;
      this.showError= false;
      this.addFilterForm.reset();
    })
  }

  nextBtn() {
    console.log(this.current_question_id);

    if(this.current_question_id >= this.list_of_questions.length - 1) return;
    this.current_question_id +=1;
    this.current_question = this.list_of_questions[this.current_question_id];
    console.log(this.current_question_id);
    console.log(this.current_question);
  }
  backBtn() {
    if(this.current_question_id <=0 ) return ;
    this.current_question_id -=1;
    this.current_question = this.list_of_questions[this.current_question_id];
  }

}
