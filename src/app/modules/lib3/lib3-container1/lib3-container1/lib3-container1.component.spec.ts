import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container1Component } from './lib3-container1.component';

describe('Lib3Container1Component', () => {
  let component: Lib3Container1Component;
  let fixture: ComponentFixture<Lib3Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
