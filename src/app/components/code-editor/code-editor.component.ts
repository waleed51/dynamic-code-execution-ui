import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeEditorService } from '../../services/code-editor.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
//we can use a service for http calls and inject it here
export class CodeEditorComponent {
  segmentName: string = ''; // Holds the segment name
  code: string = ''; // Holds the code

  constructor(private codeEditorService: CodeEditorService) {}

  saveCode() {
    if (!this.segmentName || !this.code) {
      alert('Segment Name and Code are required!');
      return;
    }

    const snippet = {
      segmentName: this.segmentName,
      code: this.code,
    };

    this.codeEditorService.addSnippet(snippet).subscribe((response:any) => {
        console.log('Snippet saved:', response);
        alert('Snippet saved successfully!');
        this.segmentName = '';
        this.code = '';
      },
      (error:any) => {
        console.error('Error saving snippet:', error);
        alert('Failed to save snippet.');
      }
    );
  }
}
