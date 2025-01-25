import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-execution-result',
  templateUrl: './execution-result.component.html',
  styleUrl: './execution-result.component.css'
})
export class ExecutionResultComponent {
  @Input() result: string = '';
}
