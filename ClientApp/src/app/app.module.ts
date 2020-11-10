import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { QuestionService } from './services/question.service';
import { DeleteQuestionComponent } from './components/delete-question/delete-question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    QuestionsComponent,
    NewQuestionComponent,
    DeleteQuestionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: '/questions', component: QuestionsComponent},
      { path: '/new-question', component: NewQuestionComponent}
    ])
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
