import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container5Component } from './lib19-container5.component';

describe('Lib19Container5Component', () => {
  let component: Lib19Container5Component;
  let fixture: ComponentFixture<Lib19Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
