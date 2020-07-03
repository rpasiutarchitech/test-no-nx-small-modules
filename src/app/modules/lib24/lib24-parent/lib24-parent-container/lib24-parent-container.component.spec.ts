import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24ParentContainerComponent } from './lib24-parent-container.component';

describe('Lib24ParentContainerComponent', () => {
  let component: Lib24ParentContainerComponent;
  let fixture: ComponentFixture<Lib24ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
