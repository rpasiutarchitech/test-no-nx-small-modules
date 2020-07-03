import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib25ParentContainerComponent } from './lib25-parent-container.component';

describe('Lib25ParentContainerComponent', () => {
  let component: Lib25ParentContainerComponent;
  let fixture: ComponentFixture<Lib25ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib25ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib25ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
