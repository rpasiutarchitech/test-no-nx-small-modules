import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container10Component } from './lib9-container10.component';

describe('Lib9Container10Component', () => {
  let component: Lib9Container10Component;
  let fixture: ComponentFixture<Lib9Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
