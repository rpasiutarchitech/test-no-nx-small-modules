import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4ParentContainerComponent } from './lib4-parent-container.component';

describe('Lib4ParentContainerComponent', () => {
  let component: Lib4ParentContainerComponent;
  let fixture: ComponentFixture<Lib4ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib4ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
