import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CodeEditorComponent,FormsModule, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dynamic-code-execution-ui';
}
