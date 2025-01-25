import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { CodeListComponent } from './components/code-list/code-list.component';
import { ExecutionResultComponent } from './components/execution-result/execution-result.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: CodeEditorComponent },
  { path: 'list', component: CodeListComponent },
  { path: 'result', component: ExecutionResultComponent },
  { path: '**', redirectTo: 'home' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}