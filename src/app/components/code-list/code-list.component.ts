import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrl: './code-list.component.css'
})
export class CodeListComponent {
  sourceFiles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSourceFiles();
  }

  loadSourceFiles() {
    this.http.get<any[]>('/api/CodeEditor/snippets').subscribe((data) => {
      this.sourceFiles = data;
    });
  }

  selectFile(file: any) {
    console.log('Selected file:', file);
  }
}
