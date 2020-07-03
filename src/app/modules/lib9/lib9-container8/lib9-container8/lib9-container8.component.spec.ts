import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container8Component } from './lib9-container8.component';

describe('Lib9Container8Component', () => {
  let component: Lib9Container8Component;
  let fixture: ComponentFixture<Lib9Container8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
