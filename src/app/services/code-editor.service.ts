import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SourceCode } from '../models/sourceCode';
import { HttpClient } from '@angular/common/http';
import { SnippetExecutionPayload } from '../models/SnippetExecutionPayload';

@Injectable({
  providedIn: 'root'
})
export class CodeEditorService {
  private baseUrl = 'https://localhost:44350/api/CodeEditor'; // Backend API base URL

  constructor(private http: HttpClient) {}

  // Fetch all snippets
  getSnippets(): Observable<SourceCode[]> {
    return this.http.get<SourceCode[]>(`${this.baseUrl}/snippets`);
  }

  // Add a new snippet
  addSnippet(snippet: SourceCode): Observable<SourceCode> {
    return this.http.post<SourceCode>(`${this.baseUrl}/snippet`, snippet);
  }

  // Execute a snippet
  executeSnippet(payload: SnippetExecutionPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/execute`, payload);
  }
}