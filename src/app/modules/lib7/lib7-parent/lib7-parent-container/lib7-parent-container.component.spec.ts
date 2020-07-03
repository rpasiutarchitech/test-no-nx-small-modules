import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7ParentContainerComponent } from './lib7-parent-container.component';

describe('Lib7ParentContainerComponent', () => {
  let component: Lib7ParentContainerComponent;
  let fixture: ComponentFixture<Lib7ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
