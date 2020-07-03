import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container5Component } from './lib28-container5.component';

describe('Lib28Container5Component', () => {
  let component: Lib28Container5Component;
  let fixture: ComponentFixture<Lib28Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
