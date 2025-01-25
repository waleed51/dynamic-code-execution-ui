import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeEditorService } from '../../services/code-editor.service';

@Component({
  selector: 'app-execution-result',
  templateUrl: './execution-result.component.html',
  styleUrl: './execution-result.component.css'
})
export class ExecutionResultComponent {
  snippetId: number = 0;
  methodName: string = '';
  parameters: any[] = [];
  result: any;

  constructor(private codeEditorService: CodeEditorService) {}

  executeSnippet() {
    if (!this.snippetId || !this.methodName) {
      alert('Snippet ID and Method Name are required!');
      return;
    }

    const payload = {
      id: this.snippetId,
      name: this.methodName,
      parameters: this.parameters,
    };

    this.codeEditorService.executeSnippet(payload).subscribe(
      (response: any) => {
        this.result = response;
        console.log('Execution result:', response);
      },
      (error: any) => {
        console.error('Error executing snippet:', error);
        alert('Execution failed.');
      }
    );
  }
}
