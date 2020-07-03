import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18ParentContainerComponent } from './lib18-parent-container.component';

describe('Lib18ParentContainerComponent', () => {
  let component: Lib18ParentContainerComponent;
  let fixture: ComponentFixture<Lib18ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
