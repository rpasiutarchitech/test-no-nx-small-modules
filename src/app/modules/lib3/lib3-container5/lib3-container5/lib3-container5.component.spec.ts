import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3Container5Component } from './lib3-container5.component';

describe('Lib3Container5Component', () => {
  let component: Lib3Container5Component;
  let fixture: ComponentFixture<Lib3Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
