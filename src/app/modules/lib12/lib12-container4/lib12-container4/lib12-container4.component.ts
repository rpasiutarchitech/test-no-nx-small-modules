import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-lib12-container4',
  templateUrl: './lib12-container4.component.html',
  styleUrls: ['./lib12-container4.component.scss']
})
export class Lib12Container4Component implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
