import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container9Component } from './lib19-container9.component';

describe('Lib19Container9Component', () => {
  let component: Lib19Container9Component;
  let fixture: ComponentFixture<Lib19Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
