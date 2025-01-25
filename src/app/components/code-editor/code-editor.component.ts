import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
//we can use a service for http calls and inject it here
export class CodeEditorComponent {
  code: string = '';

  constructor(private http: HttpClient) {}

  saveCode() {
    //we can use a servive
    // we can add API fixed URL in environment file and use it here 
    // we can use error validation for the API Errors
    const sourceFile = { name: 'NewCodeFile', codeContent: this.code };
    this.http.post('/api/CodeEditor/snippet', sourceFile).subscribe(() => {
      alert('Code saved successfully!');
    });
  }
}
