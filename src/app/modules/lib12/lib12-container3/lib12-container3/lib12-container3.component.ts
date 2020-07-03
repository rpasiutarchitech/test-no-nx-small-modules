import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib12-container3',
  templateUrl: './lib12-container3.component.html',
  styleUrls: ['./lib12-container3.component.scss']
})
export class Lib12Container3Component implements OnInit {
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
