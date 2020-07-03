import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container3Component } from './lib3-container3.component';

describe('Lib3Container3Component', () => {
  let component: Lib3Container3Component;
  let fixture: ComponentFixture<Lib3Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
