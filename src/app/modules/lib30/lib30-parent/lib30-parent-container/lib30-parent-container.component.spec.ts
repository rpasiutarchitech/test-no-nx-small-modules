import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30ParentContainerComponent } from './lib30-parent-container.component';

describe('Lib30ParentContainerComponent', () => {
  let component: Lib30ParentContainerComponent;
  let fixture: ComponentFixture<Lib30ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib30ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
