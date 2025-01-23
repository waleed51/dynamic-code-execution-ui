import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
//we can use a service for http calls and inject it here
export class CodeEditorComponent {

  constructor(private httpclient: HttpClient){

  }
  SegmentName ='';
  code ='';

  saveCode(){
    const sourceCode = {SegmentName : this.SegmentName, Code: this.code};
    // we can save API fixed URL in Environment file and load it here 
    // we can use service for handle codes calls and use it here 
    this.httpclient.post('https://localhost:44350/api/CodeEditor/snippet', sourceCode).subscribe((response)=>{
      // we can try catch and use error handly for fail responses
      console.log('saved succeessfully: ', response);
    })
  }
}
