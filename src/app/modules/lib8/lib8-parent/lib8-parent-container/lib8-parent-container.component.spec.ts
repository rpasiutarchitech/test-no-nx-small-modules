import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8ParentContainerComponent } from './lib8-parent-container.component';

describe('Lib8ParentContainerComponent', () => {
  let component: Lib8ParentContainerComponent;
  let fixture: ComponentFixture<Lib8ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib8ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
