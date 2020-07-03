import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22ParentContainerComponent } from './lib22-parent-container.component';

describe('Lib22ParentContainerComponent', () => {
  let component: Lib22ParentContainerComponent;
  let fixture: ComponentFixture<Lib22ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib22ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
