import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container9Component } from './lib9-container9.component';

describe('Lib9Container9Component', () => {
  let component: Lib9Container9Component;
  let fixture: ComponentFixture<Lib9Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
