import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container9Component } from './lib3-container9.component';

describe('Lib3Container9Component', () => {
  let component: Lib3Container9Component;
  let fixture: ComponentFixture<Lib3Container9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
