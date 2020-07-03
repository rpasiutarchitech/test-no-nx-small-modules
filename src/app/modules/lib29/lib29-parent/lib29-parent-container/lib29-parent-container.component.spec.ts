import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29ParentContainerComponent } from './lib29-parent-container.component';

describe('Lib29ParentContainerComponent', () => {
  let component: Lib29ParentContainerComponent;
  let fixture: ComponentFixture<Lib29ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
