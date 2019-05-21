import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'ngStructDir',
  templateUrl: './ngStructDir.html'
})
export class ngStructDirComponent implements  OnInit {
  display: boolean;
  constructor(){
  }
  ngOnInit() {
    this.display = true;
    //console.log("ngOnInit  - Initialized " + this.personName);
}
  changeData() {
    //this.personName = "Someone Else";
    this.display = !this.display;
  }
}