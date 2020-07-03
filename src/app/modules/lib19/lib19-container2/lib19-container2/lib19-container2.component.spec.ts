import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Container2Component } from './lib19-container2.component';

describe('Lib19Container2Component', () => {
  let component: Lib19Container2Component;
  let fixture: ComponentFixture<Lib19Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
