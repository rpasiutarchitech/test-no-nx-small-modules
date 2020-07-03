import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container1Component } from './lib6-container1.component';

describe('Lib6Container1Component', () => {
  let component: Lib6Container1Component;
  let fixture: ComponentFixture<Lib6Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
