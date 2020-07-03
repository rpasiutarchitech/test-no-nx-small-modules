import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container10Component } from './lib3-container10.component';

describe('Lib3Container10Component', () => {
  let component: Lib3Container10Component;
  let fixture: ComponentFixture<Lib3Container10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
