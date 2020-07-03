import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container10Component } from './lib6-container10.component';

describe('Lib6Container10Component', () => {
  let component: Lib6Container10Component;
  let fixture: ComponentFixture<Lib6Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
