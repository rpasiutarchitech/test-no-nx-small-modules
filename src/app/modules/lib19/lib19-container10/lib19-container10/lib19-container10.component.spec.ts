import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container10Component } from './lib19-container10.component';

describe('Lib19Container10Component', () => {
  let component: Lib19Container10Component;
  let fixture: ComponentFixture<Lib19Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
