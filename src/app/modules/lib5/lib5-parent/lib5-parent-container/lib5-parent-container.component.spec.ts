import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5ParentContainerComponent } from './lib5-parent-container.component';

describe('Lib5ParentContainerComponent', () => {
  let component: Lib5ParentContainerComponent;
  let fixture: ComponentFixture<Lib5ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib5ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
