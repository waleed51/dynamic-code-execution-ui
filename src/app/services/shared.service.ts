import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private selectedFile = new BehaviorSubject<any>(null);
  selectedFile$ = this.selectedFile.asObservable();

  setSelectedFile(file: any) {
    this.selectedFile.next(file);
  }
}
