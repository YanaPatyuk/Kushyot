import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/services/question.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  displayedColumns: string[] = ['Question', 'Author', 'Format', 'Subject', 'Adult', 'Date', 'Rating', 'Action'];
  public questions : Question[];
  paginator: MatPaginator;
  dataSource: any;

 
  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.service.getAllQuestions().subscribe(data => {
      this.questions = data;
      this.dataSource = new MatTableDataSource<Question>(this.questions);
      this.dataSource.paginator = this.paginator;
    })
  }

}
