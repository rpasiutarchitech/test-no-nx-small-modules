import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10ParentContainerComponent } from './lib10-parent-container.component';

describe('Lib10ParentContainerComponent', () => {
  let component: Lib10ParentContainerComponent;
  let fixture: ComponentFixture<Lib10ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
