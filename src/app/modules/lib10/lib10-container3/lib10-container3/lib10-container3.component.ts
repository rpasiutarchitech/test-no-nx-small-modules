import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lib10-container3',
  templateUrl: './lib10-container3.component.html',
  styleUrls: ['./lib10-container3.component.scss']
})
export class Lib10Container3Component implements OnInit {
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
