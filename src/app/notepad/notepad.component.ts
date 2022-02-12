import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})


export class NotepadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public inputstr:string | undefined;
  // fileContent: string = '';

  // public OpenFile(fileList: FileList): void {
  //   debugger;
  //   let file = fileList[0];
  //   let fileReader: FileReader = new FileReader();
  //   let self = this;
  //   // fileReader.onloadend = function(x) {
  //   //   self.fileContent = fileReader.result;
  //   // }
  //   fileReader.readAsText(file);
  // }

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef | undefined;
  @ViewChild('TextAreaInput') textAreaInput : ElementRef | undefined;
  myfilename = 'Select File';
  
  copyToClipboard() {
    if(this.textAreaInput)
    {
      debugger;
      this.textAreaInput.nativeElement.select();
      document.execCommand("copy");
      this.textAreaInput.nativeElement.setSelectionRange(0, 0);
      alert('Text Copied to Clipboard!');
    }
  }

  textAreaChange() {

  }

  getTextArea() {
    if(this.inputstr)
      return true;
    else
      return false;
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      // Array.from(fileInput.target.files).forEach((file: File) => {
      //   console.log(file);
      //   this.myfilename += file.name + ',';
      // });

      let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(fileInput.target.files[0]);

      // const reader = new FileReader();
      // reader.onload = (e: any) => {
        
      // };
      // reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      //this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }

  downloadContent() {
      
  }

}

