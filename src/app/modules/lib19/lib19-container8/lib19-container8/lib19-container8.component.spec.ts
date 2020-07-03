import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container8Component } from './lib19-container8.component';

describe('Lib19Container8Component', () => {
  let component: Lib19Container8Component;
  let fixture: ComponentFixture<Lib19Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
