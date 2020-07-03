import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container1Component } from './lib9-container1.component';

describe('Lib9Container1Component', () => {
  let component: Lib9Container1Component;
  let fixture: ComponentFixture<Lib9Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
