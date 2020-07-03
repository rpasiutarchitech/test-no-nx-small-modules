import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container2Component } from './lib28-container2.component';

describe('Lib28Container2Component', () => {
  let component: Lib28Container2Component;
  let fixture: ComponentFixture<Lib28Container2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
