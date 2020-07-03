import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container4Component } from './lib19-container4.component';

describe('Lib19Container4Component', () => {
  let component: Lib19Container4Component;
  let fixture: ComponentFixture<Lib19Container4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
