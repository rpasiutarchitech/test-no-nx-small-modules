import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container4Component } from './lib9-container4.component';

describe('Lib9Container4Component', () => {
  let component: Lib9Container4Component;
  let fixture: ComponentFixture<Lib9Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
