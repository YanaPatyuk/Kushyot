import { Component, OnInit, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { QuestionService } from 'src/app/services/question.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';






@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class QuestionsComponent implements OnInit {
  displayedColumns: string[] = ['questionData', 'author', 'format', 'subject', 'adult', 'date', 'rating', 'action'];
  public questions : Question[];
  paginator: MatPaginator;
  expandedElement: Question | null;
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

buttonLike(question: Question) {
  if(question.rating == null) question.rating = 1;
  else
    question.rating +=1;
  this.service.updateQuestion(question).subscribe(data=> {});
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

  actionMethod(event: any) {
    event.target.disabled = true;
}
}
