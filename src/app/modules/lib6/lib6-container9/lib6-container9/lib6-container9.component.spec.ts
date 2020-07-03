import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container9Component } from './lib6-container9.component';

describe('Lib6Container9Component', () => {
  let component: Lib6Container9Component;
  let fixture: ComponentFixture<Lib6Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
