import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container3Component } from './lib28-container3.component';

describe('Lib28Container3Component', () => {
  let component: Lib28Container3Component;
  let fixture: ComponentFixture<Lib28Container3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
