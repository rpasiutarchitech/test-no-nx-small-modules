import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container4Component } from './lib6-container4.component';

describe('Lib6Container4Component', () => {
  let component: Lib6Container4Component;
  let fixture: ComponentFixture<Lib6Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
