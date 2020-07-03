import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22SharedComponent1Component } from './lib22-shared-component1.component';

describe('Lib22SharedComponent1Component', () => {
  let component: Lib22SharedComponent1Component;
  let fixture: ComponentFixture<Lib22SharedComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22SharedComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22SharedComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
