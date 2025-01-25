import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SourceCode } from '../../models/sourceCode';
import { CodeEditorService } from '../../services/code-editor.service';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrl: './code-list.component.css'
})
export class CodeListComponent implements OnInit {
  snippets: SourceCode[] = [];

  constructor(private codeEditorService: CodeEditorService) {}

  ngOnInit() {
    this.codeEditorService.getSnippets().subscribe(
      (data : any) => {
        this.snippets = data;
      },
      (error: any) => {
        console.error('Error fetching snippets:', error);
        alert('Failed to fetch snippets.');
      }
    );
  }
}