import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9Container5Component } from './lib9-container5.component';

describe('Lib9Container5Component', () => {
  let component: Lib9Container5Component;
  let fixture: ComponentFixture<Lib9Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
