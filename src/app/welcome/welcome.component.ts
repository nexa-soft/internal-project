import { Component } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
[x: string]: any;
  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files.filter(file => file.fileEntry.isFile && file.relativePath.endsWith('.pdf'));

    for (const droppedFile of this.files) {
      
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
     
      fileEntry.file((file: File) => {
       
        console.log(droppedFile.relativePath, file);
        
      });
    }
  }
  public fileOver(event: any){
    console.log(event);
  }
  public fileLeave(event: any){
    console.log(event);
  }
}
