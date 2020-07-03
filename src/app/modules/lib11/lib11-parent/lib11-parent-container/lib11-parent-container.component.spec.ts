import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11ParentContainerComponent } from './lib11-parent-container.component';

describe('Lib11ParentContainerComponent', () => {
  let component: Lib11ParentContainerComponent;
  let fixture: ComponentFixture<Lib11ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib11ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
