import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container8Component } from './lib3-container8.component';

describe('Lib3Container8Component', () => {
  let component: Lib3Container8Component;
  let fixture: ComponentFixture<Lib3Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
