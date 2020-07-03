import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14ParentContainerComponent } from './lib14-parent-container.component';

describe('Lib14ParentContainerComponent', () => {
  let component: Lib14ParentContainerComponent;
  let fixture: ComponentFixture<Lib14ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib14ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
