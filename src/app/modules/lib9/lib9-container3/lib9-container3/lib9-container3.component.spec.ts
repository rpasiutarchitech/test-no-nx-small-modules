import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container3Component } from './lib9-container3.component';

describe('Lib9Container3Component', () => {
  let component: Lib9Container3Component;
  let fixture: ComponentFixture<Lib9Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
