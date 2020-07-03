import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container8Component } from './lib28-container8.component';

describe('Lib28Container8Component', () => {
  let component: Lib28Container8Component;
  let fixture: ComponentFixture<Lib28Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
