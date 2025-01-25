import { Component, Input } from '@angular/core';
import { CodeEditorService } from '../../services/code-editor.service';
import { SnippetExecutionPayload } from '../../models/SnippetExecutionPayload';

@Component({
  selector: 'app-execution-result',
  templateUrl: './execution-result.component.html',
  styleUrl: './execution-result.component.css'
})
export class ExecutionResultComponent {
  snippetId: number = 0;
  methodName: string = '';
  parameters: string = ''; // Bind as a string, later parsed as JSON
  result: any;

  constructor(private codeEditorService: CodeEditorService) {}

  executeSnippet() {
    if (!this.snippetId || !this.methodName) {
      alert('Snippet ID and Method Name are required!');
      return;
    }
  
    let parsedParameters: any[] = [];

    try {
      
      parsedParameters = this.parameters ? JSON.parse(this.parameters) : [];
      console.log(parsedParameters)
      if (!Array.isArray(parsedParameters) || !this.parameters) {
        throw new Error("Parameters must be a JSON array.");
      }
    } catch (error) {
      alert('Invalid parameters! Please enter a valid JSON array.');
      return;
    }
  
     const payload: SnippetExecutionPayload = {
      id: this.snippetId,
      name: this.methodName,
      parameters: parsedParameters,
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
