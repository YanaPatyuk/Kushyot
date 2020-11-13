import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/services/question.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';




@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  displayedColumns: string[] = ['questionData', 'author', 'format', 'subject', 'adult', 'date', 'rating', 'action'];
  public questions : Question[];
  paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
    }
  dataSource = new MatTableDataSource();

  


 
  constructor(private service: QuestionService) { }

   
 setDataSourceAttributes() {
  this.dataSource.paginator = this.paginator;
}

@ViewChild(MatSort) sort: MatSort;

ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}

  ngOnInit(): void {
    this.service.getAllQuestions().subscribe(data => {
      this.questions = data;
      this.dataSource = new MatTableDataSource<Question>(this.questions);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
