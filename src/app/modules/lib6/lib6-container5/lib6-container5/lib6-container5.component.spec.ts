import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6Container5Component } from './lib6-container5.component';

describe('Lib6Container5Component', () => {
  let component: Lib6Container5Component;
  let fixture: ComponentFixture<Lib6Container5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6Container5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6Container5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
