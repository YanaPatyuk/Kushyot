import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { FilterGameComponent } from './components/filter-game/filter-game.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'questions', component: QuestionsComponent},
  { path: 'add-question', component: AddQuestionComponent},
  { path: 'play' , component: FilterGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
