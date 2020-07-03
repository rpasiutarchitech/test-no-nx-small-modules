import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container3Component } from './lib6-container3.component';

describe('Lib6Container3Component', () => {
  let component: Lib6Container3Component;
  let fixture: ComponentFixture<Lib6Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
