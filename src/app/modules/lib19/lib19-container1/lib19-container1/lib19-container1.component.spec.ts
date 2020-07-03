import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container1Component } from './lib19-container1.component';

describe('Lib19Container1Component', () => {
  let component: Lib19Container1Component;
  let fixture: ComponentFixture<Lib19Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
