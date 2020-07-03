import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20ParentContainerComponent } from './lib20-parent-container.component';

describe('Lib20ParentContainerComponent', () => {
  let component: Lib20ParentContainerComponent;
  let fixture: ComponentFixture<Lib20ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib20ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
