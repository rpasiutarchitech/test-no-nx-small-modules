import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12ParentContainerComponent } from './lib12-parent-container.component';

describe('Lib12ParentContainerComponent', () => {
  let component: Lib12ParentContainerComponent;
  let fixture: ComponentFixture<Lib12ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
