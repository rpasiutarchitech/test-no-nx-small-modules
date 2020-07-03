import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28Container9Component } from './lib28-container9.component';

describe('Lib28Container9Component', () => {
  let component: Lib28Container9Component;
  let fixture: ComponentFixture<Lib28Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
