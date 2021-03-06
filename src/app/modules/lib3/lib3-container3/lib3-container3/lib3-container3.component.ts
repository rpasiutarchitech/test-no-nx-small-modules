import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib3-container3',
  templateUrl: './lib3-container3.component.html',
  styleUrls: ['./lib3-container3.component.scss']
})
export class Lib3Container3Component implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
