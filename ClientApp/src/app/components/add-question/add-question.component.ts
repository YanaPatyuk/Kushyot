import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionsTypes } from 'src/app/constant_data/questionsTypes';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  subjectList = []
  selectedSubjects = [];
  formatsList = []
  selectedFormat = [];

  addQuestionForm: FormGroup;
  showError : boolean = false;

  constructor(private service: QuestionService, private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addQuestionForm = this.fb.group({
      questionData:[null, Validators.required],
      author:[null,Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      subject:[null, Validators.required],
      format:[null, Validators.required],
      date:[null],
      adult:[null,Validators.required],
    })
    this.subjectList = QuestionsTypes.getSubjectList();
    this.formatsList = QuestionsTypes.getFotmatList();
  }

  onSubmit(){
    let selecterFinalFormat = [];
    let selecterFinalSubjects = [];
    for (var value of this.selectedFormat) {
      selecterFinalFormat.push(value.name);
    }
    for (var value of this.selectedSubjects) {
      selecterFinalSubjects.push(value.name);
    }
    //set the date and update the formats and selected subjects
    this.addQuestionForm.patchValue({date: new Date()});
    this.addQuestionForm.patchValue({format: selecterFinalFormat});
    this.addQuestionForm.patchValue({subject: selecterFinalSubjects});
    this.addQuestionForm.patchValue({rating: 0});
    //check what data i send
    //console.log("Yana");
    //console.log(this.addQuestionForm);
    this.service.addQuestion(this.addQuestionForm.value).subscribe(data => {
      this.router.navigate(["/questions"]);
    }, error=> {this.showError = true;})
  }

}
