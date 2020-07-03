import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container3Component } from './lib19-container3.component';

describe('Lib19Container3Component', () => {
  let component: Lib19Container3Component;
  let fixture: ComponentFixture<Lib19Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
